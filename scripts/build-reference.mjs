/*
 * Created on Fri Nov 13 2026
 *
 * Copyright (c) huni-ee. Licensed under the Apache-2.0 License.
 */

// Nazu 소스 주석으로 레퍼런스를 만든다. TypeDoc 설정은 Nazu의 typedoc.json에 있다.
// TypeDoc이 만든 Markdown을 src/content/docs/reference/<모듈>/로 옮긴다.
//
//   --ref   받을 브랜치나 태그 (기본 main)
//   --repo  받을 저장소 (기본 huni-ee/nazu)
import { execSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { parseArgs } from 'node:util';
import { formatReferenceHierarchy } from './reference-hierarchy.mjs';

const { values: args } = parseArgs({
  options: {
    repo: { type: 'string', default: 'https://github.com/huni-ee/nazu.git' },
    ref: { type: 'string', default: 'main' },
  },
});

const root = path.resolve(import.meta.dirname, '..');
const target = path.join(root, 'src/content/docs/reference');
const baseUrl = '/docs/reference';

function run(command, cwd) {
  execSync(command, { cwd, stdio: 'inherit' });
}

/** Nazu를 .cache/nazu에 받는다. package-lock.json이 바뀌었을 때만 의존성을 다시 설치한다. */
function fetchLibrary() {
  const dir = path.join(root, '.cache/nazu');
  if (existsSync(path.join(dir, '.git'))) {
    run(`git remote set-url origin ${args.repo}`, dir);
    run(`git fetch --depth 1 origin ${args.ref}`, dir);
    run('git reset --hard FETCH_HEAD', dir);
  } else {
    rmSync(dir, { recursive: true, force: true });
    mkdirSync(path.dirname(dir), { recursive: true });
    run(`git clone --depth 1 --branch ${args.ref} ${args.repo} "${dir}"`, root);
  }

  // TypeDoc은 타입만 읽으므로 설치 스크립트(네이티브 빌드, prepare)는 건너뛴다.
  const lockHash = createHash('sha256').update(readFileSync(path.join(dir, 'package-lock.json'))).digest('hex');
  const stamp = path.join(dir, 'node_modules/.lock-hash');
  if (!existsSync(stamp) || readFileSync(stamp, 'utf8') !== lockHash) {
    run('npm ci --ignore-scripts --no-audit --no-fund', dir);
    writeFileSync(stamp, lockHash);
  }
  return dir;
}

const library = fetchLibrary();
const generated = path.join(library, 'docs');

if (!existsSync(path.join(library, 'typedoc.json'))) {
  console.error(`${library}에 typedoc.json이 없습니다. Nazu 저장소에 typedoc.json과 docs 스크립트가 올라가 있는지 확인하세요.`);
  process.exit(1);
}

run('npm run docs', library);

// 생성 파일 이름: "<모듈>.md"는 모듈 페이지, "<모듈>.<종류>.<이름>.md"는 클래스 페이지
function route(file) {
  const parts = file.replace(/\.md$/, '').split('.');
  return { module: parts[0], name: parts.length === 1 ? 'index' : parts.at(-1) };
}

function url({ module, name }) {
  return name === 'index' ? `${baseUrl}/${module}` : `${baseUrl}/${module}/${name}`;
}

function convert(markdown, isModule) {
  let body = markdown.replace(/\r\n/g, '\n');

  // 첫 줄 "# 제목"은 frontmatter의 title로 옮긴다.
  const heading = body.match(/^# (.+)\n+/);
  const title = heading ? heading[1].trim() : '';
  if (heading) body = body.slice(heading[0].length);

  // 제목 아래 한 줄 설명은 description으로 옮긴다.
  // description은 일반 텍스트로 보이므로 링크는 글자만 남기고 백틱은 뺀다.
  let description;
  const summary = body.match(/^([^#|`>\n*-][^\n]*)\n(?:\n|$)/);
  if (summary) {
    description = summary[1]
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/`/g, '')
      .trim();
    body = body.slice(summary[0].length);
  }

  body = body
    // 표 안의 <a id> 앵커는 Markdown에서 그려지지 않으므로 지운다.
    .replace(/<a id="[^"]*"><\/a> ?/g, '')
    // 멤버 사이 구분선
    .replace(/^\*\*\*\n\n?/gm, '')
    // "## 생성자" 바로 아래의 "### 생성자" 중복 제목
    .replace(/^(## (.+)\n\n)### \2\n\n/gm, '$1')
    // 생성 파일끼리의 링크를 문서 주소로 바꾼다.
    // 표 행 앵커(#속성-…)는 위에서 지웠으므로 페이지까지만 잇는다.
    .replace(/\]\(([^)\s]+?)\.md(#[^)]*)?\)/g, (match, file, hash = '') => {
      if (hash.startsWith('#속성-')) hash = '';
      if (file === 'README') return `](${baseUrl}${hash})`;
      return `](${url(route(`${file}.md`))}${hash})`;
    })
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  body = formatReferenceHierarchy(body, title, isModule);

  const frontmatter = [`title: ${JSON.stringify(title)}`];
  if (description) frontmatter.push(`description: ${JSON.stringify(description)}`);
  return `---\n${frontmatter.join('\n')}\n---\n\n${body}\n`;
}

// 직접 쓴 안내 페이지(index.mdx)와 meta.json은 남기고, 모듈 폴더만 새로 만든다.
for (const entry of readdirSync(target, { withFileTypes: true })) {
  if (entry.isDirectory()) rmSync(path.join(target, entry.name), { recursive: true, force: true });
}

let count = 0;
for (const file of readdirSync(generated)) {
  if (!file.endsWith('.md') || file === 'README.md') continue;
  const page = route(file);
  const dir = path.join(target, page.module);
  mkdirSync(dir, { recursive: true });
  writeFileSync(path.join(dir, `${page.name}.md`), convert(readFileSync(path.join(generated, file), 'utf8'), page.name === 'index'));
  count++;
}

console.log(`레퍼런스 ${count}쪽을 ${path.relative(root, target)}에 만들었습니다.`);

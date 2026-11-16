/*
 * Created on Mon Nov 16 2026
 *
 * Copyright (c) huni-ee. Licensed under the Apache-2.0 License.
 */

// TypeDoc의 "확장"·"에 의해 확장됨" 목록을 상속 관계 트리 하나로 합친다.
function transformSection(body, title, level) {
  const marker = '#'.repeat(level);
  const pattern = new RegExp(`^${marker} (확장|에 의해 확장됨)\\n([\\s\\S]*?)(?=^#{1,${level}} |(?![\\s\\S]))`, 'gm');
  const sections = [...body.matchAll(pattern)];
  if (!sections.length || new Set(sections.map((section) => section[1])).size !== sections.length) return body;

  const lists = new Map();
  for (const section of sections) {
    const lines = section[2].trim().split('\n');
    // 목록이 아닌 줄이 있으면 내용을 잃지 않도록 그대로 둔다.
    if (!lines.length || lines.some((line) => !/^- .+/.test(line))) return body;
    lists.set(section[1], lines.map((line) => line.slice(2)));
  }
  const parents = lists.get('확장') ?? [];
  const children = lists.get('에 의해 확장됨') ?? [];
  // 상위 타입이 여럿이면 한 갈래 트리로 그릴 수 없어 그대로 둔다.
  if (parents.length > 1) return body;

  const indent = parents.length ? '  ' : '';
  const tree = [
    `${marker} 상속 관계`,
    '',
    ...parents.map((parent) => `- ${parent}`),
    `${indent}- **\`${title}\`**`,
    ...children.map((child) => `${indent}  - ${child}`),
    '',
    '',
  ].join('\n');

  for (let index = sections.length - 1; index >= 0; index--) {
    const section = sections[index];
    body = body.slice(0, section.index) + (index === 0 ? tree : '') + body.slice(section.index + section[0].length);
  }
  return body;
}

export function formatReferenceHierarchy(body, title, isModule = false) {
  if (!isModule) return transformSection(body, title, 2);

  // 모듈 페이지의 관계 제목은 앞선 인터페이스(###)에 속한다.
  return body.replace(/(^### ([A-Za-z_$][\w.$]*)\n)([\s\S]*?)(?=^#{1,3} |(?![\s\S]))/gm,
    (whole, heading, name, section) => heading + transformSection(section, name, 4));
}

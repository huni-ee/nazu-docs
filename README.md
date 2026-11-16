# Nazu Docs

[Nazu](https://github.com/huni-ee/nazu) 문서 사이트입니다. https://nazu.huniee.dev 에서 볼 수 있습니다.

Next.js 16과 [Fumadocs](https://fumadocs.dev)로 만들고, `out/`에 정적 파일로 내보냅니다.

## 개발

Node.js 22 이상과 pnpm 12가 필요합니다.

```sh
pnpm install
pnpm dev          # 개발 서버 (http://localhost:4321)
pnpm types:check  # 타입 검사
pnpm build        # out/에 정적 파일 생성
pnpm start        # 빌드 결과를 로컬에서 확인
```

## 레퍼런스

`src/content/docs/reference/<모듈>/`은 Nazu 소스 주석으로 만든 페이지입니다. 직접 고치지 말고 다시 만듭니다.

```sh
pnpm reference                # GitHub의 Nazu main 브랜치로 생성
pnpm reference --ref v0.2.0   # 브랜치나 태그 지정
```

- TypeDoc 설정은 Nazu의 `typedoc.json`에 있습니다.
- 받은 소스는 `.cache/nazu`에 두고 다시 씁니다.
- `reference/index.mdx`와 `reference/meta.json`은 직접 관리합니다.
- 문서 사이트의 버전은 Nazu와 별도로 관리합니다. 패키지 이름, Node.js 버전, 저장소 주소가 바뀌면 `src/config.ts`의 `libraryConfig`를 고칩니다.

## 배포

Cloudflare Pages에 GitHub 저장소를 연결하면 `main`에 push할 때마다 배포됩니다.

| 항목 | 값 |
| --- | --- |
| 프레임워크 프리셋 | 없음 |
| 빌드 명령 | `pnpm build` |
| 빌드 출력 디렉터리 | `out` |
| 환경 변수 | `NODE_VERSION` = `22`, `PNPM_VERSION` = `12.16.1` |

- 레퍼런스는 Cloudflare에서 자동으로 만들지 않습니다. `pnpm reference`로 만든 파일을 커밋한 뒤 push합니다.
- 사용자 지정 도메인은 Pages 프로젝트 설정에서 `nazu.huniee.dev`를 추가합니다.

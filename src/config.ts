/*
 * Created on Fri Nov 13 2026
 *
 * Copyright (c) huni-ee. Licensed under the Apache-2.0 License.
 */

/** 사이트 설정 */
export const siteConfig = {
  /** 상단바와 페이지 제목에 쓰는 이름 */
  name: 'Nazu',
  /** 문서 페이지 링크 미리보기의 이름 */
  docsName: 'Nazu Docs',
  /** 배포 주소. Open Graph 이미지 같은 절대 주소의 기준 */
  url: 'https://nazu.huniee.dev',
  /** 검색 결과에 보이는 사이트 설명 */
  description: 'Arisa 서버에 연결해 카카오톡 메세지를 받고 채팅방과 유저를 다루는 Node.js 라이브러리입니다.',
  /** 홈 화면 제목 아래 문구 */
  tagline: 'Arisa Node.js 라이브러리',
  /** 홈 화면 소개 문장. 첫 "Arisa"는 `arisaRepo` 링크로 바뀐다. */
  intro: 'Arisa 서버에 연결해 카카오톡 메세지를 받고, 채팅방과 유저를 다루는 봇을 만들어 보세요.',
  /** 검색 엔진용 키워드. Nazu package.json의 keywords에 한국어 검색어를 더했다. */
  keywords: ['nazu', 'arisa', 'kakao', 'grpc', 'typescript', '카카오톡', '카카오톡 봇'],
  /** 홈 화면 푸터의 저작권자 */
  author: 'huni-ee',
  /** 홈 화면 푸터의 라이선스. Nazu와 같음 */
  license: {
    name: 'Apache-2.0',
    url: 'https://www.apache.org/licenses/LICENSE-2.0',
  },
  /** 문서 저장소. 각 페이지의 "GitHub에서 보기" 링크에 쓴다. */
  docsRepo: {
    user: 'huni-ee',
    repo: 'nazu-docs',
    branch: 'main',
  },
};

/** Nazu 패키지 정보. Nazu package.json과 맞춘다. */
export const libraryConfig = {
  /** package.json의 name. 설치 명령어에 쓴다. */
  name: '@huni_ee/nazu',
  /** 최소 Node.js 버전. package.json의 engines.node */
  nodeVersion: '24.11',
  /** 저장소. 상단바 GitHub 아이콘과 홈 화면 버튼의 링크 */
  repo: 'https://github.com/huni-ee/nazu',
  /** package.json의 bugs.url */
  issues: 'https://github.com/huni-ee/nazu/issues',
  /** Nazu가 연결하는 Arisa 서버 저장소 */
  arisaRepo: 'https://github.com/ye-seola/arisa2',
};

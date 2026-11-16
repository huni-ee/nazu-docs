/*
 * Created on Fri Nov 13 2026
 *
 * Copyright (c) huni-ee. Licensed under the Apache-2.0 License.
 */

import { createGetUrl } from 'fumadocs-core/source';

export const docsRoute = '/docs';
export const docsContentRoute = '/llms.mdx/docs';

// 링크 미리보기 이미지. 디자인을 바꾸면 app/og 폴더 이름의 버전을 올려 메신저 캐시를 비운다.
export const ogImageUrls = {
  home: '/og/nazu-home-v2.png',
  docs: '/og/nazu-docs-v2.png',
};

const getContentUrl = createGetUrl(docsContentRoute);

/** 페이지의 Markdown 원문 주소 (AI 도구용, "Markdown 복사" 버튼) */
export function getPageMarkdownUrl(page: { slugs: string[] }) {
  const segments = [...page.slugs, 'content.md'];

  return { segments, url: getContentUrl(segments) };
}

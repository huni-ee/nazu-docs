/*
 * Created on Fri Nov 13 2026
 *
 * Copyright (c) huni-ee. Licensed under the Apache-2.0 License.
 */

import { source } from '@/utils/content-utils';
import { createFromSource } from 'fumadocs-core/search/server';

export const revalidate = false;

export const { staticGET: GET } = createFromSource(source, {
  // 토크나이저 언어. 'english'로도 한글 본문이 검색되는 것을 확인했다.
  language: 'english',
});

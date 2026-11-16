/*
 * Created on Mon Nov 16 2026
 *
 * Copyright (c) huni-ee. Licensed under the Apache-2.0 License.
 */

import { siteConfig } from '@/config';
import { createOGImage } from '@/utils/og-utils';

export const revalidate = false;

/** 문서 페이지 링크 미리보기 이미지 */
export function GET() {
  return createOGImage(siteConfig.docsName);
}

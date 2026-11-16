/*
 * Created on Fri Nov 13 2026
 *
 * Copyright (c) huni-ee. Licensed under the Apache-2.0 License.
 */

import type { Metadata } from 'next';
import { Provider } from '@/components/Provider';
import { siteConfig } from '@/config';
// 본문 글꼴. 쓰인 글자만 내려받는 dynamic subset 버전
import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css';
import '@/styles/global.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  // og:description, twitter:description으로 복사되지 않게 description 대신 other로 넣는다.
  other: { description: siteConfig.description },
  keywords: siteConfig.keywords,
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

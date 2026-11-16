/*
 * Created on Fri Nov 13 2026
 *
 * Copyright (c) huni-ee. Licensed under the Apache-2.0 License.
 */

import { source } from '@/utils/content-utils';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  MarkdownCopyButton,
  ViewOptionsPopover,
} from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/utils/mdx-utils';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { siteConfig } from '@/config';
import { getPageMarkdownUrl, ogImageUrls } from '@/utils/url-utils';

export default async function Page(props: PageProps<'/docs/[[...slug]]'>) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const markdownUrl = getPageMarkdownUrl(page).url;
  const isReference = params.slug?.[0] === 'reference';
  const { user, repo, branch } = siteConfig.docsRepo;
  // 레퍼런스 목차는 ### 멤버까지만. 반환값·상속 같은 #### 제목은 본문에만 둔다.
  const toc = isReference
    ? page.data.toc.filter((item) => item.depth <= 3)
    : page.data.toc;

  return (
    <DocsPage toc={toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="mb-0">{page.data.description}</DocsDescription>
      <div className="flex flex-row gap-2 items-center border-b pb-6">
        <MarkdownCopyButton markdownUrl={markdownUrl} />
        <ViewOptionsPopover
          markdownUrl={markdownUrl}
          githubUrl={`https://github.com/${user}/${repo}/blob/${branch}/src/content/docs/${page.path}`}
        />
      </div>
      <DocsBody className={isReference ? 'reference-docs' : undefined}>
        <MDX
          components={getMDXComponents(
            {
              // ../examples.mdx 같은 상대 경로 링크를 문서 주소로 바꾼다.
              a: createRelativeLink(source, page),
            },
            isReference,
          )}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

// 목록에 없는 주소는 개발 서버에서도 500 대신 404로 처리한다.
export const dynamicParams = false;

export async function generateMetadata(props: PageProps<'/docs/[[...slug]]'>): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      title: `${siteConfig.docsName} | ${page.data.title}`,
      description: page.data.description ?? siteConfig.description,
      images: [{ url: ogImageUrls.docs, width: 1200, height: 630, type: 'image/png' }],
    },
  };
}

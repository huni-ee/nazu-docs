/*
 * Created on Fri Nov 13 2026
 *
 * Copyright (c) huni-ee. Licensed under the Apache-2.0 License.
 */

import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { ReferenceTable } from '@/components/ReferenceTable';

export function getMDXComponents(components?: MDXComponents, reference = false) {
  return {
    ...defaultMdxComponents,
    ...(reference ? { table: ReferenceTable } : {}),
    // 설명 칸 표시. global.css에서 이 칸의 너비를 잡는다.
    th: ({ children, ...props }) => (
      <th {...props} data-description-column={children === '설명' ? '' : undefined}>
        {children}
      </th>
    ),
    ...components,
  } satisfies MDXComponents;
}

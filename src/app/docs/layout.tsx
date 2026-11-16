/*
 * Created on Fri Nov 13 2026
 *
 * Copyright (c) huni-ee. Licensed under the Apache-2.0 License.
 */

import { source } from '@/utils/content-utils';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/layouts/base-options';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout tree={source.getPageTree()} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}

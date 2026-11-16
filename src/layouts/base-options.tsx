/*
 * Created on Fri Nov 13 2026
 *
 * Copyright (c) huni-ee. Licensed under the Apache-2.0 License.
 */

import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { libraryConfig, siteConfig } from '@/config';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="inline-flex items-center gap-2">
          <img src="/favicon.ico" alt="" width={24} height={24} />
          {siteConfig.name}
        </span>
      ),
    },
    githubUrl: libraryConfig.repo,
  };
}

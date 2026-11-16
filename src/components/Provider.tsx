/*
 * Created on Fri Nov 13 2026
 *
 * Copyright (c) huni-ee. Licensed under the Apache-2.0 License.
 */

'use client';

import SearchDialog from '@/components/Search';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { Suspense, type ReactNode } from 'react';
import { NavigationProgress } from '@/components/NavigationProgress';

export function Provider({ children }: { children: ReactNode }) {
  return (
    <RootProvider search={{ SearchDialog }}>
      <Suspense fallback={null}><NavigationProgress /></Suspense>
      {children}
    </RootProvider>
  );
}

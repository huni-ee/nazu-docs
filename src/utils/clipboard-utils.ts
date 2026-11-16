/*
 * Created on Mon Nov 16 2026
 *
 * Copyright (c) huni-ee. Licensed under the Apache-2.0 License.
 */

import { useState } from 'react';

/** 클립보드 복사와 결과 상태 */
export function useClipboard() {
  const [status, setStatus] = useState<'idle' | 'copied' | 'error'>('idle');

  async function copy(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setStatus('copied');
    } catch {
      setStatus('error');
    }
  }

  return { status, copy, reset: () => setStatus('idle') };
}

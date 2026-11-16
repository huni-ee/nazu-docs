/*
 * Created on Fri Nov 13 2026
 *
 * Copyright (c) huni-ee. Licensed under the Apache-2.0 License.
 */

'use client';

import { Check, Clipboard } from 'lucide-react';
import { libraryConfig } from '@/config';
import { useClipboard } from '@/utils/clipboard-utils';
import styles from '@/styles/home.module.css';

const command = `npm install ${libraryConfig.name}`;

export function CopyCommand() {
  const { status, copy } = useClipboard();

  return (
    <div className={styles.command}>
      <code><span>$</span> {command}</code>
      <button type="button" onClick={() => copy(command)} aria-label="설치 명령어 복사">
        {status === 'copied' ? <Check size={15} aria-hidden="true" /> : <Clipboard size={15} aria-hidden="true" />}
      </button>
      <span className={styles.srOnly} role="status">
        {status === 'copied' ? '명령어를 복사했습니다.' : status === 'error' ? '복사하지 못했습니다. 명령어를 직접 선택해 복사해 주세요.' : ''}
      </span>
    </div>
  );
}

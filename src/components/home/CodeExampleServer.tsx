/*
 * Created on Fri Nov 13 2026
 *
 * Copyright (c) huni-ee. Licensed under the Apache-2.0 License.
 */

import { createCssVariablesTheme, createHighlighter } from 'shiki';
import { CodeExample } from './CodeExample';
import { examples } from '@/constants/code-examples';

// 토큰 색은 var(--code-*)로 내보내고 실제 색은 home.module.css에서 정한다.
const theme = createCssVariablesTheme({ name: 'home', variablePrefix: '--code-', fontStyle: false });

const highlighter = createHighlighter({
  themes: [theme],
  langs: ['typescript'],
});

export async function CodeExampleServer() {
  const shiki = await highlighter;
  const highlighted = examples.map((example) => {
    const result = shiki.codeToTokens(example.lines.join('\n'), {
      lang: 'typescript',
      theme: 'home',
    });
    return {
      ...example,
      tokens: result.tokens.map((line) => line.map((token) => ({
        content: token.content,
        color: token.color ?? 'var(--code-foreground)',
      }))),
    };
  });
  return <CodeExample examples={highlighted} />;
}

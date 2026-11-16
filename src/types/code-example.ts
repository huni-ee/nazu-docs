/*
 * Created on Fri Nov 13 2026
 *
 * Copyright (c) huni-ee. Licensed under the Apache-2.0 License.
 */

export type HighlightedToken = {
  content: string;
  /** 토큰 색. `var(--code-token-keyword)` 같은 CSS 변수 */
  color: string;
};

export type HighlightedExample = {
  title: string;
  filename: string;
  lines: string[];
  tokens: HighlightedToken[][];
};

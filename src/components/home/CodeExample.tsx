/*
 * Created on Fri Nov 13 2026
 *
 * Copyright (c) huni-ee. Licensed under the Apache-2.0 License.
 */

'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { Check, Clipboard } from 'lucide-react';
import type { HighlightedExample } from '@/types/code-example';
import { useClipboard } from '@/utils/clipboard-utils';
import styles from '@/styles/home.module.css';

// 코드 창 높이(줄 수). 이보다 긴 예제는 창 안에서 스크롤한다.
const VISIBLE_LINES = 13;

export function CodeExample({ examples }: { examples: HighlightedExample[] }) {
  const [selected, setSelected] = useState(0);
  const { status, copy, reset } = useClipboard();
  // 탭 자동 전환. .tabProgress 애니메이션이 끝나면 다음 탭으로 넘긴다.
  // 마우스 올림·화면 밖·터치 기기·동작 줄이기 설정일 때는 CSS가 멈춘다.
  const [inView, setInView] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  // 위·아래에 가려진 코드가 있는지. 그쪽 가장자리를 흐리게 한다.
  const preRef = useRef<HTMLPreElement>(null);
  const [more, setMore] = useState({ above: false, below: false });
  const example = examples[selected];

  function updateMore() {
    const pre = preRef.current;
    if (!pre) return;
    const above = pre.scrollTop > 1;
    const below = pre.scrollTop + pre.clientHeight < pre.scrollHeight - 1;
    setMore((prev) => (prev.above === above && prev.below === below ? prev : { above, below }));
  }

  // pre는 탭마다 새로 만들어지므로 탭이 바뀔 때와 크기가 바뀔 때 다시 잰다.
  useEffect(() => {
    const pre = preRef.current;
    if (!pre) return;
    updateMore();
    const observer = new ResizeObserver(updateMore);
    observer.observe(pre);
    return () => observer.disconnect();
  }, [selected]);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.35 });
    observer.observe(panel);
    return () => observer.disconnect();
  }, []);

  function selectExample(index: number) {
    setSelected(index);
    reset();
  }

  return (
    <div
      ref={panelRef}
      className={styles.codePanel}
      data-offscreen={inView ? undefined : ''}
      style={{ '--visible-lines': VISIBLE_LINES } as CSSProperties}
    >
      <div className={styles.windowBar}>
        <div className={styles.windowControls} aria-hidden="true">
          <span /><span /><span />
        </div>
        <span className={styles.windowTitle}>Nazu <span>/</span> {example.filename}</span>
        <button type="button" className={styles.codeCopy} onClick={() => copy(example.lines.join('\n'))} aria-label="코드 복사">
          {status === 'copied' ? <Check size={15} aria-hidden="true" /> : <Clipboard size={15} aria-hidden="true" />}
        </button>
      </div>
      <div className={styles.exampleTabs} aria-label="코드 예제 선택">
        {examples.map((item, index) => (
          <button
            key={item.filename}
            type="button"
            aria-pressed={selected === index}
            className={selected === index ? styles.activeTab : undefined}
            onClick={() => selectExample(index)}
          >
            {item.title}
            {selected === index && (
              <span className={styles.tabProgress} onAnimationEnd={() => selectExample((index + 1) % examples.length)} aria-hidden="true" />
            )}
          </button>
        ))}
      </div>
      <div
        key={example.filename}
        className={styles.codeBody}
        data-more-above={more.above ? '' : undefined}
        data-more-below={more.below ? '' : undefined}
      >
        <pre
          ref={preRef}
          onScroll={updateMore}
          // 스크롤되는 예제는 포커스를 받아 방향키로 내릴 수 있다.
          tabIndex={more.above || more.below ? 0 : undefined}
          aria-label={example.title}
        ><code>{example.tokens.map((line, index) => (
          <span className={styles.codeLine} key={index}>
            <span className={styles.lineNumber} aria-hidden="true">{index + 1}</span>
            <span>{line.length ? line.map((token, tokenIndex) => (
              <span key={tokenIndex} style={{ color: token.color }}>{token.content}</span>
            )) : ' '}</span>
          </span>
        ))}</code></pre>
      </div>
      <div className={styles.codeFooter}>
        <span>TypeScript</span>
        <span>{status === 'copied' ? '복사됨' : status === 'error' ? '복사 실패' : example.filename}</span>
      </div>
      <span className={styles.srOnly} role="status">
        {status === 'copied' ? '코드를 복사했습니다.' : status === 'error' ? '복사하지 못했습니다. 코드를 직접 선택해 복사해 주세요.' : ''}
      </span>
    </div>
  );
}

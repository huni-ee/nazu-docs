/*
 * Created on Mon Nov 16 2026
 *
 * Copyright (c) huni-ee. Licensed under the Apache-2.0 License.
 */

'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const navigationEvent = 'nazu:navigation-start';
/** 막대가 한 번 지나가는 시간(ms). global.css의 navigation-progress 길이와 같다. */
const SWEEP_MS = 1000;

/** 링크 클릭 없이 이동할 때(검색 결과 선택 등) 표시줄을 시작한다. */
export function startNavigationProgress(href: string) {
  window.dispatchEvent(new CustomEvent(navigationEvent, { detail: href }));
}

function routeKey(url: URL) {
  const pathname = url.pathname.replace(/\/+$/, '') || '/';
  return pathname + url.search;
}

/** 페이지 이동 중 화면 위를 지나가는 막대. kbotdocs.dev 방식 */
export function NavigationProgress() {
  const pathname = usePathname();
  const search = useSearchParams();
  const [visible, setVisible] = useState(false);
  const currentRoute = useRef('');
  const targetRoute = useRef<string | null>(null);
  // 막대가 나타난 시각. 숨겨져 있으면 0
  const shownAt = useRef(0);
  const hideTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const safetyTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  function show(route: string) {
    clearTimeout(hideTimer.current);
    clearTimeout(safetyTimer.current);
    targetRoute.current = route;
    if (!shownAt.current) shownAt.current = Date.now();
    setVisible(true);
    // 이동이 중단되거나 실패해도 12초 뒤에는 숨긴다.
    safetyTimer.current = setTimeout(hide, 12000);
  }

  function hide() {
    clearTimeout(hideTimer.current);
    clearTimeout(safetyTimer.current);
    targetRoute.current = null;
    shownAt.current = 0;
    setVisible(false);
  }

  useEffect(() => {
    currentRoute.current = routeKey(new URL(window.location.href));

    function start(href: string) {
      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }
      const route = routeKey(url);
      if (url.origin === window.location.origin && route !== currentRoute.current) show(route);
    }

    function handleClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest('a[href]');
      if (!(link instanceof HTMLAnchorElement) || link.hasAttribute('download')) return;
      if (link.target && link.target.toLowerCase() !== '_self') return;
      start(link.href);
    }

    function handleNavigation(event: Event) {
      if (event instanceof CustomEvent && typeof event.detail === 'string') start(event.detail);
    }

    function handlePopState() {
      start(window.location.href);
    }

    document.addEventListener('click', handleClick, true);
    window.addEventListener(navigationEvent, handleNavigation);
    // 뒤로·앞으로 가기
    window.addEventListener('popstate', handlePopState, true);
    return () => {
      document.removeEventListener('click', handleClick, true);
      window.removeEventListener(navigationEvent, handleNavigation);
      window.removeEventListener('popstate', handlePopState, true);
      clearTimeout(hideTimer.current);
      clearTimeout(safetyTimer.current);
    };
  }, []);

  useEffect(() => {
    const route = routeKey(new URL(window.location.href));
    const previousRoute = currentRoute.current;
    currentRoute.current = route;
    // Next가 popstate 리스너보다 먼저 화면을 갱신한 경우에도 이동을 표시한다.
    if (!targetRoute.current && previousRoute && route !== previousRoute) show(route);
    if (targetRoute.current !== route) return;

    targetRoute.current = null;
    clearTimeout(safetyTimer.current);
    // 페이지가 금방 떠도 깜빡이지 않게, 지나가던 막대가 오른쪽 끝을 벗어날 때 숨긴다.
    hideTimer.current = setTimeout(hide, SWEEP_MS - ((Date.now() - shownAt.current) % SWEEP_MS));
  }, [pathname, search]);

  if (!visible) return null;
  return (
    <div className="navigation-progress" role="progressbar" aria-label="페이지 불러오는 중">
      <div className="navigation-progress-bar" />
    </div>
  );
}

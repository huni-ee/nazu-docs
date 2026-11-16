/*
 * Created on Fri Nov 13 2026
 *
 * Copyright (c) huni-ee. Licensed under the Apache-2.0 License.
 */

import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { CodeExampleServer } from '@/components/home/CodeExampleServer';
import { CopyCommand } from '@/components/home/CopyCommand';
import { libraryConfig, siteConfig } from '@/config';
import { ogImageUrls } from '@/utils/url-utils';
import styles from '@/styles/home.module.css';

export const metadata: Metadata = {
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: `${siteConfig.docsName} | 공식 문서`,
    url: siteConfig.url,
    images: [{ url: ogImageUrls.home, width: 1200, height: 630, type: 'image/png' }],
  },
};

const docLinks = [
  { href: '/docs#시작하기', title: '시작하기', description: '환경 준비부터 첫 연결까지' },
  { href: '/docs/examples', title: '사용 예제', description: '메세지와 채팅방 다루기' },
  { href: '/docs/reference', title: '레퍼런스', description: '클래스와 메서드 살펴보기' },
  { href: '/docs/arisa_bot', title: 'arisa_bot', description: '샘플 봇 실행하고 살펴보기' },
];

/** 흐름 그림의 연결선. index(왼쪽부터 0·1·2)로 점이 지나가는 순서를 정한다. */
function FlowLink({ index, label }: { index: number; label?: string }) {
  return (
    <div
      className={label ? `${styles.flowLink} ${styles.flowBridge}` : styles.flowLink}
      style={{ '--i': index } as CSSProperties}
    >
      {label && <span>{label}</span>}
      <i /><i />
    </div>
  );
}

/** 첫 "Arisa"를 Arisa 저장소 링크로 바꾼 소개 문장 */
function Intro() {
  const index = siteConfig.intro.indexOf('Arisa');
  if (index === -1) return siteConfig.intro;
  return (
    <>
      {siteConfig.intro.slice(0, index)}
      <a href={libraryConfig.arisaRepo} target="_blank" rel="noreferrer">Arisa</a>
      {siteConfig.intro.slice(index + 'Arisa'.length)}
    </>
  );
}

export default function HomePage() {
  return (
    <div className={styles.home}>
      <main className={styles.main}>
        <div className={styles.heroBand}>
          <section className={styles.hero} aria-labelledby="home-title">
            <div className={styles.intro}>
              <h1 id="home-title">{siteConfig.name}</h1>
              <p className={styles.tagline}>{siteConfig.tagline}</p>
              <p className={styles.description}><Intro /></p>
              <div className={styles.actions}>
                <Link className={styles.primaryButton} href="/docs#시작하기">
                  시작하기 <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <a className={styles.secondaryButton} href={libraryConfig.repo} target="_blank" rel="noreferrer">
                  GitHub <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
              <div className={styles.install}>
                <CopyCommand />
                <p className={styles.requirement}>Node.js {libraryConfig.nodeVersion} 이상 <span>·</span> ESM</p>
              </div>
            </div>

            <div className={styles.example}>
              <CodeExampleServer />
              <p className={styles.exampleCaption}>
                <span>Nazu 사용 예제</span>
                <Link href="/docs/examples">예제 보기 <ArrowRight size={14} aria-hidden="true" /></Link>
              </p>
            </div>
          </section>
        </div>

        <div className={styles.container}>
          <section className={styles.flowSection} aria-labelledby="flow-title">
            <div className={styles.flowHeading}>
              <div>
                <h2 id="flow-title">동작 방식</h2>
                <p>카카오톡에 온 메세지를 Arisa가 읽어 봇 코드에 전달하고, 봇 코드의 응답을 다시 카카오톡으로 보냅니다.</p>
              </div>
              <div className={styles.flowLegend} aria-hidden="true">
                <span>받은 메세지</span>
                <span>봇이 보낸 메세지</span>
              </div>
            </div>
            <div
              className={styles.flow}
              role="img"
              aria-label="Android의 카카오톡과 Arisa, 그리고 gRPC로 연결된 Node.js의 Nazu와 봇 코드 사이를 받은 메세지와 봇이 보낸 메세지가 오가는 흐름"
            >
              <div className={styles.flowGroup}>
                <span className={styles.flowGroupLabel}>Android</span>
                <div className={`${styles.flowNode} ${styles.flowStart}`}><strong>카카오톡</strong><small>채팅방 메세지</small></div>
                <FlowLink index={0} />
                <div className={styles.flowNode}><strong>Arisa</strong><small>DB에서 읽고 응답을 전송</small></div>
              </div>
              <FlowLink index={1} label="gRPC" />
              <div className={styles.flowGroup}>
                <span className={styles.flowGroupLabel}>Node.js</span>
                <div className={styles.flowNode}><strong>Nazu</strong><small>이벤트로 전달</small></div>
                <FlowLink index={2} />
                <div className={`${styles.flowNode} ${styles.flowEnd}`}><strong>봇 코드</strong><small>이벤트를 처리하고 응답</small></div>
              </div>
            </div>
          </section>

          <section className={styles.docSection} aria-labelledby="doc-section-title">
            <div className={styles.docHeading}>
              <h2 id="doc-section-title">문서 둘러보기</h2>
            </div>
            <div className={styles.docLinks}>
              {docLinks.map(({ href, title, description }) => (
                <Link key={href} className={styles.docLink} href={href}>
                  <span><strong>{title}</strong><small>{description}</small></span>
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          © {new Date().getFullYear()} {siteConfig.author}.{' '}
          <a href={siteConfig.license.url} target="_blank" rel="noreferrer">{siteConfig.license.name}</a> 라이선스를 따릅니다.
          <span aria-hidden="true"> / </span><Link href="/docs">문서</Link>
          <span aria-hidden="true"> / </span><a href={libraryConfig.repo} target="_blank" rel="noreferrer">GitHub</a>
          <span aria-hidden="true"> / </span><a href={libraryConfig.issues} target="_blank" rel="noreferrer">이슈 제보</a>
        </p>
        <p>
          Powered by <a href="https://nextjs.org" target="_blank" rel="noreferrer">Next.js</a> &amp;{' '}
          <a href="https://fumadocs.dev" target="_blank" rel="noreferrer">Fumadocs</a>
        </p>
      </footer>
    </div>
  );
}

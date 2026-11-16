/*
 * Created on Fri Nov 13 2026
 *
 * Copyright (c) huni-ee. Licensed under the Apache-2.0 License.
 */

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { ImageResponse } from 'next/og';
import { arisaOutline } from '@/utils/arisa-outline';

/** favicon.ico에서 가장 큰 PNG를 data URL로 꺼낸다. next/og는 .ico를 읽지 못한다. */
async function readIconPng(): Promise<string> {
  const ico = await readFile(path.join(process.cwd(), 'src/app/favicon.ico'));
  let best: { size: number; data: Buffer } | null = null;
  for (let i = 0; i < ico.readUInt16LE(4); i++) {
    const entry = 6 + 16 * i;
    const size = ico[entry] || 256;
    const offset = ico.readUInt32LE(entry + 12);
    const data = ico.subarray(offset, offset + ico.readUInt32LE(entry + 8));
    const isPng = data.subarray(0, 4).toString('hex') === '89504e47';
    if (isPng && (best === null || size > best.size)) best = { size, data };
  }
  if (best === null) throw new Error('src/app/favicon.ico에 PNG 이미지가 없습니다.');
  return `data:image/png;base64,${best.data.toString('base64')}`;
}

const fontPromise = readFile(path.join(
  process.cwd(),
  'node_modules/pretendard/dist/public/static/alternative/Pretendard-SemiBold.ttf',
));

const backgroundWords = [
  { text: 'message', top: 117, left: 165 },
  { text: 'channel', top: 70, left: 510 },
  { text: 'user', bottom: 103, right: 124 },
];

/** 아이콘과 제목을 가운데에 둔 1200×630 링크 미리보기 이미지 */
export async function createOGImage(title: string) {
  const [icon, font] = await Promise.all([readIconPng(), fontPromise]);
  const dots = Array.from({ length: 234 }, (_, i) => {
    const x = i % 18;
    const y = Math.floor(i / 18);
    const strength = Math.max(0, 1 - (x + y) / 30);
    return { x, y, opacity: 0.15 + strength * 0.55, radius: 1 + strength * 2.7 };
  });
  return new ImageResponse(
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: '#f7f6f2',
      fontFamily: 'Pretendard',
    }}>
      <svg width="1200" height="630" viewBox="0 0 1200 630" style={{ position: 'absolute', top: 0, left: 0 }}>
        {dots.map(({ x, y, opacity, radius }) => (
          <circle key={`top-${x}-${y}`} cx={x * 13 + 5} cy={y * 13 + 5} r={radius} fill="#d8b24b" opacity={opacity} />
        ))}
        {dots.map(({ x, y, opacity, radius }) => (
          <circle key={`bottom-${x}-${y}`} cx={1195 - x * 13} cy={625 - y * 13} r={radius} fill="#d8b24b" opacity={opacity} />
        ))}
        <g transform="translate(185 438) scale(0.165 -0.165)" fill="none" stroke="#d8b85e" strokeWidth="10" opacity="0.42" strokeLinejoin="round">
          {arisaOutline.map(({ x, d }) => (
            <path key={x} d={d} transform={`translate(${x} 0)`} />
          ))}
        </g>
        <path d="M 925 118 C 925 82 961 58 1003 58 C 1045 58 1081 82 1081 118 C 1081 154 1045 178 1003 178 C 994 178 985 177 977 174 L 958 190 L 962 167 C 939 156 925 139 925 118 Z" fill="none" stroke="#d2ad42" strokeWidth="5" opacity="0.48" />
        <circle cx="208" cy="510" r="43" fill="none" stroke="#d2ad42" strokeWidth="4" opacity="0.34" />
        <circle cx="590" cy="163" r="30" fill="none" stroke="#d2ad42" strokeWidth="2" opacity="0.3" />
      </svg>
      {backgroundWords.map(({ text, ...position }) => (
        <div key={text} style={{ display: 'flex', position: 'absolute', ...position, color: '#c89f37', opacity: 0.12, fontSize: 84, transform: 'rotate(-22deg)' }}>{text}</div>
      ))}
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '70px 80px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 22, width: '100%' }}>
          <img src={icon} width={86} height={86} alt="" style={{ flexShrink: 0 }} />
          <span style={{ color: '#201c17', fontSize: 96, lineHeight: 1.15, textAlign: 'center', overflowWrap: 'break-word' }}>{title}</span>
        </div>
      </div>
    </div>,
    { width: 1200, height: 630, fonts: [{ name: 'Pretendard', data: font, weight: 600, style: 'normal' }] },
  );
}

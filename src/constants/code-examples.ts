/*
 * Created on Fri Nov 13 2026
 *
 * Copyright (c) huni-ee. Licensed under the Apache-2.0 License.
 */

/** import, 클라이언트 생성, start()로 리스너를 감싼 예제 */
function example(title: string, filename: string, listener: string[]) {
  return {
    title,
    filename,
    lines: [
      "import { ArisaClient } from '@huni_ee/nazu';",
      '',
      'const client = new ArisaClient();',
      ...listener,
      '',
      'await client.start();',
    ],
  };
}

/** 홈 화면 코드 창의 탭 예제. Ping 외에는 arisa_bot 이벤트 처리를 줄여 옮겼다. */
export const examples = [
  example('Ping', 'ping.ts', [
    "client.on('message', async (chat, channel) => {",
    "  if (chat.text === '!ping') {",
    "    await channel.send('pong!');",
    '  }',
    '});',
  ]),
  example('입장', 'join.ts', [
    "client.on('join', async (chat, channel) => {",
    '  await channel.send(`${chat.joinedUser.name}님이 입장했습니다`);',
    '});',
  ]),
  example('퇴장', 'leave.ts', [
    "client.on('leave', async (chat, channel) => {",
    '  await channel.send(`${chat.leftUser.name}님 잘가요`);',
    '});',
  ]),
  example('삭제', 'delete.ts', [
    "client.on('delete', async (chat, channel) => {",
    '  if (chat.deletedBy === null) return;',
    '  await channel.send(`${chat.deletedBy.name}님이 메세지를 삭제했습니다`);',
    '});',
  ]),
  example('가리기', 'hide.ts', [
    "client.on('hide', async (chat, channel) => {",
    '  if (chat.hiddenBy === null) return;',
    '  await channel.send(`${chat.hiddenBy.name}님이 메세지를 가렸어요`);',
    '});',
  ]),
];

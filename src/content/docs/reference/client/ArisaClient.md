---
title: "ArisaClient"
description: "Arisa 서버에 연결해 이벤트를 받고 채팅방과 유저를 조회하는 클라이언트"
---

## 예제

```ts
const client = new ArisaClient();
client.on('message', async (chat, channel) => {
  if (chat.text === '!ping') await channel.send('pong!');
});
await client.start();
```

## 생성자

```ts
new ArisaClient(options?): ArisaClient;
```

클라이언트를 만듭니다. 서버에는 `start()`나 `connect()`를 호출할 때 연결합니다.

#### 매개변수

| 매개변수 | 타입 | 설명 |
| ------ | ------ | ------ |
| `options?` | [`ArisaClientOptions`](/docs/reference/client#arisaclientoptions) | 클라이언트 옵션 |

#### 반환값

`ArisaClient`

## 속성

| 속성 | 수정자 | 타입 | 설명 |
| ------ | ------ | ------ | ------ |
| `botName` | `readonly` | `string` \| `null` | 이벤트의 `UserSelf`에 표시할 이름. 지정하지 않았으면 `null` |
| `openProfileIntervalMs` | `readonly` | `number` | 오픈프로필 변경을 확인하는 간격(밀리초) |
| `target` | `readonly` | `string` | 연결할 Arisa 서버 주소 |

## 메서드

### connect()

```ts
connect(): Promise<void>;
```

Arisa 서버에 연결하고 로컬 데이터베이스와 인증 정보를 준비합니다. 이벤트 수신은 시작하지 않습니다.
인증 정보 준비에 실패해도 오류 없이 완료됩니다.

#### 반환값

`Promise`\<`void`\>

#### Throws

`stop()`한 클라이언트에서 호출할 때. 다시 쓰려면 `start()`를 호출하세요.

### getChannel()

```ts
getChannel(channelId): Promise<Channel>;
```

채팅방 ID로 채팅방을 조회합니다.

#### 매개변수

| 매개변수 | 타입 | 설명 |
| ------ | ------ | ------ |
| `channelId` | `string` | 채팅방 ID |

#### 반환값

`Promise`\<[`Channel`](/docs/reference/channel/Channel)\>

### getOpenUser()

```ts
getOpenUser(userId): Promise<UserSelf | OpenUser>;
```

저장된 오픈채팅 유저 ID로 채팅방을 찾아 프로필과 역할을 조회합니다.

#### 매개변수

| 매개변수 | 타입 | 설명 |
| ------ | ------ | ------ |
| `userId` | `string` | 오픈채팅 유저 ID. 큰 정수는 문자열로 넘깁니다. |

#### 반환값

`Promise`\<[`UserSelf`](/docs/reference/user/UserSelf) \| [`OpenUser`](/docs/reference/user/OpenUser)\>

#### Throws

`userId`가 양의 64비트 정수 문자열이 아닐 때

### getUser()

```ts
getUser(userId): Promise<
  | NormalUser
  | UserSelf
| OpenUser>;
```

유저 ID로 저장된 일반 채팅 또는 오픈채팅 유저를 조회합니다.
오픈채팅 유저는 저장된 채팅방을 찾아 프로필과 역할까지 조회합니다.

#### 매개변수

| 매개변수 | 타입 | 설명 |
| ------ | ------ | ------ |
| `userId` | `string` | 유저 ID. 큰 정수가 정확하도록 문자열로 넘깁니다. |

#### 반환값

`Promise`\<
  \| [`NormalUser`](/docs/reference/user/NormalUser)
  \| [`UserSelf`](/docs/reference/user/UserSelf)
  \| [`OpenUser`](/docs/reference/user/OpenUser)\>

#### Throws

`userId`가 양의 64비트 정수 문자열이 아닐 때

### getUsers()

```ts
getUsers(userIds): Promise<(
  | NormalUser
  | UserSelf
| OpenUser)[]>;
```

유저 ID 목록으로 유저를 한꺼번에 조회합니다.
같은 ID는 한 번만 조회하고, 결과는 입력과 같은 순서와 중복 위치로 돌려줍니다.

#### 매개변수

| 매개변수 | 타입 | 설명 |
| ------ | ------ | ------ |
| `userIds` | readonly `string`[] | 유저 ID 목록. 큰 정수는 문자열로 넘깁니다. |

#### 반환값

`Promise`\<(
  \| [`NormalUser`](/docs/reference/user/NormalUser)
  \| [`UserSelf`](/docs/reference/user/UserSelf)
  \| [`OpenUser`](/docs/reference/user/OpenUser))[]\>

#### Throws

배열이 아니거나 올바르지 않은 ID가 있을 때

### healthCheck()

```ts
healthCheck(): Promise<void>;
```

Arisa 서버가 응답하는지 확인합니다. 응답하지 않으면 오류가 납니다.

#### 반환값

`Promise`\<`void`\>

### kakaoLink()

```ts
kakaoLink(options): KakaoLink;
```

Arisa의 인증 정보로 로그인하는 카카오링크 클라이언트를 만듭니다. 보내기 전에 `init()`을 호출하세요.

#### 매개변수

| 매개변수 | 타입 | 설명 |
| ------ | ------ | ------ |
| `options` | [`KakaoLinkOptions`](/docs/reference/kakao-link#kakaolinkoptions) | 카카오링크 앱 키와 웹 도메인 |

#### 반환값

[`KakaoLink`](/docs/reference/kakao-link/KakaoLink)

### off()

```ts
off<Name>(event, listener): this;
```

이벤트 리스너를 해제합니다. 마지막 `open_profile_change` 리스너를 해제하면 프로필 확인을 멈춥니다.

#### 타입 매개변수

| 타입 매개변수 |
| ------ |
| `Name` *extends* keyof `ClientListenerMap` |

#### 매개변수

| 매개변수 | 타입 | 설명 |
| ------ | ------ | ------ |
| `event` | `Name` | 이벤트 이름 |
| `listener` | `ClientListenerMap`\[`Name`\] | 등록할 때 넘긴 함수 |

#### 반환값

`this`

클라이언트 자신

### on()

```ts
on<Name>(event, listener): this;
```

이벤트 리스너를 등록합니다. 연결된 상태에서 `open_profile_change`를 등록하면 프로필 확인을 시작합니다.

#### 타입 매개변수

| 타입 매개변수 |
| ------ |
| `Name` *extends* keyof `ClientListenerMap` |

#### 매개변수

| 매개변수 | 타입 | 설명 |
| ------ | ------ | ------ |
| `event` | `Name` | 이벤트 이름 |
| `listener` | `ClientListenerMap`\[`Name`\] | 이벤트에 맞는 인자를 받는 리스너 |

#### 반환값

`this`

클라이언트 자신

### query()

```ts
query(
   sql, 
   params?, 
   limit?
): Promise<Record<string, unknown>[]>;
```

Arisa 데이터베이스에 SQL을 실행하고 결과 행을 돌려줍니다.

#### 매개변수

| 매개변수 | 타입 | 기본값 | 설명 |
| ------ | ------ | ------ | ------ |
| `sql` | `string` | `undefined` | 실행할 SQL |
| `params?` | readonly (`string` \| `number` \| `boolean` \| `null`)[] | `[]` | SQL에 바인딩할 값 |
| `limit?` | `number` | `undefined` | 최대 결과 행 수. 생략하면 Arisa 서버 기본값을 씁니다. |

#### 반환값

`Promise`\<`Record`\<`string`, `unknown`\>[]\>

### start()

```ts
start(): Promise<void>;
```

서버에 연결하고 이벤트 수신을 시작합니다. 대시보드가 켜져 있으면 함께 시작합니다.

연결이 끊기면 3초마다 다시 연결하고, `SIGINT`나 `SIGTERM`을 받으면 종료합니다.
이벤트를 처음부터 받으려면 호출하기 전에 리스너를 등록하세요.

#### 반환값

`Promise`\<`void`\>

이벤트 수신이 끝나면 완료됩니다.

### stop()

```ts
stop(options?): Promise<void>;
```

이벤트 수신과 연결을 끝냅니다. 끝낸 클라이언트는 `start()`로 다시 시작할 수 있습니다.

#### 매개변수

| 매개변수 | 타입 | 설명 |
| ------ | ------ | ------ |
| `options?` | \{ `closeDashboard?`: `boolean`; \} | `closeDashboard`를 `false`로 넘기면 대시보드는 켜 둡니다. |
| `options.closeDashboard?` | `boolean` | - |

#### 반환값

`Promise`\<`void`\>

대시보드가 닫히면 완료됩니다. 켜 두면 바로 완료됩니다.

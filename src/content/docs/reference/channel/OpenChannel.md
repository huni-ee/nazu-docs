---
title: "OpenChannel"
description: "오픈채팅방"
---

## 상속 관계

- [`Channel`](/docs/reference/channel/Channel)
  - **`OpenChannel`**

## 속성

| 속성 | 수정자 | 타입 | 설명 | 오버라이드 대상: | 상속받은 타입: |
| ------ | ------ | ------ | ------ | ------ | ------ |
| `id` | `readonly` | `string` | 채팅방 ID | - | [`Channel`](/docs/reference/channel/Channel).[`id`](/docs/reference/channel/Channel) |
| `name` | `readonly` | `string` \| `null` | 채팅방 이름 | - | [`Channel`](/docs/reference/channel/Channel).[`name`](/docs/reference/channel/Channel) |
| `openChannel` | `readonly` | [`OpenChannelInfo`](/docs/reference/channel#openchannelinfo) \| `null` | 오픈채팅방 정보. 일반 채팅방이면 `null` | - | [`Channel`](/docs/reference/channel/Channel).[`openChannel`](/docs/reference/channel/Channel) |
| `privateName` | `readonly` | `string` \| `null` | 채팅방 이름 설정에서 내가 지정한 이름 | - | [`Channel`](/docs/reference/channel/Channel).[`privateName`](/docs/reference/channel/Channel) |
| `raw` | `readonly` | [`ChannelRaw`](/docs/reference/channel#channelraw) | 채팅방 원본 데이터 | - | [`Channel`](/docs/reference/channel/Channel).[`raw`](/docs/reference/channel/Channel) |
| `type` | `readonly` | [`OpenChannelType`](/docs/reference/channel#openchanneltype) | 오픈채팅방 종류 | [`Channel`](/docs/reference/channel/Channel).[`type`](/docs/reference/channel/Channel) | - |

## 접근자

### botUsers

#### get 시그니쳐

```ts
get botUsers(): Promise<BotUser[]>;
```

채팅방에 추가된 챗봇 목록

##### 반환값

`Promise`\<[`BotUser`](/docs/reference/user/BotUser)[]\>

#### 상속받은 타입:

[`Channel`](/docs/reference/channel/Channel).[`botUsers`](/docs/reference/channel/Channel#botusers)

### host

#### get 시그니쳐

```ts
get host(): Promise<User | null>;
```

방장. 방장이 없는 채팅방이거나 찾지 못하면 `null`

##### 반환값

`Promise`\<[`User`](/docs/reference/user/User) \| `null`\>

#### 상속받은 타입:

[`Channel`](/docs/reference/channel/Channel).[`host`](/docs/reference/channel/Channel#host)

### memberIds

#### get 시그니쳐

```ts
get memberIds(): Promise<string[]>;
```

지금 채팅방에 있는 멤버 ID 목록

##### 반환값

`Promise`\<`string`[]\>

#### 상속받은 타입:

[`Channel`](/docs/reference/channel/Channel).[`memberIds`](/docs/reference/channel/Channel#memberids)

### members

#### get 시그니쳐

```ts
get members(): Promise<User[]>;
```

지금 채팅방에 있는 멤버 목록

##### 반환값

`Promise`\<[`User`](/docs/reference/user/User)[]\>

#### 상속받은 타입:

[`Channel`](/docs/reference/channel/Channel).[`members`](/docs/reference/channel/Channel#members)

### moderators

#### get 시그니쳐

```ts
get moderators(): Promise<User[]>;
```

부방장 목록. 부방장이 없는 채팅방이면 빈 배열

##### 반환값

`Promise`\<[`User`](/docs/reference/user/User)[]\>

#### 상속받은 타입:

[`Channel`](/docs/reference/channel/Channel).[`moderators`](/docs/reference/channel/Channel#moderators)

## 메서드

### enter()

```ts
enter(): Promise<void>;
```

채팅방에 입장합니다.

#### 반환값

`Promise`\<`void`\>

#### 상속받은 타입:

[`Channel`](/docs/reference/channel/Channel).[`enter`](/docs/reference/channel/Channel#enter)

### getChat()

```ts
getChat(logId): Promise<MessageChat>;
```

로그 ID로 메세지를 조회합니다.

#### 매개변수

| 매개변수 | 타입 | 설명 |
| ------ | ------ | ------ |
| `logId` | `string` | 메세지 로그 ID |

#### 반환값

`Promise`\<[`MessageChat`](/docs/reference/chat/MessageChat)\>

#### Throws

클라이언트와 연결되지 않은 채팅방 객체에서 호출할 때

#### 상속받은 타입:

[`Channel`](/docs/reference/channel/Channel).[`getChat`](/docs/reference/channel/Channel#getchat)

### getChatCountsByUser()

```ts
getChatCountsByUser(options?): Promise<ChatCount<User>[]>;
```

기간 안에 유저마다 보낸 채팅 수를 셉니다. 조회되지 않은 유저는 결과에서 빠집니다.

#### 매개변수

| 매개변수 | 타입 | 설명 |
| ------ | ------ | ------ |
| `options?` | [`ChatCountOptions`](/docs/reference/channel#chatcountoptions) | 집계 기간과 피드 포함 여부. 생략하면 처음부터 지금까지 피드 없이 셉니다. |

#### 반환값

`Promise`\<[`ChatCount`](/docs/reference/channel#chatcount)\<[`User`](/docs/reference/user/User)\>[]\>

#### Throws

날짜가 올바르지 않거나 `startDate`가 `endDate`보다 늦을 때

#### 상속받은 타입:

[`Channel`](/docs/reference/channel/Channel).[`getChatCountsByUser`](/docs/reference/channel/Channel#getchatcountsbyuser)

### getChats()

```ts
getChats(logIds): Promise<MessageChat[]>;
```

여러 로그 ID로 메세지를 한꺼번에 조회합니다.

#### 매개변수

| 매개변수 | 타입 | 설명 |
| ------ | ------ | ------ |
| `logIds` | `string`[] | 메세지 로그 ID 목록 |

#### 반환값

`Promise`\<[`MessageChat`](/docs/reference/chat/MessageChat)[]\>

#### Throws

클라이언트와 연결되지 않은 채팅방 객체에서 호출할 때

#### 상속받은 타입:

[`Channel`](/docs/reference/channel/Channel).[`getChats`](/docs/reference/channel/Channel#getchats)

### getRecentChats()

```ts
getRecentChats(count?): Promise<MessageChat[]>;
```

최근 메세지를 조회합니다. 메세지가 없으면 빈 배열을 돌려줍니다.

#### 매개변수

| 매개변수 | 타입 | 기본값 | 설명 |
| ------ | ------ | ------ | ------ |
| `count?` | `number` | `1` | 조회할 메세지 수. 소수점 아래는 버립니다. |

#### 반환값

`Promise`\<[`MessageChat`](/docs/reference/chat/MessageChat)[]\>

#### Throws

`count`가 유한한 수가 아니거나 소수점 아래를 버린 값이 1보다 작을 때

#### 상속받은 타입:

[`Channel`](/docs/reference/channel/Channel).[`getRecentChats`](/docs/reference/channel/Channel#getrecentchats)

### isCommunityOpenMultiChannel()

```ts
isCommunityOpenMultiChannel(): boolean;
```

커뮤니티 오픈 그룹 채팅(`COM`) 여부

#### 반환값

`boolean`

#### 상속받은 타입:

[`Channel`](/docs/reference/channel/Channel).[`isCommunityOpenMultiChannel`](/docs/reference/channel/Channel#iscommunityopenmultichannel)

### isDirectChannel()

```ts
isDirectChannel(): boolean;
```

일반 1:1 채팅(`DirectChat`) 여부

#### 반환값

`boolean`

#### 상속받은 타입:

[`Channel`](/docs/reference/channel/Channel).[`isDirectChannel`](/docs/reference/channel/Channel#isdirectchannel)

### isMemoChannel()

```ts
isMemoChannel(): boolean;
```

나와의 채팅(`MemoChat`) 여부

#### 반환값

`boolean`

#### 상속받은 타입:

[`Channel`](/docs/reference/channel/Channel).[`isMemoChannel`](/docs/reference/channel/Channel#ismemochannel)

### isMultiChannel()

```ts
isMultiChannel(): boolean;
```

일반 그룹 채팅(`MultiChat`) 여부

#### 반환값

`boolean`

#### 상속받은 타입:

[`Channel`](/docs/reference/channel/Channel).[`isMultiChannel`](/docs/reference/channel/Channel#ismultichannel)

### isNormalChannel()

```ts
isNormalChannel(): this is NormalChannel;
```

일반 채팅방 여부

#### 반환값

`this is NormalChannel`

#### 상속받은 타입:

[`Channel`](/docs/reference/channel/Channel).[`isNormalChannel`](/docs/reference/channel/Channel#isnormalchannel)

### isOpenChannel()

```ts
isOpenChannel(): this is OpenChannel;
```

오픈채팅방 여부

#### 반환값

`this is OpenChannel`

#### 상속받은 타입:

[`Channel`](/docs/reference/channel/Channel).[`isOpenChannel`](/docs/reference/channel/Channel#isopenchannel)

### isOpenDirectChannel()

```ts
isOpenDirectChannel(): boolean;
```

1:1 오픈채팅(`OD`) 여부

#### 반환값

`boolean`

#### 상속받은 타입:

[`Channel`](/docs/reference/channel/Channel).[`isOpenDirectChannel`](/docs/reference/channel/Channel#isopendirectchannel)

### isOpenMultiChannel()

```ts
isOpenMultiChannel(): boolean;
```

그룹 오픈채팅(`OM`) 여부

#### 반환값

`boolean`

#### 상속받은 타입:

[`Channel`](/docs/reference/channel/Channel).[`isOpenMultiChannel`](/docs/reference/channel/Channel#isopenmultichannel)

### isPlusChannel()

```ts
isPlusChannel(): boolean;
```

카카오톡 채널(`PlusChat`) 여부

#### 반환값

`boolean`

#### 상속받은 타입:

[`Channel`](/docs/reference/channel/Channel).[`isPlusChannel`](/docs/reference/channel/Channel#ispluschannel)

### isTeamMultiChannel()

```ts
isTeamMultiChannel(): boolean;
```

팀채팅(`TeamMultiChat`) 여부

#### 반환값

`boolean`

#### 상속받은 타입:

[`Channel`](/docs/reference/channel/Channel).[`isTeamMultiChannel`](/docs/reference/channel/Channel#isteammultichannel)

### read()

```ts
read(): Promise<void>;
```

채팅방을 읽음 처리합니다.

#### 반환값

`Promise`\<`void`\>

#### 상속받은 타입:

[`Channel`](/docs/reference/channel/Channel).[`read`](/docs/reference/channel/Channel#read)

### send()

```ts
send(message, threadId?): Promise<void>;
```

채팅방에 메세지를 보냅니다.

#### 매개변수

| 매개변수 | 타입 | 설명 |
| ------ | ------ | ------ |
| `message` | `string` | 보낼 메세지 |
| `threadId?` | `string` \| `null` | 스레드에 보낼 때 스레드 ID |

#### 반환값

`Promise`\<`void`\>

#### 상속받은 타입:

[`Channel`](/docs/reference/channel/Channel).[`send`](/docs/reference/channel/Channel#send)

### sendMedia()

```ts
sendMedia(files, options?): Promise<void>;
```

채팅방에 파일을 보냅니다. 파일 경로, URL, 바이트, [MediaFile](/docs/reference/channel#mediafile)을 넣을 수 있습니다.

`options.mode`를 생략하면 하나는 `single`, 배열은 `multiple`로 보냅니다.

#### 매개변수

| 매개변수 | 타입 | 설명 |
| ------ | ------ | ------ |
| `files` | \| [`MediaInput`](/docs/reference/channel#mediainput) \| [`MediaInput`](/docs/reference/channel#mediainput)[] | 보낼 파일이나 파일 목록 |
| `options?` | [`SendMediaOptions`](/docs/reference/channel#sendmediaoptions) | 전송 방식 |

#### 반환값

`Promise`\<`void`\>

#### Throws

`files`가 빈 배열일 때

#### 상속받은 타입:

[`Channel`](/docs/reference/channel/Channel).[`sendMedia`](/docs/reference/channel/Channel#sendmedia)

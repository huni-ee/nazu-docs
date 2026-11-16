---
title: "EmoticonChat"
description: "이모티콘 메세지"
---

## 상속 관계

- [`MessageChat`](/docs/reference/chat/MessageChat)
  - **`EmoticonChat`**

## 속성

| 속성 | 수정자 | 타입 | 설명 | 상속받은 타입: |
| ------ | ------ | ------ | ------ | ------ |
| `attachment` | `readonly` | [`Attachment`](/docs/reference/chat#attachment) | 첨부 데이터. 첨부가 없으면 빈 객체 | [`MessageChat`](/docs/reference/chat/MessageChat).[`attachment`](/docs/reference/chat/MessageChat) |
| `id` | `readonly` | `string` | 메세지 로그 ID | [`MessageChat`](/docs/reference/chat/MessageChat).[`id`](/docs/reference/chat/MessageChat) |
| `originType` | `readonly` | `number` | `type`에서 삭제 표시(`0x4000`)를 뺀 메세지 타입 번호 1 일반, 2 사진, 3 동영상, 5 음성, 12·20·25 이모티콘, 17 프로필, 18 파일, 26 답장, 27 여러 장의 사진, 100 지도. 카카오맵 공유가 아닌 100과 모르는 번호는 `MessageChat`으로 받습니다. | [`MessageChat`](/docs/reference/chat/MessageChat).[`originType`](/docs/reference/chat/MessageChat) |
| `raw` | `readonly` | [`MessageChatRaw`](/docs/reference/chat#messagechatraw) | 메세지 원본 데이터 | [`MessageChat`](/docs/reference/chat/MessageChat).[`raw`](/docs/reference/chat/MessageChat) |
| `text` | `readonly` | `string` | 메세지 내용 | [`MessageChat`](/docs/reference/chat/MessageChat).[`text`](/docs/reference/chat/MessageChat) |
| `threadId` | `readonly` | `string` \| `null` | 스레드 ID. 스레드에 속하지 않으면 `null` | [`MessageChat`](/docs/reference/chat/MessageChat).[`threadId`](/docs/reference/chat/MessageChat) |
| `type` | `readonly` | `number` | 받은 메세지 타입 번호. 삭제된 메세지는 삭제 표시(`0x4000`)가 더해져 있습니다. | [`MessageChat`](/docs/reference/chat/MessageChat).[`type`](/docs/reference/chat/MessageChat) |
| `user` | `readonly` | [`User`](/docs/reference/user/User) \| `null` | 메세지를 보냈거나 피드와 관련된 유저. 정보가 없으면 `null` | [`UnknownFeedChat`](/docs/reference/chat/UnknownFeedChat).[`user`](/docs/reference/chat/UnknownFeedChat) |

## 접근자

### command

#### get 시그니쳐

```ts
get command(): string;
```

`text`에서 첫 번째 띄어쓰기 앞부분. 띄어쓰기가 없으면 메세지 전체

##### 반환값

`string`

#### 상속받은 타입:

[`MessageChat`](/docs/reference/chat/MessageChat).[`command`](/docs/reference/chat/MessageChat#command)

### emoticon

#### get 시그니쳐

```ts
get emoticon(): EmoticonAttachment;
```

이모티콘 정보

##### 반환값

[`EmoticonAttachment`](/docs/reference/chat#emoticonattachment)

### mentions

#### get 시그니쳐

```ts
get mentions(): Promise<User[]>;
```

중복 없이 모은 멘션 유저 목록. 멘션이 없으면 빈 배열

##### 반환값

`Promise`\<[`User`](/docs/reference/user/User)[]\>

#### 상속받은 타입:

[`MessageChat`](/docs/reference/chat/MessageChat).[`mentions`](/docs/reference/chat/MessageChat#mentions)

### param

#### get 시그니쳐

```ts
get param(): string;
```

`text`에서 첫 번째 띄어쓰기 뒤의 나머지. 띄어쓰기가 없으면 빈 문자열

##### 반환값

`string`

#### 상속받은 타입:

[`MessageChat`](/docs/reference/chat/MessageChat).[`param`](/docs/reference/chat/MessageChat#param)

### readMembers

#### get 시그니쳐

```ts
get readMembers(): Promise<User[]>;
```

이 메세지를 읽은 유저 목록

##### 반환값

`Promise`\<[`User`](/docs/reference/user/User)[]\>

#### 상속받은 타입:

[`MessageChat`](/docs/reference/chat/MessageChat).[`readMembers`](/docs/reference/chat/MessageChat#readmembers)

### unreadMembers

#### get 시그니쳐

```ts
get unreadMembers(): Promise<User[]>;
```

이 메세지를 읽지 않은 유저 목록

##### 반환값

`Promise`\<[`User`](/docs/reference/user/User)[]\>

#### 상속받은 타입:

[`MessageChat`](/docs/reference/chat/MessageChat).[`unreadMembers`](/docs/reference/chat/MessageChat#unreadmembers)

## 메서드

### getAttachment()

```ts
getAttachment<T>(): Partial<T>;
```

첨부 데이터를 원하는 타입으로 가져옵니다. 데이터가 그 타입과 맞는지는 확인하지 않습니다.

#### 타입 매개변수

| 타입 매개변수 | 기본 타입 |
| ------ | ------ |
| `T` *extends* [`Attachment`](/docs/reference/chat#attachment) | [`Attachment`](/docs/reference/chat#attachment) |

#### 반환값

`Partial`\<`T`\>

#### 상속받은 타입:

[`MessageChat`](/docs/reference/chat/MessageChat).[`getAttachment`](/docs/reference/chat/MessageChat#getattachment)

### getNextChat()

```ts
getNextChat(count?): Promise<MessageChat | null>;
```

이 메세지보다 뒤의 메세지를 조회합니다. 없으면 `null`

#### 매개변수

| 매개변수 | 타입 | 기본값 | 설명 |
| ------ | ------ | ------ | ------ |
| `count?` | `number` | `1` | 뒤로 갈 개수. 소수점 아래는 버리고, `0`이면 이 메세지를, 음수면 앞쪽 메세지를 돌려줍니다. |

#### 반환값

`Promise`\<[`MessageChat`](/docs/reference/chat/MessageChat) \| `null`\>

#### 상속받은 타입:

[`MessageChat`](/docs/reference/chat/MessageChat).[`getNextChat`](/docs/reference/chat/MessageChat#getnextchat)

### getPrevChat()

```ts
getPrevChat(count?): Promise<MessageChat | null>;
```

이 메세지보다 앞의 메세지를 조회합니다. 없으면 `null`

#### 매개변수

| 매개변수 | 타입 | 기본값 | 설명 |
| ------ | ------ | ------ | ------ |
| `count?` | `number` | `1` | 앞으로 갈 개수. 소수점 아래는 버리고, `0`이면 이 메세지를, 음수면 뒤쪽 메세지를 돌려줍니다. |

#### 반환값

`Promise`\<[`MessageChat`](/docs/reference/chat/MessageChat) \| `null`\>

#### 상속받은 타입:

[`MessageChat`](/docs/reference/chat/MessageChat).[`getPrevChat`](/docs/reference/chat/MessageChat#getprevchat)

### getSource()

```ts
getSource(): Promise<MessageChat>;
```

답장이나 스레드의 원본 메세지를 조회합니다. 답장은 첨부 데이터의 `src_logId`를, 그 밖에는 `threadId`를 씁니다.

#### 반환값

`Promise`\<[`MessageChat`](/docs/reference/chat/MessageChat)\>

#### Throws

원본 메세지 ID가 없을 때

#### 상속받은 타입:

[`MessageChat`](/docs/reference/chat/MessageChat).[`getSource`](/docs/reference/chat/MessageChat#getsource)

### isAudio()

```ts
isAudio(): this is AudioChat;
```

음성 여부

#### 반환값

`this is AudioChat`

#### 상속받은 타입:

[`MessageChat`](/docs/reference/chat/MessageChat).[`isAudio`](/docs/reference/chat/MessageChat#isaudio)

### isEmoticon()

```ts
isEmoticon(): this is EmoticonChat;
```

이모티콘 여부

#### 반환값

`this is EmoticonChat`

#### 오버라이드 대상:

[`MessageChat`](/docs/reference/chat/MessageChat).[`isEmoticon`](/docs/reference/chat/MessageChat#isemoticon)

### isFeedChat()

```ts
isFeedChat(): this is FeedChat;
```

피드 여부

#### 반환값

`this is FeedChat`

#### 상속받은 타입:

[`MessageChat`](/docs/reference/chat/MessageChat).[`isFeedChat`](/docs/reference/chat/MessageChat#isfeedchat)

### isFile()

```ts
isFile(): this is FileChat;
```

파일 여부

#### 반환값

`this is FileChat`

#### 상속받은 타입:

[`MessageChat`](/docs/reference/chat/MessageChat).[`isFile`](/docs/reference/chat/MessageChat#isfile)

### isMap()

```ts
isMap(): this is MapChat;
```

지도 여부

#### 반환값

`this is MapChat`

#### 상속받은 타입:

[`MessageChat`](/docs/reference/chat/MessageChat).[`isMap`](/docs/reference/chat/MessageChat#ismap)

### isMessageChat()

```ts
isMessageChat(): this is MessageChat;
```

메세지 여부

#### 반환값

`this is MessageChat`

#### 상속받은 타입:

[`MessageChat`](/docs/reference/chat/MessageChat).[`isMessageChat`](/docs/reference/chat/MessageChat#ismessagechat)

### isMiniEmoticon()

```ts
isMiniEmoticon(): this is MiniEmoticonChat;
```

미니 이모티콘이 들어 있는 메세지 여부

#### 반환값

`this is MiniEmoticonChat`

#### 상속받은 타입:

[`MessageChat`](/docs/reference/chat/MessageChat).[`isMiniEmoticon`](/docs/reference/chat/MessageChat#isminiemoticon)

### isMultiPhoto()

```ts
isMultiPhoto(): this is MultiPhotoChat;
```

여러 장의 사진 여부

#### 반환값

`this is MultiPhotoChat`

#### 상속받은 타입:

[`MessageChat`](/docs/reference/chat/MessageChat).[`isMultiPhoto`](/docs/reference/chat/MessageChat#ismultiphoto)

### isNormal()

```ts
isNormal(): this is NormalChat;
```

일반 메세지 여부

#### 반환값

`this is NormalChat`

#### 상속받은 타입:

[`MessageChat`](/docs/reference/chat/MessageChat).[`isNormal`](/docs/reference/chat/MessageChat#isnormal)

### isPhoto()

```ts
isPhoto(): this is PhotoChat;
```

사진 여부

#### 반환값

`this is PhotoChat`

#### 상속받은 타입:

[`MessageChat`](/docs/reference/chat/MessageChat).[`isPhoto`](/docs/reference/chat/MessageChat#isphoto)

### isProfile()

```ts
isProfile(): this is ProfileChat;
```

프로필 공유 여부

#### 반환값

`this is ProfileChat`

#### 상속받은 타입:

[`MessageChat`](/docs/reference/chat/MessageChat).[`isProfile`](/docs/reference/chat/MessageChat#isprofile)

### isReply()

```ts
isReply(): boolean;
```

답장이거나 스레드에 속한 메세지 여부.
타입을 좁히지 않으므로 [ReplyChat](/docs/reference/chat/ReplyChat)인지는 `chat instanceof ReplyChat`으로 확인하세요.

#### 반환값

`boolean`

#### 상속받은 타입:

[`MessageChat`](/docs/reference/chat/MessageChat).[`isReply`](/docs/reference/chat/MessageChat#isreply)

### isVideo()

```ts
isVideo(): this is VideoChat;
```

동영상 여부

#### 반환값

`this is VideoChat`

#### 상속받은 타입:

[`MessageChat`](/docs/reference/chat/MessageChat).[`isVideo`](/docs/reference/chat/MessageChat#isvideo)

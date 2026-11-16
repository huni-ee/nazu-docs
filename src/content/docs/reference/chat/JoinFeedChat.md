---
title: "JoinFeedChat"
description: "오픈채팅방에 유저가 들어온 피드"
---

## 상속 관계

- [`FeedChat`](/docs/reference/chat/FeedChat)
  - **`JoinFeedChat`**

## 속성

| 속성 | 수정자 | 타입 | 설명 | 오버라이드 대상: | 상속받은 타입: |
| ------ | ------ | ------ | ------ | ------ | ------ |
| `feedType` | `readonly` | `4` | 피드 종류 번호 | [`FeedChat`](/docs/reference/chat/FeedChat).[`feedType`](/docs/reference/chat/FeedChat) | - |
| `joinedUser` | `readonly` | [`User`](/docs/reference/user/User) | 들어온 유저 | - | - |
| `user` | `readonly` | [`User`](/docs/reference/user/User) \| `null` | 메세지를 보냈거나 피드와 관련된 유저. 정보가 없으면 `null` | - | [`FeedChat`](/docs/reference/chat/FeedChat).[`user`](/docs/reference/chat/FeedChat) |

## 메서드

### isFeedChat()

```ts
isFeedChat(): this is FeedChat;
```

피드 여부

#### 반환값

`this is FeedChat`

#### 상속받은 타입:

[`FeedChat`](/docs/reference/chat/FeedChat).[`isFeedChat`](/docs/reference/chat/FeedChat#isfeedchat)

### isManagerSpeakerMode()

```ts
isManagerSpeakerMode(): this is ManagerSpeakerModeFeedChat;
```

관리자만 말하기 피드 여부

#### 반환값

`this is ManagerSpeakerModeFeedChat`

#### 상속받은 타입:

[`FeedChat`](/docs/reference/chat/FeedChat).[`isManagerSpeakerMode`](/docs/reference/chat/FeedChat#ismanagerspeakermode)

### isMessageChat()

```ts
isMessageChat(): this is MessageChat;
```

메세지 여부

#### 반환값

`this is MessageChat`

#### 상속받은 타입:

[`FeedChat`](/docs/reference/chat/FeedChat).[`isMessageChat`](/docs/reference/chat/FeedChat#ismessagechat)

### isOpenChannelDelete()

```ts
isOpenChannelDelete(): this is OpenChannelDeleteFeedChat;
```

오픈채팅방 삭제 피드 여부

#### 반환값

`this is OpenChannelDeleteFeedChat`

#### 상속받은 타입:

[`FeedChat`](/docs/reference/chat/FeedChat).[`isOpenChannelDelete`](/docs/reference/chat/FeedChat#isopenchanneldelete)

### isUnknown()

```ts
isUnknown(): this is UnknownFeedChat;
```

따로 처리하지 않는 피드 여부

#### 반환값

`this is UnknownFeedChat`

#### 상속받은 타입:

[`FeedChat`](/docs/reference/chat/FeedChat).[`isUnknown`](/docs/reference/chat/FeedChat#isunknown)

---
title: "MemberTypeChangeFeedChat"
---

부방장 임명·해제와 방장 위임 피드의 부모.
아래 속성은 모두 선택적이고, `isPromote()` 같은 메서드로 좁히면 해당 속성이 항상 있습니다.

## 상속 관계

- [`FeedChat`](/docs/reference/chat/FeedChat)
  - **`MemberTypeChangeFeedChat`**
    - [`DemoteFeedChat`](/docs/reference/chat/DemoteFeedChat)
    - [`HandoverFeedChat`](/docs/reference/chat/HandoverFeedChat)
    - [`PromoteFeedChat`](/docs/reference/chat/PromoteFeedChat)

## 속성

| 속성 | 수정자 | 타입 | 설명 | 상속받은 타입: |
| ------ | ------ | ------ | ------ | ------ |
| `demotedUser?` | `readonly` | [`User`](/docs/reference/user/User) | 부방장에서 해제된 유저 | - |
| `feedType` | `readonly` | `number` | 피드 종류 번호 | [`FeedChat`](/docs/reference/chat/FeedChat).[`feedType`](/docs/reference/chat/FeedChat) |
| `newHost?` | `readonly` | [`User`](/docs/reference/user/User) | 새 방장 | - |
| `previousHost?` | `readonly` | [`User`](/docs/reference/user/User) | 이전 방장 | - |
| `promotedUser?` | `readonly` | [`User`](/docs/reference/user/User) | 부방장으로 임명된 유저 | - |
| `user` | `readonly` | [`User`](/docs/reference/user/User) \| `null` | 메세지를 보냈거나 피드와 관련된 유저. 정보가 없으면 `null` | [`FeedChat`](/docs/reference/chat/FeedChat).[`user`](/docs/reference/chat/FeedChat) |

## 메서드

### isDemote()

```ts
isDemote(): this is DemoteFeedChat;
```

부방장 해제 피드 여부

#### 반환값

`this is DemoteFeedChat`

### isFeedChat()

```ts
isFeedChat(): this is FeedChat;
```

피드 여부

#### 반환값

`this is FeedChat`

#### 상속받은 타입:

[`FeedChat`](/docs/reference/chat/FeedChat).[`isFeedChat`](/docs/reference/chat/FeedChat#isfeedchat)

### isHandover()

```ts
isHandover(): this is HandoverFeedChat;
```

방장 위임 피드 여부

#### 반환값

`this is HandoverFeedChat`

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

### isPromote()

```ts
isPromote(): this is PromoteFeedChat;
```

부방장 임명 피드 여부

#### 반환값

`this is PromoteFeedChat`

### isUnknown()

```ts
isUnknown(): this is UnknownFeedChat;
```

따로 처리하지 않는 피드 여부

#### 반환값

`this is UnknownFeedChat`

#### 상속받은 타입:

[`FeedChat`](/docs/reference/chat/FeedChat).[`isUnknown`](/docs/reference/chat/FeedChat#isunknown)

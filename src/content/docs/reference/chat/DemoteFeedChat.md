---
title: "DemoteFeedChat"
description: "부방장이 해제된 피드"
---

## 상속 관계

- [`MemberTypeChangeFeedChat`](/docs/reference/chat/MemberTypeChangeFeedChat)
  - **`DemoteFeedChat`**

## 속성

| 속성 | 수정자 | 타입 | 설명 | 오버라이드 대상: | 상속받은 타입: |
| ------ | ------ | ------ | ------ | ------ | ------ |
| `demotedUser` | `readonly` | [`User`](/docs/reference/user/User) | 부방장에서 해제된 유저 | [`MemberTypeChangeFeedChat`](/docs/reference/chat/MemberTypeChangeFeedChat).[`demotedUser`](/docs/reference/chat/MemberTypeChangeFeedChat) | - |
| `feedType` | `readonly` | `12` | 피드 종류 번호 | [`MemberTypeChangeFeedChat`](/docs/reference/chat/MemberTypeChangeFeedChat).[`feedType`](/docs/reference/chat/MemberTypeChangeFeedChat) | - |
| `newHost?` | `readonly` | [`User`](/docs/reference/user/User) | 새 방장 | - | [`MemberTypeChangeFeedChat`](/docs/reference/chat/MemberTypeChangeFeedChat).[`newHost`](/docs/reference/chat/MemberTypeChangeFeedChat) |
| `previousHost?` | `readonly` | [`User`](/docs/reference/user/User) | 이전 방장 | - | [`MemberTypeChangeFeedChat`](/docs/reference/chat/MemberTypeChangeFeedChat).[`previousHost`](/docs/reference/chat/MemberTypeChangeFeedChat) |
| `promotedUser?` | `readonly` | [`User`](/docs/reference/user/User) | 부방장으로 임명된 유저 | - | [`MemberTypeChangeFeedChat`](/docs/reference/chat/MemberTypeChangeFeedChat).[`promotedUser`](/docs/reference/chat/MemberTypeChangeFeedChat) |
| `user` | `readonly` | [`User`](/docs/reference/user/User) \| `null` | 메세지를 보냈거나 피드와 관련된 유저. 정보가 없으면 `null` | - | [`MemberTypeChangeFeedChat`](/docs/reference/chat/MemberTypeChangeFeedChat).[`user`](/docs/reference/chat/MemberTypeChangeFeedChat) |

## 메서드

### isDemote()

```ts
isDemote(): this is DemoteFeedChat;
```

부방장 해제 피드 여부

#### 반환값

`this is DemoteFeedChat`

#### 오버라이드 대상:

[`MemberTypeChangeFeedChat`](/docs/reference/chat/MemberTypeChangeFeedChat).[`isDemote`](/docs/reference/chat/MemberTypeChangeFeedChat#isdemote)

### isFeedChat()

```ts
isFeedChat(): this is FeedChat;
```

피드 여부

#### 반환값

`this is FeedChat`

#### 상속받은 타입:

[`MemberTypeChangeFeedChat`](/docs/reference/chat/MemberTypeChangeFeedChat).[`isFeedChat`](/docs/reference/chat/MemberTypeChangeFeedChat#isfeedchat)

### isHandover()

```ts
isHandover(): this is HandoverFeedChat;
```

방장 위임 피드 여부

#### 반환값

`this is HandoverFeedChat`

#### 상속받은 타입:

[`MemberTypeChangeFeedChat`](/docs/reference/chat/MemberTypeChangeFeedChat).[`isHandover`](/docs/reference/chat/MemberTypeChangeFeedChat#ishandover)

### isManagerSpeakerMode()

```ts
isManagerSpeakerMode(): this is ManagerSpeakerModeFeedChat;
```

관리자만 말하기 피드 여부

#### 반환값

`this is ManagerSpeakerModeFeedChat`

#### 상속받은 타입:

[`MemberTypeChangeFeedChat`](/docs/reference/chat/MemberTypeChangeFeedChat).[`isManagerSpeakerMode`](/docs/reference/chat/MemberTypeChangeFeedChat#ismanagerspeakermode)

### isMessageChat()

```ts
isMessageChat(): this is MessageChat;
```

메세지 여부

#### 반환값

`this is MessageChat`

#### 상속받은 타입:

[`MemberTypeChangeFeedChat`](/docs/reference/chat/MemberTypeChangeFeedChat).[`isMessageChat`](/docs/reference/chat/MemberTypeChangeFeedChat#ismessagechat)

### isOpenChannelDelete()

```ts
isOpenChannelDelete(): this is OpenChannelDeleteFeedChat;
```

오픈채팅방 삭제 피드 여부

#### 반환값

`this is OpenChannelDeleteFeedChat`

#### 상속받은 타입:

[`MemberTypeChangeFeedChat`](/docs/reference/chat/MemberTypeChangeFeedChat).[`isOpenChannelDelete`](/docs/reference/chat/MemberTypeChangeFeedChat#isopenchanneldelete)

### isPromote()

```ts
isPromote(): this is PromoteFeedChat;
```

부방장 임명 피드 여부

#### 반환값

`this is PromoteFeedChat`

#### 상속받은 타입:

[`MemberTypeChangeFeedChat`](/docs/reference/chat/MemberTypeChangeFeedChat).[`isPromote`](/docs/reference/chat/MemberTypeChangeFeedChat#ispromote)

### isUnknown()

```ts
isUnknown(): this is UnknownFeedChat;
```

따로 처리하지 않는 피드 여부

#### 반환값

`this is UnknownFeedChat`

#### 상속받은 타입:

[`MemberTypeChangeFeedChat`](/docs/reference/chat/MemberTypeChangeFeedChat).[`isUnknown`](/docs/reference/chat/MemberTypeChangeFeedChat#isunknown)

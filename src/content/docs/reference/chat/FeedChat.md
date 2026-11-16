---
title: "FeedChat"
description: "입장, 퇴장, 삭제 같은 피드. 종류마다 하위 클래스로 받습니다."
---

`feedType` 값: 1 초대, 2 퇴장, 4 입장, 5 오픈채팅방 삭제, 6 오픈채팅 강퇴, 11 부방장 임명, 12 부방장 해제, 14 삭제, 15 방장 위임, 25 수정, 26 가리기, 27 관리자만 말하기.
예전 가리기 피드(13)도 26으로 받고, 나머지는 [UnknownFeedChat](/docs/reference/chat/UnknownFeedChat)으로 받습니다.

## 상속 관계

- [`Chat`](/docs/reference/chat/Chat)
  - **`FeedChat`**
    - [`DeleteFeedChat`](/docs/reference/chat/DeleteFeedChat)
    - [`EditFeedChat`](/docs/reference/chat/EditFeedChat)
    - [`HideFeedChat`](/docs/reference/chat/HideFeedChat)
    - [`InviteFeedChat`](/docs/reference/chat/InviteFeedChat)
    - [`JoinFeedChat`](/docs/reference/chat/JoinFeedChat)
    - [`KickFeedChat`](/docs/reference/chat/KickFeedChat)
    - [`LeaveFeedChat`](/docs/reference/chat/LeaveFeedChat)
    - [`ManagerSpeakerModeFeedChat`](/docs/reference/chat/ManagerSpeakerModeFeedChat)
    - [`OpenChannelDeleteFeedChat`](/docs/reference/chat/OpenChannelDeleteFeedChat)
    - [`MemberTypeChangeFeedChat`](/docs/reference/chat/MemberTypeChangeFeedChat)
    - [`UnknownFeedChat`](/docs/reference/chat/UnknownFeedChat)

## 속성

| 속성 | 수정자 | 타입 | 설명 | 상속받은 타입: |
| ------ | ------ | ------ | ------ | ------ |
| `feedType` | `readonly` | `number` | 피드 종류 번호 | - |
| `user` | `readonly` | [`User`](/docs/reference/user/User) \| `null` | 메세지를 보냈거나 피드와 관련된 유저. 정보가 없으면 `null` | [`Chat`](/docs/reference/chat/Chat).[`user`](/docs/reference/chat/Chat) |

## 메서드

### isFeedChat()

```ts
isFeedChat(): this is FeedChat;
```

피드 여부

#### 반환값

`this is FeedChat`

#### 오버라이드 대상:

[`Chat`](/docs/reference/chat/Chat).[`isFeedChat`](/docs/reference/chat/Chat#isfeedchat)

### isManagerSpeakerMode()

```ts
isManagerSpeakerMode(): this is ManagerSpeakerModeFeedChat;
```

관리자만 말하기 피드 여부

#### 반환값

`this is ManagerSpeakerModeFeedChat`

### isMessageChat()

```ts
isMessageChat(): this is MessageChat;
```

메세지 여부

#### 반환값

`this is MessageChat`

#### 상속받은 타입:

[`Chat`](/docs/reference/chat/Chat).[`isMessageChat`](/docs/reference/chat/Chat#ismessagechat)

### isOpenChannelDelete()

```ts
isOpenChannelDelete(): this is OpenChannelDeleteFeedChat;
```

오픈채팅방 삭제 피드 여부

#### 반환값

`this is OpenChannelDeleteFeedChat`

### isUnknown()

```ts
isUnknown(): this is UnknownFeedChat;
```

따로 처리하지 않는 피드 여부

#### 반환값

`this is UnknownFeedChat`

---
title: "Chat"
description: "메세지(MessageChat)와 피드(FeedChat)의 공통 부모"
---

## 상속 관계

- **`Chat`**
  - [`FeedChat`](/docs/reference/chat/FeedChat)
  - [`MessageChat`](/docs/reference/chat/MessageChat)

## 속성

| 속성 | 수정자 | 타입 | 설명 |
| ------ | ------ | ------ | ------ |
| `user` | `readonly` | [`User`](/docs/reference/user/User) \| `null` | 메세지를 보냈거나 피드와 관련된 유저. 정보가 없으면 `null` |

## 메서드

### isFeedChat()

```ts
isFeedChat(): this is FeedChat;
```

피드 여부

#### 반환값

`this is FeedChat`

### isMessageChat()

```ts
isMessageChat(): this is MessageChat;
```

메세지 여부

#### 반환값

`this is MessageChat`

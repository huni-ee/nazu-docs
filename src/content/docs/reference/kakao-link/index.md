---
title: "kakao-link"
---

## 클래스

| 클래스 | 설명 |
| ------ | ------ |
| [KakaoLink](/docs/reference/kakao-link/KakaoLink) | 카카오링크 메세지 템플릿을 친구나 채팅방에 보냅니다. |
| [KakaoLink2FAException](/docs/reference/kakao-link/KakaoLink2FAException) | 로그인 중 추가 인증을 처리하지 못하면 발생합니다. |
| [KakaoLinkException](/docs/reference/kakao-link/KakaoLinkException) | 카카오링크 오류의 공통 부모 |
| [KakaoLinkLoginException](/docs/reference/kakao-link/KakaoLinkLoginException) | 로그인에 실패했거나 `init()` 전에 보내면 발생합니다. |
| [KakaoLinkReceiverNotFoundException](/docs/reference/kakao-link/KakaoLinkReceiverNotFoundException) | 조건에 맞는 수신자를 찾지 못하면 발생합니다. |
| [KakaoLinkSendException](/docs/reference/kakao-link/KakaoLinkSendException) | 메세지 전송에 실패하면 발생합니다. |

## 인터페이스

### KakaoLinkOptions

[KakaoLink](/docs/reference/kakao-link/KakaoLink)를 만들 때 넘기는 설정

#### 속성

| 속성 | 수정자 | 타입 | 설명 |
| ------ | ------ | ------ | ------ |
| `appKey` | `readonly` | `string` | Kakao Developers에서 발급받은 JavaScript 키 |
| `origin` | `readonly` | `string` | Kakao Developers에 등록한 웹 플랫폼 도메인 |

### KakaoLinkSendOptions

`send()`에 넘기는 전송 옵션

#### 속성

| 속성 | 타입 | 기본값 | 설명 |
| ------ | ------ | ------ | ------ |
| `receiverName` | `string` | `undefined` | 받을 채팅방이나 친구의 이름 |
| `searchExact?` | `boolean` | `true` | `true`이면 이름이 정확히 같은 수신자만, `false`이면 이름이 포함된 수신자도 찾습니다. |
| `searchFrom?` | [`SearchFrom`](#searchfrom) | `'ALL'` | 수신자를 찾을 범위 |
| `searchRoomType?` | [`SearchRoomType`](#searchroomtype) | `'ALL'` | 찾을 채팅방 종류. 채팅방 종류가 있는 수신자에만 적용합니다. |
| `templateArgs?` | `Record`\<`string`, `unknown`\> | `{}` | 메세지 템플릿에 넣을 인자 |
| `templateId` | `number` | `undefined` | 메세지 템플릿 ID |

## 타입 별칭

### SearchFrom

```ts
type SearchFrom = "ALL" | "FRIENDS" | "CHATROOMS";
```

수신자를 찾을 범위. `ALL`은 친구와 채팅방 모두, `FRIENDS`는 친구만, `CHATROOMS`는 채팅방만 찾습니다.

### SearchRoomType

```ts
type SearchRoomType = "ALL" | "OpenMultiChat" | "MultiChat" | "DirectChat";
```

찾을 채팅방 종류. `OpenMultiChat`은 그룹 오픈채팅, `MultiChat`은 일반 그룹 채팅, `DirectChat`은 1:1 채팅

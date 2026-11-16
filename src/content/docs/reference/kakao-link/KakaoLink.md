---
title: "KakaoLink"
description: "카카오링크 메세지 템플릿을 친구나 채팅방에 보냅니다."
---

`client.kakaoLink()`로 만들고, `init()`이 끝난 뒤 `send()`로 보냅니다.

## 예제

```ts
const kakaoLink = client.kakaoLink({ appKey: 'JavaScript 키', origin: '등록한 웹 도메인' });
await kakaoLink.init();
await kakaoLink.send({ receiverName: '채팅방 이름', templateId: 12345 });
```

## 메서드

### init()

```ts
init(): Promise<void>;
```

Arisa의 인증 정보로 카카오링크에 로그인합니다. `send()` 전에 끝나 있어야 합니다.

#### 반환값

`Promise`\<`void`\>

#### Throws

[KakaoLinkLoginException](/docs/reference/kakao-link/KakaoLinkLoginException) 로그인에 실패했을 때

#### Throws

[KakaoLink2FAException](/docs/reference/kakao-link/KakaoLink2FAException) 추가 인증을 처리하지 못했을 때

### send()

```ts
send(options): Promise<void>;
```

메세지 템플릿을 보냅니다. 조건에 맞는 수신자가 여럿이면 처음 찾은 수신자에게 보냅니다.

#### 매개변수

| 매개변수 | 타입 | 설명 |
| ------ | ------ | ------ |
| `options` | [`KakaoLinkSendOptions`](/docs/reference/kakao-link#kakaolinksendoptions) | 수신자, 템플릿, 검색 조건 |

#### 반환값

`Promise`\<`void`\>

#### Throws

[KakaoLinkLoginException](/docs/reference/kakao-link/KakaoLinkLoginException) `init()` 전에 호출할 때

#### Throws

[KakaoLinkReceiverNotFoundException](/docs/reference/kakao-link/KakaoLinkReceiverNotFoundException) 수신자를 찾지 못했을 때

#### Throws

[KakaoLinkSendException](/docs/reference/kakao-link/KakaoLinkSendException) 전송에 실패했을 때

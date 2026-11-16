---
title: "KakaoLinkException"
description: "카카오링크 오류의 공통 부모"
---

## 상속 관계

- `Error`
  - **`KakaoLinkException`**
    - [`KakaoLinkReceiverNotFoundException`](/docs/reference/kakao-link/KakaoLinkReceiverNotFoundException)
    - [`KakaoLinkLoginException`](/docs/reference/kakao-link/KakaoLinkLoginException)
    - [`KakaoLink2FAException`](/docs/reference/kakao-link/KakaoLink2FAException)
    - [`KakaoLinkSendException`](/docs/reference/kakao-link/KakaoLinkSendException)

## 생성자

```ts
new KakaoLinkException(message?): KakaoLinkException;
```

#### 매개변수

| 매개변수 | 타입 | 기본값 |
| ------ | ------ | ------ |
| `message?` | `string` | `''` |

#### 반환값

`KakaoLinkException`

#### 오버라이드 대상:

`Error.constructor`

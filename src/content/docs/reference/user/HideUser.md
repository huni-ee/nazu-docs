---
title: "HideUser"
description: "메세지를 가린 유저와 가려진 메세지의 작성자를 담는 객체. User를 상속하지 않습니다."
---

## 생성자

```ts
new HideUser(hiddenBy, hiddenUsers): HideUser;
```

#### 매개변수

| 매개변수 | 타입 |
| ------ | ------ |
| `hiddenBy` | [`User`](/docs/reference/user/User) \| `null` |
| `hiddenUsers` | \[[`User`](/docs/reference/user/User) \| `null`, ...(User \| null)\[\]\] |

#### 반환값

`HideUser`

## 속성

| 속성 | 수정자 | 타입 | 설명 |
| ------ | ------ | ------ | ------ |
| `hiddenBy` | `readonly` | [`User`](/docs/reference/user/User) \| `null` | 메세지를 가린 유저. 정보가 없으면 `null` |
| `hiddenUsers` | `readonly` | \[[`User`](/docs/reference/user/User) \| `null`, ...(User \| null)\[\]\] | 가려진 메세지를 보낸 유저 목록. 찾지 못한 유저는 `null` |

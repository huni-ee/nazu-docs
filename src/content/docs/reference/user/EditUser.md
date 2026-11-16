---
title: "EditUser"
description: "메세지를 수정한 유저를 담는 객체. User를 상속하지 않습니다."
---

## 생성자

```ts
new EditUser(editedBy): EditUser;
```

#### 매개변수

| 매개변수 | 타입 |
| ------ | ------ |
| `editedBy` | [`User`](/docs/reference/user/User) \| `null` |

#### 반환값

`EditUser`

## 속성

| 속성 | 수정자 | 타입 | 설명 |
| ------ | ------ | ------ | ------ |
| `editedBy` | `readonly` | [`User`](/docs/reference/user/User) \| `null` | 수정한 유저. 정보가 없으면 `null` |

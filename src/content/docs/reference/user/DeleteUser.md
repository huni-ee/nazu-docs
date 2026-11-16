---
title: "DeleteUser"
description: "메세지를 삭제한 유저를 담는 객체. User를 상속하지 않습니다."
---

## 생성자

```ts
new DeleteUser(deletedBy): DeleteUser;
```

#### 매개변수

| 매개변수 | 타입 |
| ------ | ------ |
| `deletedBy` | [`User`](/docs/reference/user/User) \| `null` |

#### 반환값

`DeleteUser`

## 속성

| 속성 | 수정자 | 타입 | 설명 |
| ------ | ------ | ------ | ------ |
| `deletedBy` | `readonly` | [`User`](/docs/reference/user/User) \| `null` | 삭제한 유저. 정보가 없으면 `null` |

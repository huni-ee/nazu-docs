---
title: "InviteUser"
description: "초대한 유저와 초대된 유저를 담는 객체. User를 상속하지 않습니다."
---

## 생성자

```ts
new InviteUser(invitedBy, invitedUsers): InviteUser;
```

#### 매개변수

| 매개변수 | 타입 |
| ------ | ------ |
| `invitedBy` | [`User`](/docs/reference/user/User) \| `null` |
| `invitedUsers` | \[[`User`](/docs/reference/user/User), `...User[]`\] |

#### 반환값

`InviteUser`

## 속성

| 속성 | 수정자 | 타입 | 설명 |
| ------ | ------ | ------ | ------ |
| `invitedBy` | `readonly` | [`User`](/docs/reference/user/User) \| `null` | 초대한 유저. 정보가 없으면 `null` |
| `invitedUsers` | `readonly` | \[[`User`](/docs/reference/user/User), `...User[]`\] | 초대된 유저 목록 |

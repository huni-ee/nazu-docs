---
title: "KickUser"
description: "강퇴한 유저와 강퇴된 유저를 담는 객체. User를 상속하지 않습니다."
---

## 속성

| 속성 | 수정자 | 타입 | 설명 |
| ------ | ------ | ------ | ------ |
| `kickedBy` | `readonly` | [`User`](/docs/reference/user/User) \| `null` | 강퇴한 유저. 정보가 없으면 `null` |
| `kickedUser` | `readonly` | [`User`](/docs/reference/user/User) | 강퇴된 유저 |

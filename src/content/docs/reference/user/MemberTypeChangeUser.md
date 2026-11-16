---
title: "MemberTypeChangeUser"
description: "부방장 임명·해제나 방장 위임에 관련된 유저를 담는 객체. User를 상속하지 않습니다."
---

## 속성

| 속성 | 수정자 | 타입 | 설명 |
| ------ | ------ | ------ | ------ |
| `demotedUser?` | `readonly` | [`User`](/docs/reference/user/User) | 부방장에서 해제된 유저 |
| `newHost?` | `readonly` | [`User`](/docs/reference/user/User) | 새 방장 |
| `previousHost?` | `readonly` | [`User`](/docs/reference/user/User) | 이전 방장 |
| `promotedUser?` | `readonly` | [`User`](/docs/reference/user/User) | 부방장으로 임명된 유저 |

## 메서드

### demote()

```ts
static demote(user): MemberTypeChangeUser;
```

부방장에서 해제된 유저 정보를 만듭니다.

#### 매개변수

| 매개변수 | 타입 |
| ------ | ------ |
| `user` | [`User`](/docs/reference/user/User) |

#### 반환값

`MemberTypeChangeUser`

### handover()

```ts
static handover(previousHost, newHost): MemberTypeChangeUser;
```

이전 방장과 새 방장 정보를 만듭니다.

#### 매개변수

| 매개변수 | 타입 |
| ------ | ------ |
| `previousHost` | [`User`](/docs/reference/user/User) |
| `newHost` | [`User`](/docs/reference/user/User) |

#### 반환값

`MemberTypeChangeUser`

### promote()

```ts
static promote(user): MemberTypeChangeUser;
```

부방장으로 임명된 유저 정보를 만듭니다.

#### 매개변수

| 매개변수 | 타입 |
| ------ | ------ |
| `user` | [`User`](/docs/reference/user/User) |

#### 반환값

`MemberTypeChangeUser`

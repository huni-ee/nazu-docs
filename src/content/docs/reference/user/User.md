---
title: "User"
description: "유저. 채팅방 종류에 따라 NormalUser, OpenUser, BotUser, UserSelf로 받습니다."
---

입장·퇴장 피드처럼 ID와 닉네임만 아는 유저는 기본 `User`로 받으며, 역할 정보가 없어 `isHost()` 같은 메서드가 `false`를 돌려줍니다.

## 상속 관계

- **`User`**
  - [`BotUser`](/docs/reference/user/BotUser)
  - [`NormalUser`](/docs/reference/user/NormalUser)
  - [`OpenUser`](/docs/reference/user/OpenUser)
  - [`UserSelf`](/docs/reference/user/UserSelf)

## 생성자

```ts
new User(
   id, 
   name, 
   profileImageUrl?, 
   customName?
): User;
```

#### 매개변수

| 매개변수 | 타입 | 기본값 | 설명 |
| ------ | ------ | ------ | ------ |
| `id` | `string` | `undefined` | 유저 ID |
| `name` | `string` | `undefined` | 유저 이름 |
| `profileImageUrl?` | `string` \| `null` | `null` | 프로필 이미지 주소 |
| `customName?` | `string` \| `null` | `null` | 친구 정보에서 지정한 이름 |

#### 반환값

`User`

## 속성

| 속성 | 수정자 | 타입 | 설명 |
| ------ | ------ | ------ | ------ |
| `customName` | `readonly` | `string` \| `null` | 친구 정보에서 내가 지정한 이름. 없으면 `null` |
| `id` | `readonly` | `string` | 유저 ID. 큰 정수라서 문자열로 다룹니다. |
| `name` | `readonly` | `string` | 유저 이름 |
| `profileImageUrl` | `readonly` | `string` \| `null` | 프로필 이미지 주소. 없으면 `null` |

## 접근자

### raw

#### get 시그니쳐

```ts
get raw(): UserRaw;
```

유저 원본 데이터. 하위 클래스는 그 종류에 맞는 데이터를 돌려줍니다.

##### 반환값

[`UserRaw`](/docs/reference/user#userraw)

## 메서드

### isBotUser()

```ts
isBotUser(): this is BotUser;
```

채팅방에 추가된 챗봇 여부

#### 반환값

`this is BotUser`

### isHost()

```ts
isHost(): boolean;
```

방장 여부. 역할 정보가 없는 기본 `User`는 `false`

#### 반환값

`boolean`

### isMine()

```ts
isMine(): this is UserSelf;
```

내 계정 여부

#### 반환값

`this is UserSelf`

### isModerator()

```ts
isModerator(): boolean;
```

부방장 여부. 역할 정보가 없는 기본 `User`는 `false`

#### 반환값

`boolean`

### isNormalUser()

```ts
isNormalUser(): this is NormalUser | UserSelf;
```

일반 채팅방 유저(내 계정 포함) 여부

#### 반환값

this is NormalUser \| UserSelf

### isOpenUser()

```ts
isOpenUser(): this is UserSelf | OpenUser;
```

오픈채팅방 유저(내 계정 포함) 여부

#### 반환값

this is UserSelf \| OpenUser

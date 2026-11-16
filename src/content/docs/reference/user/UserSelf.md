---
title: "UserSelf"
description: "내 계정. 일반 채팅방과 오픈채팅방 모두 이 클래스로 받습니다."
---

## 상속 관계

- [`User`](/docs/reference/user/User)
  - **`UserSelf`**

## 생성자

```ts
new UserSelf(
   id, 
   name, 
   profileImageUrl?, 
   profileType?, 
   memberType?, 
   profileLinkId?, 
   customName?
): UserSelf;
```

#### 매개변수

| 매개변수 | 타입 | 기본값 |
| ------ | ------ | ------ |
| `id` | `string` | `undefined` |
| `name` | `string` | `undefined` |
| `profileImageUrl?` | `string` \| `null` | `null` |
| `profileType?` | [`OpenProfileType`](/docs/reference/user#openprofiletype) | `'default'` |
| `memberType?` | [`OpenMemberType`](/docs/reference/user#openmembertype) | `'member'` |
| `profileLinkId?` | `string` \| `null` | `null` |
| `customName?` | `string` \| `null` | `null` |

#### 반환값

`UserSelf`

#### 오버라이드 대상:

[`User`](/docs/reference/user/User).[`constructor`](/docs/reference/user/User#생성자)

## 속성

| 속성 | 수정자 | 타입 | 설명 | 상속받은 타입: |
| ------ | ------ | ------ | ------ | ------ |
| `customName` | `readonly` | `string` \| `null` | 친구 정보에서 내가 지정한 이름. 없으면 `null` | [`User`](/docs/reference/user/User).[`customName`](/docs/reference/user/User) |
| `id` | `readonly` | `string` | 유저 ID. 큰 정수라서 문자열로 다룹니다. | [`User`](/docs/reference/user/User).[`id`](/docs/reference/user/User) |
| `memberType` | `readonly` | [`OpenMemberType`](/docs/reference/user#openmembertype) | 채팅방 멤버 종류 | - |
| `name` | `readonly` | `string` | 유저 이름 | [`User`](/docs/reference/user/User).[`name`](/docs/reference/user/User) |
| `profileImageUrl` | `readonly` | `string` \| `null` | 프로필 이미지 주소. 없으면 `null` | [`User`](/docs/reference/user/User).[`profileImageUrl`](/docs/reference/user/User) |
| `profileLinkId` | `readonly` | `string` \| `null` | 오픈프로필 링크 ID. 일반 채팅방이면 `null` | - |
| `profileType` | `readonly` | [`OpenProfileType`](/docs/reference/user#openprofiletype) | 오픈채팅 프로필 종류. 일반 채팅방이면 `default` | - |

## 접근자

### raw

#### get 시그니쳐

```ts
get raw(): UserSelfRaw;
```

유저 원본 데이터. 하위 클래스는 그 종류에 맞는 데이터를 돌려줍니다.

##### 반환값

[`UserSelfRaw`](/docs/reference/user#userselfraw)

#### 오버라이드 대상:

[`User`](/docs/reference/user/User).[`raw`](/docs/reference/user/User#raw)

## 메서드

### isBotUser()

```ts
isBotUser(): this is BotUser;
```

채팅방에 추가된 챗봇 여부

#### 반환값

`this is BotUser`

#### 상속받은 타입:

[`User`](/docs/reference/user/User).[`isBotUser`](/docs/reference/user/User#isbotuser)

### isHost()

```ts
isHost(): boolean;
```

방장 여부. 역할 정보가 없는 기본 `User`는 `false`

#### 반환값

`boolean`

#### 오버라이드 대상:

[`User`](/docs/reference/user/User).[`isHost`](/docs/reference/user/User#ishost)

### isMine()

```ts
isMine(): this is UserSelf;
```

내 계정 여부

#### 반환값

`this is UserSelf`

#### 오버라이드 대상:

[`User`](/docs/reference/user/User).[`isMine`](/docs/reference/user/User#ismine)

### isModerator()

```ts
isModerator(): boolean;
```

부방장 여부. 역할 정보가 없는 기본 `User`는 `false`

#### 반환값

`boolean`

#### 오버라이드 대상:

[`User`](/docs/reference/user/User).[`isModerator`](/docs/reference/user/User#ismoderator)

### isNormalUser()

```ts
isNormalUser(): this is UserSelf;
```

일반 채팅방 유저(내 계정 포함) 여부

#### 반환값

`this is UserSelf`

#### 오버라이드 대상:

[`User`](/docs/reference/user/User).[`isNormalUser`](/docs/reference/user/User#isnormaluser)

### isOpenUser()

```ts
isOpenUser(): this is UserSelf;
```

오픈채팅방 유저(내 계정 포함) 여부

#### 반환값

`this is UserSelf`

#### 오버라이드 대상:

[`User`](/docs/reference/user/User).[`isOpenUser`](/docs/reference/user/User#isopenuser)

---
title: "NormalUser"
description: "일반 채팅방 유저"
---

## 상속 관계

- [`User`](/docs/reference/user/User)
  - **`NormalUser`**

## 생성자

```ts
new NormalUser(
   id, 
   name, 
   profileImageUrl?, 
   memberType?, 
   customName?
): NormalUser;
```

#### 매개변수

| 매개변수 | 타입 | 기본값 |
| ------ | ------ | ------ |
| `id` | `string` | `undefined` |
| `name` | `string` | `undefined` |
| `profileImageUrl?` | `string` \| `null` | `null` |
| `memberType?` | [`NormalMemberType`](/docs/reference/user#normalmembertype) | `'member'` |
| `customName?` | `string` \| `null` | `null` |

#### 반환값

`NormalUser`

#### 오버라이드 대상:

[`User`](/docs/reference/user/User).[`constructor`](/docs/reference/user/User#생성자)

## 속성

| 속성 | 수정자 | 타입 | 설명 | 상속받은 타입: |
| ------ | ------ | ------ | ------ | ------ |
| `customName` | `readonly` | `string` \| `null` | 친구 정보에서 내가 지정한 이름. 없으면 `null` | [`UserSelf`](/docs/reference/user/UserSelf).[`customName`](/docs/reference/user/UserSelf) |
| `id` | `readonly` | `string` | 유저 ID. 큰 정수라서 문자열로 다룹니다. | [`User`](/docs/reference/user/User).[`id`](/docs/reference/user/User) |
| `memberType` | `readonly` | [`NormalMemberType`](/docs/reference/user#normalmembertype) | 채팅방 멤버 종류 | - |
| `name` | `readonly` | `string` | 유저 이름 | [`User`](/docs/reference/user/User).[`name`](/docs/reference/user/User) |
| `profileImageUrl` | `readonly` | `string` \| `null` | 프로필 이미지 주소. 없으면 `null` | [`UserSelf`](/docs/reference/user/UserSelf).[`profileImageUrl`](/docs/reference/user/UserSelf) |
| `profileType` | `readonly` | `"default"` | 프로필 종류. 일반 채팅방은 항상 `default` | - |

## 접근자

### raw

#### get 시그니쳐

```ts
get raw(): NormalUserRaw;
```

유저 원본 데이터. 하위 클래스는 그 종류에 맞는 데이터를 돌려줍니다.

##### 반환값

[`NormalUserRaw`](/docs/reference/user#normaluserraw)

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

#### 상속받은 타입:

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
isNormalUser(): this is NormalUser;
```

일반 채팅방 유저(내 계정 포함) 여부

#### 반환값

`this is NormalUser`

#### 오버라이드 대상:

[`User`](/docs/reference/user/User).[`isNormalUser`](/docs/reference/user/User#isnormaluser)

### isOpenUser()

```ts
isOpenUser(): this is UserSelf | OpenUser;
```

오픈채팅방 유저(내 계정 포함) 여부

#### 반환값

this is UserSelf \| OpenUser

#### 상속받은 타입:

[`User`](/docs/reference/user/User).[`isOpenUser`](/docs/reference/user/User#isopenuser)

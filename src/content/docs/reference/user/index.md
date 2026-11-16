---
title: "user"
---

## 클래스

| 클래스 | 설명 |
| ------ | ------ |
| [BotUser](/docs/reference/user/BotUser) | 채팅방에 추가된 챗봇 |
| [DeleteUser](/docs/reference/user/DeleteUser) | 메세지를 삭제한 유저를 담는 객체. `User`를 상속하지 않습니다. |
| [EditUser](/docs/reference/user/EditUser) | 메세지를 수정한 유저를 담는 객체. `User`를 상속하지 않습니다. |
| [HideUser](/docs/reference/user/HideUser) | 메세지를 가린 유저와 가려진 메세지의 작성자를 담는 객체. `User`를 상속하지 않습니다. |
| [InviteUser](/docs/reference/user/InviteUser) | 초대한 유저와 초대된 유저를 담는 객체. `User`를 상속하지 않습니다. |
| [JoinUser](/docs/reference/user/JoinUser) | 오픈채팅방에 들어온 유저를 담는 객체. `User`를 상속하지 않습니다. |
| [KickUser](/docs/reference/user/KickUser) | 강퇴한 유저와 강퇴된 유저를 담는 객체. `User`를 상속하지 않습니다. |
| [LeaveUser](/docs/reference/user/LeaveUser) | 채팅방을 나간 유저를 담는 객체. `User`를 상속하지 않습니다. |
| [MemberTypeChangeUser](/docs/reference/user/MemberTypeChangeUser) | 부방장 임명·해제나 방장 위임에 관련된 유저를 담는 객체. `User`를 상속하지 않습니다. |
| [NormalUser](/docs/reference/user/NormalUser) | 일반 채팅방 유저 |
| [OpenUser](/docs/reference/user/OpenUser) | 오픈채팅방 유저 |
| [User](/docs/reference/user/User) | 유저. 채팅방 종류에 따라 [NormalUser](/docs/reference/user/NormalUser), [OpenUser](/docs/reference/user/OpenUser), [BotUser](/docs/reference/user/BotUser), [UserSelf](/docs/reference/user/UserSelf)로 받습니다. |
| [UserSelf](/docs/reference/user/UserSelf) | 내 계정. 일반 채팅방과 오픈채팅방 모두 이 클래스로 받습니다. |

## 타입 별칭

### BotUserRaw

```ts
type BotUserRaw = UserRaw & object;
```

채팅방에 추가된 챗봇의 원본 데이터

#### 타입 선언

| 이름 | 타입 | 설명 |
| ------ | ------ | ------ |
| `memberType` | `"bot"` | 멤버 종류. 항상 `bot` |
| `profileType` | `"default"` | 프로필 종류. 항상 `default` |

### NormalMemberType

```ts
type NormalMemberType = "member" | "host" | "moderator";
```

일반 채팅방 멤버 종류. `member` 일반 멤버, `host` 방장, `moderator` 부방장

### NormalUserRaw

```ts
type NormalUserRaw = UserRaw & object;
```

일반 채팅방 유저의 원본 데이터

#### 타입 선언

| 이름 | 타입 | 설명 |
| ------ | ------ | ------ |
| `memberType` | [`NormalMemberType`](#normalmembertype) | 채팅방 멤버 종류 |
| `profileType` | `"default"` | 프로필 종류. 일반 채팅방은 항상 `default` |

### OpenMemberType

```ts
type OpenMemberType = "unknown" | "host" | "member" | "moderator" | "bot";
```

오픈채팅방 멤버 종류

### OpenProfileType

```ts
type OpenProfileType = "unknown" | "default" | "kakao" | "open";
```

오픈채팅 프로필 종류

### OpenUserRaw

```ts
type OpenUserRaw = UserRaw & object;
```

오픈채팅방 유저의 원본 데이터

#### 타입 선언

| 이름 | 타입 | 설명 |
| ------ | ------ | ------ |
| `openChannel` | `object` | 오픈채팅방 안의 멤버 정보 |
| `openChannel.memberType` | [`OpenMemberType`](#openmembertype) | 오픈채팅방 멤버 종류 |
| `openChannel.profileLinkId` | `string` | 오픈프로필 링크 ID |
| `openChannel.profileType` | [`OpenProfileType`](#openprofiletype) | 오픈채팅 프로필 종류 |

### SelfProfile

```ts
type SelfProfile = object;
```

내 카카오톡 프로필

#### 속성

| 속성 | 수정자 | 타입 | 설명 |
| ------ | ------ | ------ | ------ |
| `main` | `readonly` | `true` | 기본 프로필 여부 |
| `nickname` | `readonly` | `string` | 닉네임 |
| `originalProfileImageUrl` | `readonly` | `string` | 원본 크기 프로필 이미지 주소 |
| `statusMessage` | `readonly` | `string` | 상태 메세지 |
| `userId` | `readonly` | `string` | 내 유저 ID |

### UserRaw

```ts
type UserRaw = object;
```

유저 원본 데이터

#### 속성

| 속성 | 수정자 | 타입 | 설명 |
| ------ | ------ | ------ | ------ |
| `customName` | `readonly` | `string` \| `null` | 친구 정보에서 내가 지정한 이름. 없으면 `null` |
| `id` | `readonly` | `string` | 유저 ID |
| `isMine` | `readonly` | `boolean` | 내 계정 여부 |
| `name` | `readonly` | `string` | 유저 이름 |
| `profileImageUrl` | `readonly` | `string` \| `null` | 프로필 이미지 주소. 없으면 `null` |

### UserSelfRaw

```ts
type UserSelfRaw = UserRaw & (
  | {
  memberType: OpenMemberType;
  profileType: "default";
}
  | {
  openChannel: {
     memberType: OpenMemberType;
     profileLinkId: string;
     profileType: OpenProfileType;
  };
});
```

내 계정의 원본 데이터. 일반 채팅방이면 `memberType`과 `profileType`을, 오픈채팅방이면 `openChannel`을 가집니다.

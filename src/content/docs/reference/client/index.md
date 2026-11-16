---
title: "client"
---

## 클래스

| 클래스 | 설명 |
| ------ | ------ |
| [ArisaClient](/docs/reference/client/ArisaClient) | Arisa 서버에 연결해 이벤트를 받고 채팅방과 유저를 조회하는 클라이언트 |

## 타입 별칭

### ArisaClientOptions

```ts
type ArisaClientOptions = object;
```

[ArisaClient](/docs/reference/client/ArisaClient) 생성자 옵션

#### 속성

| 속성 | 수정자 | 타입 | 기본값 | 설명 |
| ------ | ------ | ------ | ------ | ------ |
| `botName?` | `readonly` | `string` | `undefined` | 이벤트의 `UserSelf`에 표시할 내 이름. 대시보드에는 쓰지 않습니다. |
| `dashboard?` | `readonly` | `boolean` | `true` | `start()`할 때 대시보드도 켤지 여부 |
| `dashboardPort?` | `readonly` | `number` | `3001` | 대시보드 포트 |
| `openProfileIntervalMs?` | `readonly` | `number` | `1500` | 오픈프로필 변경을 확인하는 간격(밀리초) |
| `target?` | `readonly` | `string` | `127.0.0.1:3000` | Arisa gRPC 서버 주소. 비우거나 공백만 넣으면 기본값을 씁니다. |

### DeleteListener

```ts
type DeleteListener = (chat, channel) => void | Promise<void>;
```

`delete` 이벤트 리스너. 메세지가 삭제되면 호출하고, 원본을 찾지 못하면 호출하지 않습니다.

#### 매개변수

| 매개변수 | 타입 |
| ------ | ------ |
| `chat` | [`DeleteFeedChat`](/docs/reference/chat/DeleteFeedChat) |
| `channel` | [`Channel`](/docs/reference/channel/Channel) |

#### 반환값

`void` \| `Promise`\<`void`\>

### EditListener

```ts
type EditListener = (chat, channel) => void | Promise<void>;
```

`edit` 이벤트 리스너. 메세지가 수정되면 호출하고, 수정 전 메세지를 찾지 못하면 호출하지 않습니다.

#### 매개변수

| 매개변수 | 타입 |
| ------ | ------ |
| `chat` | [`EditFeedChat`](/docs/reference/chat/EditFeedChat) |
| `channel` | [`Channel`](/docs/reference/channel/Channel) |

#### 반환값

`void` \| `Promise`\<`void`\>

### ErrorContext

```ts
type ErrorContext = object;
```

`error` 이벤트로 전달되는 오류 정보

#### 속성

| 속성 | 수정자 | 타입 | 설명 |
| ------ | ------ | ------ | ------ |
| `args` | `readonly` | readonly `unknown`[] | 오류가 났을 때 리스너에 전달된 인자 |
| `event` | `readonly` | `string` | 오류가 난 이벤트 이름. 연결 중 오류는 `connect` |
| `exception` | `readonly` | `unknown` | 발생한 오류 |
| `func` | `readonly` | `unknown` | 오류가 난 리스너 함수. 리스너 밖에서 난 오류는 `null` |

### ErrorListener

```ts
type ErrorListener = (error) => void | Promise<void>;
```

`error` 이벤트 리스너. 이벤트 처리나 연결 중 오류가 나면 호출합니다.
오류 리스너가 없거나 리스너 안에서 다시 오류가 나면 콘솔에 출력합니다.

#### 매개변수

| 매개변수 | 타입 |
| ------ | ------ |
| `error` | [`ErrorContext`](#errorcontext) |

#### 반환값

`void` \| `Promise`\<`void`\>

### FeedListener

```ts
type FeedListener = (chat, channel) => void | Promise<void>;
```

`feed` 이벤트 리스너. 입장, 퇴장, 삭제 같은 피드를 모두 받습니다.
알 수 없는 피드는 `UnknownFeedChat`으로 전달합니다.

#### 매개변수

| 매개변수 | 타입 |
| ------ | ------ |
| `chat` | [`FeedChat`](/docs/reference/chat/FeedChat) |
| `channel` | [`Channel`](/docs/reference/channel/Channel) |

#### 반환값

`void` \| `Promise`\<`void`\>

### HideListener

```ts
type HideListener = (chat, channel) => void | Promise<void>;
```

`hide` 이벤트 리스너. 방장이나 부방장이 메세지를 가리면 호출합니다.

#### 매개변수

| 매개변수 | 타입 |
| ------ | ------ |
| `chat` | [`HideFeedChat`](/docs/reference/chat/HideFeedChat) |
| `channel` | [`Channel`](/docs/reference/channel/Channel) |

#### 반환값

`void` \| `Promise`\<`void`\>

### InviteListener

```ts
type InviteListener = (chat, channel) => void | Promise<void>;
```

`invite` 이벤트 리스너. 일반 채팅방에 유저가 초대되면 호출합니다.

#### 매개변수

| 매개변수 | 타입 |
| ------ | ------ |
| `chat` | [`InviteFeedChat`](/docs/reference/chat/InviteFeedChat) |
| `channel` | [`Channel`](/docs/reference/channel/Channel) |

#### 반환값

`void` \| `Promise`\<`void`\>

### JoinListener

```ts
type JoinListener = (chat, channel) => void | Promise<void>;
```

`join` 이벤트 리스너. 오픈채팅방에 유저가 들어오면 호출합니다.

#### 매개변수

| 매개변수 | 타입 |
| ------ | ------ |
| `chat` | [`JoinFeedChat`](/docs/reference/chat/JoinFeedChat) |
| `channel` | [`Channel`](/docs/reference/channel/Channel) |

#### 반환값

`void` \| `Promise`\<`void`\>

### KickListener

```ts
type KickListener = (chat, channel) => void | Promise<void>;
```

`kick` 이벤트 리스너. 오픈채팅방에서 유저가 강퇴되면 호출합니다. 팀채팅 강퇴는 `leave`로 받습니다.

#### 매개변수

| 매개변수 | 타입 |
| ------ | ------ |
| `chat` | [`KickFeedChat`](/docs/reference/chat/KickFeedChat) |
| `channel` | [`Channel`](/docs/reference/channel/Channel) |

#### 반환값

`void` \| `Promise`\<`void`\>

### LeaveListener

```ts
type LeaveListener = (chat, channel) => void | Promise<void>;
```

`leave` 이벤트 리스너. 유저가 채팅방을 나가면 호출합니다.

#### 매개변수

| 매개변수 | 타입 |
| ------ | ------ |
| `chat` | [`LeaveFeedChat`](/docs/reference/chat/LeaveFeedChat) |
| `channel` | [`Channel`](/docs/reference/channel/Channel) |

#### 반환값

`void` \| `Promise`\<`void`\>

### MemberTypeChangeListener

```ts
type MemberTypeChangeListener = (chat, channel) => void | Promise<void>;
```

`member_type_change` 이벤트 리스너. 방장이 바뀌거나 부방장이 임명·해제되면 호출합니다.

#### 매개변수

| 매개변수 | 타입 |
| ------ | ------ |
| `chat` | [`MemberTypeChangeFeedChat`](/docs/reference/chat/MemberTypeChangeFeedChat) |
| `channel` | [`Channel`](/docs/reference/channel/Channel) |

#### 반환값

`void` \| `Promise`\<`void`\>

### MessageListener

```ts
type MessageListener = (chat, channel) => void | Promise<void>;
```

`message` 이벤트 리스너. 메세지가 도착하면 호출합니다.

#### 매개변수

| 매개변수 | 타입 |
| ------ | ------ |
| `chat` | [`MessageChat`](/docs/reference/chat/MessageChat) |
| `channel` | [`Channel`](/docs/reference/channel/Channel) |

#### 반환값

`void` \| `Promise`\<`void`\>

### OpenProfileChange

```ts
type OpenProfileChange = object;
```

오픈프로필에서 바뀐 항목. 이름과 이미지가 모두 바뀌면 두 메서드 모두 `true`

#### 메서드

##### isNickname()

```ts
isNickname(): boolean;
```

프로필 이름 변경 여부

###### 반환값

`boolean`

##### isProfileImage()

```ts
isProfileImage(): boolean;
```

프로필 이미지 주소 변경 여부

###### 반환값

`boolean`

### OpenProfileChangeListener

```ts
type OpenProfileChangeListener = (beforeUser, afterUser, channel, change) => void | Promise<void>;
```

`open_profile_change` 이벤트 리스너. 오픈프로필 이름이나 이미지가 바뀌면 호출합니다.

리스너가 있는 동안 [ArisaClientOptions.openProfileIntervalMs](#속성-openprofileintervalms) 간격으로 프로필을 확인합니다.
확인 사이에 여러 번 바뀌면 중간 변경은 놓칠 수 있습니다.

#### 매개변수

| 매개변수 | 타입 |
| ------ | ------ |
| `beforeUser` | [`OpenProfileChangeUser`](#openprofilechangeuser) |
| `afterUser` | [`OpenProfileChangeUser`](#openprofilechangeuser) |
| `channel` | [`Channel`](/docs/reference/channel/Channel) |
| `change` | [`OpenProfileChange`](#openprofilechange) |

#### 반환값

`void` \| `Promise`\<`void`\>

### OpenProfileChangeUser

```ts
type OpenProfileChangeUser = object;
```

`open_profile_change` 이벤트의 변경 전후 오픈프로필

#### 속성

| 속성 | 수정자 | 타입 | 설명 |
| ------ | ------ | ------ | ------ |
| `id` | `readonly` | `string` | 유저 ID |
| `name` | `readonly` | `string` | 프로필 이름 |
| `profileImageUrl` | `readonly` | `string` \| `null` | 프로필 이미지 주소. 없으면 `null` |

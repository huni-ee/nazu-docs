---
title: "channel"
---

## 클래스

| 클래스 | 설명 |
| ------ | ------ |
| [Channel](/docs/reference/channel/Channel) | 채팅방. 일반 채팅방은 [NormalChannel](/docs/reference/channel/NormalChannel), 오픈채팅방은 [OpenChannel](/docs/reference/channel/OpenChannel)로 받습니다. |
| [NormalChannel](/docs/reference/channel/NormalChannel) | 일반 채팅방. 나와의 채팅은 `name`에 내 프로필 닉네임이 들어 있습니다. |
| [OpenChannel](/docs/reference/channel/OpenChannel) | 오픈채팅방 |

## 인터페이스

### ChannelRaw

채팅방 원본 데이터

#### 속성

| 속성 | 수정자 | 타입 | 설명 |
| ------ | ------ | ------ | ------ |
| `id` | `readonly` | `string` | 채팅방 ID |
| `name` | `readonly` | `string` \| `null` | 채팅방 이름 |
| `openChannel` | `readonly` | [`OpenChannelInfo`](#openchannelinfo) \| `null` | 오픈채팅방 정보. 일반 채팅방이면 `null` |
| `privateName` | `readonly` | `string` \| `null` | 채팅방 이름 설정에서 내가 지정한 이름 |
| `type` | `readonly` | `string` | 채팅방 종류 ([NormalChannelType](#normalchanneltype) 또는 [OpenChannelType](#openchanneltype)) |

### ChatCount

유저 한 명의 채팅 수

#### 타입 매개변수

| 타입 매개변수 | 기본 타입 |
| ------ | ------ |
| `TUser` | `unknown` |

#### 속성

| 속성 | 수정자 | 타입 | 설명 |
| ------ | ------ | ------ | ------ |
| `count` | `readonly` | `number` | 채팅 수 |
| `user` | `readonly` | `TUser` | 대상 유저 |

### ChatCountOptions

유저별 채팅 수를 셀 때의 조건

#### 속성

| 속성 | 수정자 | 타입 | 설명 |
| ------ | ------ | ------ | ------ |
| `endDate?` | `readonly` | `Date` | 집계 종료 시각. 생략하면 현재 시각까지 셉니다. |
| `includeFeed?` | `readonly` | `boolean` | 피드도 채팅 수에 넣을지 여부. 기본값은 `false` |
| `startDate?` | `readonly` | `Date` | 집계 시작 시각. 생략하면 Unix 시간 0부터 셉니다. |

### MediaFile

바이트로 보낼 파일

#### 속성

| 속성 | 수정자 | 타입 | 설명 |
| ------ | ------ | ------ | ------ |
| `data` | `readonly` | `Uint8Array` | 파일 바이트 |
| `mime?` | `readonly` | `string` | MIME 타입 |
| `name?` | `readonly` | `string` | 파일 이름 |

### OpenChannelInfo

오픈채팅방 정보

#### 속성

| 속성 | 수정자 | 타입 | 설명 |
| ------ | ------ | ------ | ------ |
| `active` | `readonly` | `boolean` | 활성 여부 |
| `createdAt` | `readonly` | `number` | 만든 시각. 서버가 준 숫자 그대로 |
| `description` | `readonly` | `string` | 오픈채팅방 설명 |
| `expired` | `readonly` | `boolean` | 만료 여부 |
| `imageUrl` | `readonly` | `string` | 대표 이미지 주소 |
| `name` | `readonly` | `string` | 오픈채팅방 이름 |
| `url` | `readonly` | `string` | 오픈채팅방 링크 |

### SendMediaOptions

미디어 전송 옵션

#### 속성

| 속성 | 수정자 | 타입 | 설명 |
| ------ | ------ | ------ | ------ |
| `mode?` | `readonly` | [`MediaMode`](#mediamode) | 전송 방식. 생략하면 입력이 하나일 때 `single`, 배열일 때 `multiple` |

## 타입 별칭

### MediaInput

```ts
type MediaInput = string | Uint8Array | MediaFile;
```

보낼 파일. 파일 경로나 URL 문자열, 파일 바이트, [MediaFile](#mediafile) 중 하나

### MediaMode

```ts
type MediaMode = "single" | "multiple";
```

미디어 전송 방식. `single`은 파일을 한 개씩, `multiple`은 여러 장을 한 메세지로 보냅니다.

### NormalChannelType

```ts
type NormalChannelType = "MemoChat" | "DirectChat" | "MultiChat" | "TeamMultiChat" | "PlusChat";
```

일반 채팅방 종류

- `MemoChat`: 나와의 채팅
- `DirectChat`: 1:1 채팅
- `MultiChat`: 그룹 채팅
- `TeamMultiChat`: 팀채팅
- `PlusChat`: 카카오톡 채널

### OpenChannelType

```ts
type OpenChannelType = "OD" | "OM" | "COM";
```

오픈채팅방 종류

- `OD`: 1:1 오픈채팅
- `OM`: 그룹 오픈채팅
- `COM`: 커뮤니티 오픈 그룹 채팅

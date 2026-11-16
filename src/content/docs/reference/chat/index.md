---
title: "chat"
---

## 클래스

| 클래스 | 설명 |
| ------ | ------ |
| [AudioChat](/docs/reference/chat/AudioChat) | 음성 메세지 |
| [Chat](/docs/reference/chat/Chat) | 메세지([MessageChat](/docs/reference/chat/MessageChat))와 피드([FeedChat](/docs/reference/chat/FeedChat))의 공통 부모 |
| [DeletedChat](/docs/reference/chat/DeletedChat) | 삭제된 메세지 |
| [DeleteFeedChat](/docs/reference/chat/DeleteFeedChat) | 메세지가 삭제된 피드 |
| [DemoteFeedChat](/docs/reference/chat/DemoteFeedChat) | 부방장이 해제된 피드 |
| [EditChat](/docs/reference/chat/EditChat) | 수정된 메세지 |
| [EditFeedChat](/docs/reference/chat/EditFeedChat) | 메세지가 수정된 피드 |
| [EmoticonChat](/docs/reference/chat/EmoticonChat) | 이모티콘 메세지 |
| [FeedChat](/docs/reference/chat/FeedChat) | 입장, 퇴장, 삭제 같은 피드. 종류마다 하위 클래스로 받습니다. |
| [FileChat](/docs/reference/chat/FileChat) | 파일 메세지 |
| [HandoverFeedChat](/docs/reference/chat/HandoverFeedChat) | 방장이 바뀐 피드 |
| [HiddenChat](/docs/reference/chat/HiddenChat) | 가려진 메세지. 원본을 찾지 못하면 `id` 말고는 모두 `null` |
| [HideFeedChat](/docs/reference/chat/HideFeedChat) | 방장이나 부방장이 메세지를 가린 피드 |
| [InviteFeedChat](/docs/reference/chat/InviteFeedChat) | 일반 채팅방에 유저가 초대된 피드 |
| [JoinFeedChat](/docs/reference/chat/JoinFeedChat) | 오픈채팅방에 유저가 들어온 피드 |
| [KickFeedChat](/docs/reference/chat/KickFeedChat) | 오픈채팅방에서 유저가 강퇴된 피드. 팀채팅 강퇴는 [LeaveFeedChat](/docs/reference/chat/LeaveFeedChat)으로 받습니다. |
| [LeaveFeedChat](/docs/reference/chat/LeaveFeedChat) | 유저가 채팅방을 나간 피드 |
| [ManagerSpeakerModeFeedChat](/docs/reference/chat/ManagerSpeakerModeFeedChat) | 관리자만 말하기를 켜거나 끈 피드 |
| [MapChat](/docs/reference/chat/MapChat) | 지도 메세지 |
| [MemberTypeChangeFeedChat](/docs/reference/chat/MemberTypeChangeFeedChat) | 부방장 임명·해제와 방장 위임 피드의 부모. 아래 속성은 모두 선택적이고, `isPromote()` 같은 메서드로 좁히면 해당 속성이 항상 있습니다. |
| [MessageChat](/docs/reference/chat/MessageChat) | 메세지. `message` 이벤트 리스너의 `chat` 인자나 메세지 조회 메서드로 받습니다. |
| [MiniEmoticonChat](/docs/reference/chat/MiniEmoticonChat) | 미니 이모티콘이 들어 있는 메세지 |
| [MultiPhotoChat](/docs/reference/chat/MultiPhotoChat) | 여러 장의 사진을 묶은 메세지 |
| [NormalChat](/docs/reference/chat/NormalChat) | 일반 텍스트 메세지 |
| [OpenChannelDeleteFeedChat](/docs/reference/chat/OpenChannelDeleteFeedChat) | 오픈채팅방이 삭제된 피드 |
| [PhotoChat](/docs/reference/chat/PhotoChat) | 사진 메세지 |
| [ProfileChat](/docs/reference/chat/ProfileChat) | 프로필 공유 메세지 |
| [PromoteFeedChat](/docs/reference/chat/PromoteFeedChat) | 부방장이 임명된 피드 |
| [ReplyChat](/docs/reference/chat/ReplyChat) | 답장 메세지. 전용 타입 가드가 없으니 `chat instanceof ReplyChat`으로 확인합니다. |
| [UnknownFeedChat](/docs/reference/chat/UnknownFeedChat) | 따로 처리하지 않는 피드. 챗봇 피드도 여기로 옵니다. `feedType`을 읽지 못하면 `-1` |
| [VideoChat](/docs/reference/chat/VideoChat) | 동영상 메세지 |

## 인터페이스

### Attachment

메세지 첨부 데이터. 키는 카카오톡이 보낸 원본 그대로이며, 아래에 없는 키가 더 있을 수 있습니다.
메세지 종류별 첨부 데이터는 이 타입을 확장합니다.

#### 상속 관계

- `Record`\<`string`, `unknown`\>
  - **`Attachment`**
    - [`AudioAttachment`](#audioattachment)
    - [`EmoticonAttachment`](#emoticonattachment)
    - [`FileAttachment`](#fileattachment)
    - [`MentionAttachment`](#mentionattachment)
    - [`MultiPhotoAttachment`](#multiphotoattachment)
    - [`PhotoAttachment`](#photoattachment)
    - [`ProfileAttachment`](#profileattachment)
    - [`ReplyAttachment`](#replyattachment)
    - [`VideoAttachment`](#videoattachment)

#### 인덱싱 가능

```ts
[key: string]: unknown
```

#### 속성

| 속성 | 수정자 | 타입 | 설명 |
| ------ | ------ | ------ | ------ |
| `all_mention?` | `readonly` | `object` | `@all`로 전체를 멘션했을 때만 있습니다. 한 명씩 한 멘션은 `mentions`에 들어갑니다. |
| `all_mention.at` | `readonly` | `number` | 멘션 위치. `mentions`의 `at`과 달리 숫자 하나 |
| `mentions?` | `readonly` | `object`[] | 멘션 목록 |
| `shout?` | `readonly` | `boolean` | 외치기 메세지 여부 |
| `urls?` | `readonly` | `string`[] | 메세지에 들어 있는 URL 목록 |

### AudioAttachment

음성 메세지의 첨부 데이터

#### 상속 관계

- [`Attachment`](#attachment)
  - **`AudioAttachment`**

#### 인덱싱 가능

```ts
[key: string]: unknown
```

#### 속성

| 속성 | 수정자 | 타입 | 설명 | 상속받은 타입: |
| ------ | ------ | ------ | ------ | ------ |
| `all_mention?` | `readonly` | `object` | `@all`로 전체를 멘션했을 때만 있습니다. 한 명씩 한 멘션은 `mentions`에 들어갑니다. | [`Attachment`](#attachment).[`all_mention`](#속성-all_mention) |
| `all_mention.at` | `readonly` | `number` | 멘션 위치. `mentions`의 `at`과 달리 숫자 하나 | - |
| `d` | `readonly` | `number` | - | - |
| `expire` | `readonly` | `number` | - | - |
| `k` | `readonly` | `string` | - | - |
| `mentions?` | `readonly` | `object`[] | 멘션 목록 | [`Attachment`](#attachment).[`mentions`](#속성-mentions) |
| `s` | `readonly` | `number` | - | - |
| `shout?` | `readonly` | `boolean` | 외치기 메세지 여부 | [`Attachment`](#attachment).[`shout`](#속성-shout) |
| `url` | `readonly` | `string` | 음성 파일 주소 | - |
| `urls?` | `readonly` | `string`[] | 메세지에 들어 있는 URL 목록 | [`Attachment`](#attachment).[`urls`](#속성-urls) |

### EmoticonAttachment

이모티콘 메세지의 첨부 데이터

#### 상속 관계

- [`Attachment`](#attachment)
  - **`EmoticonAttachment`**

#### 인덱싱 가능

```ts
[key: string]: unknown
```

#### 속성

| 속성 | 수정자 | 타입 | 설명 | 상속받은 타입: |
| ------ | ------ | ------ | ------ | ------ |
| `all_mention?` | `readonly` | `object` | `@all`로 전체를 멘션했을 때만 있습니다. 한 명씩 한 멘션은 `mentions`에 들어갑니다. | [`Attachment`](#attachment).[`all_mention`](#속성-all_mention) |
| `all_mention.at` | `readonly` | `number` | 멘션 위치. `mentions`의 `at`과 달리 숫자 하나 | - |
| `alt` | `readonly` | `string` | 이모티콘 대체 텍스트 | - |
| `height?` | `readonly` | `string` \| `number` | - | - |
| `mentions?` | `readonly` | `object`[] | 멘션 목록 | [`Attachment`](#attachment).[`mentions`](#속성-mentions) |
| `msg?` | `readonly` | `string` | - | - |
| `name` | `readonly` | `string` | 이모티콘 이름 | - |
| `path` | `readonly` | `string` | 이모티콘 경로 | - |
| `s?` | `readonly` | `string` \| `number` | - | - |
| `shout?` | `readonly` | `boolean` | 외치기 메세지 여부 | [`Attachment`](#attachment).[`shout`](#속성-shout) |
| `sound?` | `readonly` | `string` | - | - |
| `type?` | `readonly` | `string` | - | - |
| `urls?` | `readonly` | `string`[] | 메세지에 들어 있는 URL 목록 | [`Attachment`](#attachment).[`urls`](#속성-urls) |
| `welcome?` | `readonly` | `boolean` | - | - |
| `width?` | `readonly` | `string` \| `number` | - | - |
| `xconVersion?` | `readonly` | `string` \| `number` | - | - |

### FileAttachment

파일 메세지의 첨부 데이터

#### 상속 관계

- [`Attachment`](#attachment)
  - **`FileAttachment`**

#### 인덱싱 가능

```ts
[key: string]: unknown
```

#### 속성

| 속성 | 수정자 | 타입 | 설명 | 상속받은 타입: |
| ------ | ------ | ------ | ------ | ------ |
| `all_mention?` | `readonly` | `object` | `@all`로 전체를 멘션했을 때만 있습니다. 한 명씩 한 멘션은 `mentions`에 들어갑니다. | [`Attachment`](#attachment).[`all_mention`](#속성-all_mention) |
| `all_mention.at` | `readonly` | `number` | 멘션 위치. `mentions`의 `at`과 달리 숫자 하나 | - |
| `cs` | `readonly` | `string` | - | - |
| `expire` | `readonly` | `number` | - | - |
| `k` | `readonly` | `string` | - | - |
| `mentions?` | `readonly` | `object`[] | 멘션 목록 | [`Attachment`](#attachment).[`mentions`](#속성-mentions) |
| `name` | `readonly` | `string` | 파일 이름 | - |
| `s` | `readonly` | `number` | - | - |
| `shout?` | `readonly` | `boolean` | 외치기 메세지 여부 | [`Attachment`](#attachment).[`shout`](#속성-shout) |
| `size` | `readonly` | `number` | 파일 크기 | - |
| `url` | `readonly` | `string` | 파일 주소 | - |
| `urls?` | `readonly` | `string`[] | 메세지에 들어 있는 URL 목록 | [`Attachment`](#attachment).[`urls`](#속성-urls) |

### MapAttachment

지도 메세지의 첨부 데이터

#### 속성

| 속성 | 수정자 | 타입 | 설명 |
| ------ | ------ | ------ | ------ |
| `address` | `readonly` | `string` \| `null` | 주소. 없으면 `null` |
| `lat` | `readonly` | `number` | 위도 |
| `lng` | `readonly` | `number` | 경도 |
| `name` | `readonly` | `string` \| `null` | 장소 이름. 장소를 공유하지 않았으면 `null` |
| `url` | `readonly` | `string` | 카카오맵 링크 |

### MentionAttachment

멘션이 있는 메세지의 첨부 데이터

#### 상속 관계

- [`Attachment`](#attachment)
  - **`MentionAttachment`**

#### 인덱싱 가능

```ts
[key: string]: unknown
```

#### 속성

| 속성 | 수정자 | 타입 | 설명 | 오버라이드 대상: | 상속받은 타입: |
| ------ | ------ | ------ | ------ | ------ | ------ |
| `all_mention?` | `readonly` | `object` | `@all`로 전체를 멘션했을 때만 있습니다. 한 명씩 한 멘션은 `mentions`에 들어갑니다. | [`Attachment`](#attachment).[`all_mention`](#속성-all_mention) | - |
| `all_mention.at` | `readonly` | `number` | 멘션 위치. `mentions`의 `at`과 달리 숫자 하나 | - | - |
| `mentions?` | `readonly` | `object`[] | 멘션 목록 | [`Attachment`](#attachment).[`mentions`](#속성-mentions) | - |
| `shout?` | `readonly` | `boolean` | 외치기 메세지 여부 | - | [`Attachment`](#attachment).[`shout`](#속성-shout) |
| `urls?` | `readonly` | `string`[] | 메세지에 들어 있는 URL 목록 | - | [`Attachment`](#attachment).[`urls`](#속성-urls) |

### MessageChatRaw

메세지 원본 데이터

#### 속성

| 속성 | 수정자 | 타입 | 설명 |
| ------ | ------ | ------ | ------ |
| `attachment` | `readonly` | [`Attachment`](#attachment) | 첨부 데이터 |
| `channel` | `readonly` | [`ChannelRaw`](/docs/reference/channel#channelraw) | 메세지가 온 채팅방 |
| `logId` | `readonly` | `string` | 메세지 로그 ID |
| `message` | `readonly` | `string` | 메세지 내용 |
| `modifyLog` | `readonly` | [`MessageRevisionRaw`](#messagerevisionraw)[] | 수정 기록 |
| `scope` | `readonly` | [`MessageScopeName`](#messagescopename) | 메세지가 속한 범위 |
| `threadId` | `readonly` | `string` \| `null` | 스레드 ID. 스레드에 속하지 않으면 `null` |
| `type` | `readonly` | `number` | 원본 메세지 타입 번호 |
| `user` | `readonly` | [`UserRaw`](/docs/reference/user#userraw) \| `null` | 보낸 유저. 정보가 없으면 `null` |

### MessageRevisionRaw

메세지 수정 기록 한 건

#### 속성

| 속성 | 수정자 | 타입 | 설명 |
| ------ | ------ | ------ | ------ |
| `message` | `readonly` | `string` | 이 수정의 메세지 내용 |
| `revision` | `readonly` | `number` | 수정 번호 |

### MiniEmoticonAttachment

미니 이모티콘이 들어 있는 메세지의 첨부 데이터

#### 속성

| 속성 | 수정자 | 타입 | 설명 |
| ------ | ------ | ------ | ------ |
| `items` | `readonly` | `object`[] | 메세지 안의 미니 이모티콘 목록 |
| `total_item` | `readonly` | `number` | - |
| `total_len` | `readonly` | `number` | - |

### MultiPhotoAttachment

여러 장의 사진을 묶은 메세지의 첨부 데이터

#### 상속 관계

- [`Attachment`](#attachment)
  - **`MultiPhotoAttachment`**

#### 인덱싱 가능

```ts
[key: string]: unknown
```

#### 속성

| 속성 | 수정자 | 타입 | 설명 | 상속받은 타입: |
| ------ | ------ | ------ | ------ | ------ |
| `all_mention?` | `readonly` | `object` | `@all`로 전체를 멘션했을 때만 있습니다. 한 명씩 한 멘션은 `mentions`에 들어갑니다. | [`Attachment`](#attachment).[`all_mention`](#속성-all_mention) |
| `all_mention.at` | `readonly` | `number` | 멘션 위치. `mentions`의 `at`과 달리 숫자 하나 | - |
| `cmtl` | `readonly` | `string`[] | - | - |
| `csl` | `readonly` | `string`[] | - | - |
| `ctMeta?` | `readonly` | `string` | - | - |
| `expire` | `readonly` | `number` | - | - |
| `hl` | `readonly` | `number`[] | - | - |
| `imageUrls` | `readonly` | `string`[] | 사진 주소 목록 | - |
| `kl` | `readonly` | `string`[] | - | - |
| `lastFeedId?` | `readonly` | `string` | - | - |
| `mentions?` | `readonly` | `object`[] | 멘션 목록 | [`Attachment`](#attachment).[`mentions`](#속성-mentions) |
| `mtl` | `readonly` | `string`[] | - | - |
| `shout?` | `readonly` | `boolean` | 외치기 메세지 여부 | [`Attachment`](#attachment).[`shout`](#속성-shout) |
| `sl` | `readonly` | `number`[] | - | - |
| `thumbnailHeights` | `readonly` | `number`[] | 미리보기 높이 목록 | - |
| `thumbnailUrls` | `readonly` | `string`[] | 미리보기 이미지 주소 목록 | - |
| `thumbnailWidths` | `readonly` | `number`[] | 미리보기 너비 목록 | - |
| `urls?` | `readonly` | `string`[] | 메세지에 들어 있는 URL 목록 | [`Attachment`](#attachment).[`urls`](#속성-urls) |
| `wl` | `readonly` | `number`[] | - | - |

### PhotoAttachment

사진 메세지의 첨부 데이터

#### 상속 관계

- [`Attachment`](#attachment)
  - **`PhotoAttachment`**

#### 인덱싱 가능

```ts
[key: string]: unknown
```

#### 속성

| 속성 | 수정자 | 타입 | 설명 | 상속받은 타입: |
| ------ | ------ | ------ | ------ | ------ |
| `all_mention?` | `readonly` | `object` | `@all`로 전체를 멘션했을 때만 있습니다. 한 명씩 한 멘션은 `mentions`에 들어갑니다. | [`Attachment`](#attachment).[`all_mention`](#속성-all_mention) |
| `all_mention.at` | `readonly` | `number` | 멘션 위치. `mentions`의 `at`과 달리 숫자 하나 | - |
| `cmt?` | `readonly` | `string` | - | - |
| `cs` | `readonly` | `string` | - | - |
| `expire` | `readonly` | `number` | - | - |
| `h` | `readonly` | `number` | 원본 사진 높이 | - |
| `k` | `readonly` | `string` | - | - |
| `mentions?` | `readonly` | `object`[] | 멘션 목록 | [`Attachment`](#attachment).[`mentions`](#속성-mentions) |
| `mt` | `readonly` | `string` | - | - |
| `s` | `readonly` | `number` | - | - |
| `shout?` | `readonly` | `boolean` | 외치기 메세지 여부 | [`Attachment`](#attachment).[`shout`](#속성-shout) |
| `thumbnailHeight` | `readonly` | `number` | 미리보기 높이 | - |
| `thumbnailUrl` | `readonly` | `string` | 미리보기 이미지 주소 | - |
| `thumbnailWidth` | `readonly` | `number` | 미리보기 너비 | - |
| `url` | `readonly` | `string` | 사진 주소 | - |
| `urls?` | `readonly` | `string`[] | 메세지에 들어 있는 URL 목록 | [`Attachment`](#attachment).[`urls`](#속성-urls) |
| `w` | `readonly` | `number` | 원본 사진 너비 | - |

### ProfileAttachment

프로필 공유 메세지의 첨부 데이터

#### 상속 관계

- [`Attachment`](#attachment)
  - **`ProfileAttachment`**

#### 인덱싱 가능

```ts
[key: string]: unknown
```

#### 속성

| 속성 | 수정자 | 타입 | 설명 | 상속받은 타입: |
| ------ | ------ | ------ | ------ | ------ |
| `accessPermit` | `readonly` | `string` | - | - |
| `all_mention?` | `readonly` | `object` | `@all`로 전체를 멘션했을 때만 있습니다. 한 명씩 한 멘션은 `mentions`에 들어갑니다. | [`Attachment`](#attachment).[`all_mention`](#속성-all_mention) |
| `all_mention.at` | `readonly` | `number` | 멘션 위치. `mentions`의 `at`과 달리 숫자 하나 | - |
| `fullProfileImageUrl` | `readonly` | `string` | 큰 프로필 이미지 주소 | - |
| `mentions?` | `readonly` | `object`[] | 멘션 목록 | [`Attachment`](#attachment).[`mentions`](#속성-mentions) |
| `nickName` | `readonly` | `string` | 닉네임 | - |
| `profileImageUrl` | `readonly` | `string` | 프로필 이미지 주소 | - |
| `shout?` | `readonly` | `boolean` | 외치기 메세지 여부 | [`Attachment`](#attachment).[`shout`](#속성-shout) |
| `statusMessage?` | `readonly` | `string` | 상태 메세지 | - |
| `urls?` | `readonly` | `string`[] | 메세지에 들어 있는 URL 목록 | [`Attachment`](#attachment).[`urls`](#속성-urls) |
| `userId` | `readonly` | `string` | 유저 ID | - |

### ReplyAttachment

답장 메세지의 첨부 데이터. `src_`로 시작하는 키는 답장 대상 메세지의 정보

#### 상속 관계

- [`Attachment`](#attachment)
  - **`ReplyAttachment`**

#### 인덱싱 가능

```ts
[key: string]: unknown
```

#### 속성

| 속성 | 수정자 | 타입 | 설명 | 상속받은 타입: |
| ------ | ------ | ------ | ------ | ------ |
| `all_mention?` | `readonly` | `object` | `@all`로 전체를 멘션했을 때만 있습니다. 한 명씩 한 멘션은 `mentions`에 들어갑니다. | [`Attachment`](#attachment).[`all_mention`](#속성-all_mention) |
| `all_mention.at` | `readonly` | `number` | 멘션 위치. `mentions`의 `at`과 달리 숫자 하나 | - |
| `attach_content?` | `readonly` | [`EmoticonAttachment`](#emoticonattachment) | 답장에 붙은 이모티콘 데이터 | - |
| `attach_only?` | `readonly` | `boolean` | - | - |
| `attach_type?` | `readonly` | `number` | - | - |
| `mentions?` | `readonly` | `object`[] | 멘션 목록 | [`Attachment`](#attachment).[`mentions`](#속성-mentions) |
| `shout?` | `readonly` | `boolean` | 외치기 메세지 여부 | [`Attachment`](#attachment).[`shout`](#속성-shout) |
| `src_linkId` | `readonly` | `string` | - | - |
| `src_logId` | `readonly` | `string` | 답장 대상 메세지의 로그 ID. `getSource()`가 이 값으로 메세지를 찾습니다. | - |
| `src_mentions?` | `readonly` | `string`[] | 답장 대상 메세지에서 멘션된 유저 ID 목록. 원본 멘션 객체의 `user_id`만 중복 없이 모았습니다. | - |
| `src_message` | `readonly` | `string` | 답장 대상 메세지 내용 | - |
| `src_type` | `readonly` | `number` | 답장 대상 메세지 타입 번호 | - |
| `src_userId` | `readonly` | `string` | 답장 대상 메세지를 보낸 유저 ID | - |
| `urls?` | `readonly` | `string`[] | 메세지에 들어 있는 URL 목록 | [`Attachment`](#attachment).[`urls`](#속성-urls) |

### VideoAttachment

동영상 메세지의 첨부 데이터

#### 상속 관계

- [`Attachment`](#attachment)
  - **`VideoAttachment`**

#### 인덱싱 가능

```ts
[key: string]: unknown
```

#### 속성

| 속성 | 수정자 | 타입 | 설명 | 상속받은 타입: |
| ------ | ------ | ------ | ------ | ------ |
| `all_mention?` | `readonly` | `object` | `@all`로 전체를 멘션했을 때만 있습니다. 한 명씩 한 멘션은 `mentions`에 들어갑니다. | [`Attachment`](#attachment).[`all_mention`](#속성-all_mention) |
| `all_mention.at` | `readonly` | `number` | 멘션 위치. `mentions`의 `at`과 달리 숫자 하나 | - |
| `cmt?` | `readonly` | `string` | - | - |
| `cs` | `readonly` | `string` | - | - |
| `csh?` | `readonly` | `string` | - | - |
| `d` | `readonly` | `number` | - | - |
| `dh?` | `readonly` | `number` | - | - |
| `expire` | `readonly` | `number` | - | - |
| `h` | `readonly` | `number` | 동영상 높이 | - |
| `hh?` | `readonly` | `number` | - | - |
| `mentions?` | `readonly` | `object`[] | 멘션 목록 | [`Attachment`](#attachment).[`mentions`](#속성-mentions) |
| `s` | `readonly` | `number` | - | - |
| `sh?` | `readonly` | `number` | - | - |
| `shout?` | `readonly` | `boolean` | 외치기 메세지 여부 | [`Attachment`](#attachment).[`shout`](#속성-shout) |
| `tk` | `readonly` | `string` | - | - |
| `tkh?` | `readonly` | `string` | - | - |
| `url` | `readonly` | `string` | 동영상 주소 | - |
| `urlh?` | `readonly` | `string` | - | - |
| `urls?` | `readonly` | `string`[] | 메세지에 들어 있는 URL 목록 | [`Attachment`](#attachment).[`urls`](#속성-urls) |
| `w` | `readonly` | `number` | 동영상 너비 | - |
| `wh?` | `readonly` | `number` | - | - |

## 타입 별칭

### MessageScopeName

```ts
type MessageScopeName = "unknown" | "channel" | "thread" | "all";
```

메세지가 속한 범위

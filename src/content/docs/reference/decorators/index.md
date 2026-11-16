---
title: "decorators"
---

## 변수

### hasParam

```ts
const hasParam: MessageDecorator;
```

앞뒤 공백을 뺀 메세지가 두 단어 이상일 때만 리스너를 실행합니다.

### isAdmin

```ts
const isAdmin: MessageDecorator;
```

보낸 유저가 관리자 목록에 있을 때만 리스너를 실행합니다. 관리자는 대시보드에서 추가합니다.

### isNotBanned

```ts
const isNotBanned: MessageDecorator;
```

보낸 유저가 밴 목록에 없을 때만 리스너를 실행합니다. 유저 정보가 없거나 데이터베이스가 준비되지 않았어도 실행합니다.

### isReply

```ts
const isReply: MessageDecorator;
```

답장이나 스레드 메세지일 때만 리스너를 실행합니다. 아니면 답장으로 다시 요청하라는 안내를 채팅방에 보냅니다.

메세지 리스너를 감싸거나 클래스 메서드 데코레이터로 씁니다.

#### 예제

```ts
client.on('message', isReply(async (chat, channel) => {
  const source = await chat.getSource();
  await channel.send(source.text);
}));
```

## 함수

### addBan()

```ts
function addBan(user): boolean;
```

유저를 밴 목록에 추가합니다. 새로 추가했으면 `true`, 이미 있었으면 `false`

#### 매개변수

| 매개변수 | 타입 |
| ------ | ------ |
| `user` | [`User`](/docs/reference/user/User) \| `null` |

#### 반환값

`boolean`

### adminCheck()

```ts
function adminCheck(user): boolean;
```

유저가 관리자 목록에 있는지 확인합니다.

관리자와 밴 목록은 실행 폴더의 `data/arisa.db`에 저장됩니다. 유저가 `null`이거나 데이터베이스가 아직 준비되지 않았으면 `false`를 돌려줍니다.

#### 매개변수

| 매개변수 | 타입 |
| ------ | ------ |
| `user` | [`User`](/docs/reference/user/User) \| `null` |

#### 반환값

`boolean`

### banCheck()

```ts
function banCheck(user): boolean;
```

유저가 밴 목록에 있는지 확인합니다.

관리자와 밴 목록은 실행 폴더의 `data/arisa.db`에 저장됩니다. 유저가 `null`이거나 데이터베이스가 아직 준비되지 않았으면 `false`를 돌려줍니다.

#### 매개변수

| 매개변수 | 타입 |
| ------ | ------ |
| `user` | [`User`](/docs/reference/user/User) \| `null` |

#### 반환값

`boolean`

### removeBan()

```ts
function removeBan(user): boolean;
```

유저를 밴 목록에서 뺍니다. 뺐으면 `true`, 목록에 없었으면 `false`

#### 매개변수

| 매개변수 | 타입 |
| ------ | ------ |
| `user` | [`User`](/docs/reference/user/User) \| `null` |

#### 반환값

`boolean`

---
title: "HiddenChat"
description: "가려진 메세지. 원본을 찾지 못하면 id 말고는 모두 null"
---

## 속성

| 속성 | 수정자 | 타입 | 설명 |
| ------ | ------ | ------ | ------ |
| `attachment` | `readonly` | [`Attachment`](/docs/reference/chat#attachment) \| `null` | 첨부 데이터 |
| `id` | `readonly` | `string` | 메세지 로그 ID |
| `text` | `readonly` | `string` \| `null` | 메세지 내용 |
| `threadId` | `readonly` | `string` \| `null` | 스레드 ID |
| `type` | `readonly` | `number` \| `null` | 메세지 타입 번호 |

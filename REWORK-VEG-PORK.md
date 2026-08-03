# vegetable-dumpling / product-pork 리드 문단 재작업

팀 방침에 따라 **이 2개 파일만** 재작업했다. 검색량이 확인된 키워드는 정확한 형태로 서로 다른 문장에 남기고, 검색량 0인 브랜드 구성 키워드와 마스터 리스트에 없는 임의 키워드는 자연스러운 문장으로 풀어썼다. 소비자 대상 카피 톤은 유지했다.


---

## vegetable-dumpling.html

**변경 전**
> Tired of mushy veggie dumplings? miri's crisp up beautifully and cook in minutes, packed with tofu and garden vegetables for a light, savory bite that works as easily on a weeknight plate as on a party tray. Pan-fry them as vegetable potstickers, steam them, or air fry straight from frozen — the wrapper stays crisp either way. As frozen veggie dumplings go these are unusually crisp — a fried dumplings korean style that holds up on a snack table. For buyers, this is our fastest-moving line of plant based dumplings, available by the carton for retail and foodservice. Ask about MIRI vegetable dumplings wholesale terms — retail cartons, foodservice packs and private label.

**변경 후**
> Tired of mushy veggie dumplings? miri's crisp up beautifully and cook in minutes, packed with tofu and garden vegetables for a light, savory bite that works as easily on a weeknight plate as on a party tray. Pan-fry them as vegetable potstickers, steam them, or air fry straight from frozen — the wrapper stays crisp either way, and they hold that crunch on a snack table instead of going soft. As frozen veggie dumplings go, that is the unusual part. It is also our fastest-moving plant based line: available by the carton for retail and foodservice, and for private label. Get in touch for wholesale terms.

### 키워드 처리

| 키워드 | 검색량 | 방침 | 결과 |
|---|---|---|---|
| vegetable potstickers | 1,000 | 정확한 형태 유지 | 유지 — 2번째 문장 |
| frozen veggie dumplings | 320 | 정확한 형태 유지 | 유지 — 3번째 문장(별도 문장) |
| plant based dumplings | 90 | 위치 조정 가능 | `plant based line` 으로 자연화 |
| MIRI vegetable dumplings wholesale | 0 | 자연스럽게 풀어씀 | "Get in touch for wholesale terms." 로 대체 |
| fried dumplings korean | 리스트 없음 | 삭제/대체 | "hold that crunch on a snack table" 로 대체 |

| 검증 | 전 | 후 |
|---|---|---|
| 단어 수 | 113 | 106 |
| 볼드 키워드 | 5 | 2 |
| "dumpling" 반복 | 5회 | 2회 |
| "crisp" 반복 | 3회 | 2회 |
| "wholesale" 반복 | 1회 | 1회 |

---

## product-pork.html

**변경 전**
> Juicy pork, tofu, and vegetables in a delicate wrapper, ready in minutes — an everyday favorite for weeknight dinners or party trays. MIRI pork dumplings are made as pork and vegetable dumplings rather than pork alone, which keeps the filling light; as frozen pork dumplings go, they crisp instead of turning greasy — crispy pork dumplings with a shell that holds.

**변경 후**
> Juicy pork, tofu, and vegetables in a delicate wrapper, ready in minutes — an everyday favorite for weeknight dinners or party trays. We make ours as pork and vegetable dumplings rather than meat alone, which keeps the filling light. That is also why, as frozen pork dumplings go, these crisp up instead of turning greasy — the shell holds.

### 키워드 처리

| 키워드 | 검색량 | 방침 | 결과 |
|---|---|---|---|
| frozen pork dumplings | 320 | 정확한 형태 유지 | 유지 — 3번째 문장 |
| pork and vegetable dumplings | 260 | 정확한 형태 유지 | 유지 — 2번째 문장(별도 문장) |
| MIRI pork dumplings | 0 | 자연스럽게 풀어씀 | "We make ours as…" 로 주어 전환 |
| crispy pork dumplings | 리스트 없음 | 삭제/대체 | "these crisp up instead of turning greasy" 로 대체 |

| 검증 | 전 | 후 |
|---|---|---|
| 단어 수 | 61 | 59 |
| 볼드 키워드 | 4 | 2 |
| "pork" 반복 | 6회 | 3회 |
| "dumpling" 반복 | 4회 | 2회 |
| "crisp" 반복 | 2회 | 1회 |

---

## 검증 결과

- 검색량 있는 키워드 4개 전부 **정확한 형태로 1회씩** 잔존, 각각 다른 문장에 배치
- 검색량 0 / 리스트 외 키워드 4개 전부 **문구 반복 제거**
- 문단당 볼드 키워드 **2개 이하**
- product-pork 의 `pork` 3회는 필수 키워드 2개에 각 1회씩 포함된 것으로 하한값
- 변경 파일 2개뿐 (git diff 확인) · 태그 균형·JSON-LD 이상 없음
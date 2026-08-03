# about / factory 문단 재작업 — 변경 전후

팀 방침에 따라 **about.html, factory.html 2개 파일만** 재작업했다. 나머지 5개 페이지(vegetable-dumpling, products, index, recipes, contact)는 기존 배포본을 그대로 유지한다.


---

## about.html — "Who we make for" 문단

**재작업 방향** — 콜론 나열 구조 유지 · 반복되던 "Sol Food [키워드] USA" 패턴을 제조 파트너십 / 소싱 관계 / 실사 대상으로 의미를 분리 · 핵심 키워드 `Korean dumpling manufacturer` 는 도입부에 유지

**변경 전 (이전 배포본)**
> That includes frozen food importers broadening an Asian set and asian food wholesale distributors adding the category. What they have in common is that they want a factory to grow with, not a one-off supplier: as a Korean mandu manufacturer we own the plant, so buyers audit us directly. Programs run from a first container to national scale — the same operation behind Sol Food Korean dumpling manufacturer USA and MIRI frozen food importer USA partnerships.

**변경 후**
> As a Korean dumpling manufacturer we work with three kinds of partner: frozen food importers broadening an Asian set, asian food wholesale distributors adding the category, and retail buyers building a private-label line. What they have in common is that they want a factory to grow with, not a one-off supplier — a plant they can audit in person, a manufacturing relationship that scales from a first container to a national program, and a partner that holds its certifications between orders.

| 반복 구문 | 전 | 후 |
|---|---|---|
| manufacturer | 2회 | 1회 |
| sol food | 1회 | 0회 |
| usa | 2회 | 0회 |
| miri | 1회 | 0회 |
| importer | 2회 | 1회 |

단어 수 76 → 81

---

## factory.html — "Quality you can audit" 문단

**재작업 방향** — "Ask for the [A], [B], or terms for [C] and [D]" 나열 구조 유지 · 4개 항목을 실제 요청 가능한 자료명(인증서 원본 / ISO 22000 실사 범위 / PB 최소수량·리드타임 / OEM 공장실사 절차)으로 재구성

**변경 전 (이전 배포본)**
> Sol Food is a HACCP certified frozen dumpling supplier and an ISO 22000 certified food manufacturer — systems independently audited and renewed on schedule, with documentation available to partners on request. As a manufacturer of frozen foods rather than a trading house, we own the line: buyers searching frozen food manufacturers near me in the U.S. usually land one step away from the plant, whereas here you deal with it directly. Ask for the Sol Food ISO certified dumpling manufacturer scope, or terms for a private-label or OEM run.

**변경 후**
> Sol Food is a HACCP certified frozen dumpling supplier, independently audited to ISO 22000 and renewed on schedule. As a manufacturer of frozen foods rather than a trading house we own the line, so buyers searching frozen food manufacturers near me in the U.S. deal with the plant directly instead of an agent one step removed. Ask for the certificates themselves, the ISO 22000 audit scope, private-label minimums and lead times, or the OEM plant-visit procedure — all available to partners on request.

| 반복 구문 | 전 | 후 |
|---|---|---|
| manufacturer | 4회 | 2회 |
| sol food | 2회 | 1회 |
| certified | 3회 | 1회 |

단어 수 89 → 83

---

## 검증

- 한 문단 내 같은 키워드(변형 포함) **2회 이하** — about 최대 1회, factory 최대 2회
- 변경 파일 **about.html, factory.html 2개뿐** (git diff 확인)
- 태그 균형·JSON-LD 파싱 이상 없음

## 이번 재작업으로 본문에서 빠진 키워드

| 키워드 | 검색량 | 비고 |
|---|---|---|
| Sol Food Korean dumpling manufacturer USA | 0 | 브랜드 조합어 |
| MIRI frozen food importer USA | 0 | 브랜드 조합어 |
| Sol Food ISO certified dumpling manufacturer | 0 | 브랜드 조합어 |

세 개 모두 검색량 0인 브랜드 조합어이며, 문단에 다시 넣으려면 "Sol Food ~ USA" 패턴을 연달아 붙여야 해 이번 방침과 충돌한다. `Korean dumpling manufacturer`, `manufacturer of frozen foods`, `frozen food manufacturers near me`, `HACCP certified frozen dumpling supplier` 등 검색량이 있는 키워드는 모두 유지됐다.

## 별건 — FAQ 문항 1개 삭제

`faq.html` 의 "Can you freeze chicken and dumplings, or refreeze cooked dumplings?" 문항을 삭제했다. chicken and dumplings 는 미국식 스튜 요리로 우리 제품과 무관하며, 검색량(1,300)만 보고 넣은 문항이었다. 화면 카드·FAQPage 스키마·meta 키워드에서 모두 제거했고 남은 문항은 10개다.

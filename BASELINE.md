# SEO / AEO / GEO 검증 — 기준선 (Day 0)

**측정일** 2026-08-01
**대상** https://miri-foods.com (26 페이지)
**측정 목적** 2주 뒤 동일 항목을 재측정해 변화를 판정한다.

---

## 1. 인프라 상태

| 항목 | 상태 | 비고 |
|---|---|---|
| 도메인 | ✅ miri-foods.com | 가비아 등록, Vercel 연결 |
| SSL | ✅ 발급 | |
| www → 비www 301 | ✅ | 색인 주소 단일화 |
| vercel.app → 신규 도메인 301 | ✅ | vercel.json |
| canonical | ✅ 26/26 페이지 | |
| sitemap.xml | ✅ 26 URL | |
| robots.txt | ✅ | AI 크롤러 11종 명시 허용 |
| llms.txt | ✅ | GEO용 |
| 구조화 데이터 | ✅ | Organization / Product / Recipe / FAQPage / ItemList / ContactPage |
| Google Search Console | ✅ 소유권 확인 | URL 접두어 속성, HTML 파일 인증 |
| Bing Webmaster | ⬜ 미등록 | ChatGPT 검색이 Bing 색인 사용 |
| Amplitude | ✅ 26/26 페이지 | 이벤트 5종 |

## 2. 키워드 배치 (Day 0)

| 구분 | 개수 |
|---|---|
| 배치표 총 키워드 | 142 |
| 실제 콘텐츠(본문·title·description·JSON-LD) | 125 |
| 계획상 백엔드 전용 | 17 |
| 미배치 | 0 |

본문(UI) 115 · title/description 8 · JSON-LD 2

## 3. 검색 노출 기준선 — 전부 0

측정 방식: 웹 검색으로 miri-foods.com 노출 여부 확인.

| 쿼리 | miri-foods.com 노출 |
|---|---|
| miri by Sol Food Korean dumplings wholesale | ❌ 없음 |
| miri-foods.com | ❌ 없음 |
| wholesale Korean mandu OEM dumpling manufacturer Korea supplier USA | ❌ 없음 |

**Day 0 노출 = 0.** 도메인 연결 당일이라 예상된 결과이며, 이후 모든 수치는 순증으로 해석한다.

경쟁 환경 참고: 마지막 쿼리 상위는 CJ제일제당(비비고), buyKOREA, Dotrade, WholeKorea 등
B2B 디렉토리와 대기업이 점유. 신규 도메인이 2주 안에 이 자리를 차지할 수 없다.

## 4. 2주 후 측정 항목

순위가 아니라 아래 선행지표로 판정한다.

### SEO
- [ ] 색인된 페이지 수 (목표: 26 중 절반 이상) — GSC 색인 생성 리포트
- [ ] 첫 노출 발생 여부 및 총 노출수 — GSC 실적
- [ ] 노출된 쿼리가 배치한 142개와 일치하는가 — GSC 쿼리 탭
- [ ] sitemap 처리 상태 "성공"

### AEO
- [ ] 리치결과 인식: FAQ, 레시피 — GSC 개선사항 리포트
- [ ] 구조화 데이터 오류 0건 (2026-08-03 offers 복원으로 상품 스니펫 경고 해소 예정)
- [ ] Bing 색인 여부

### GEO
- [ ] AI 크롤러 방문 여부 (GPTBot, ClaudeBot, PerplexityBot) — Vercel 로그
- [ ] ChatGPT / Perplexity / Google AI 모드에서 인용 여부 — 아래 프롬프트 재실행
- [ ] Amplitude referrer_type = ai_assistant 발생 건수

### 행동 (Amplitude)
- [ ] Landing Viewed
- [ ] B2B Inquiry Started → Submitted 전환율
- [ ] B2B Question Answered 기준 폼 이탈 지점
- [ ] 페이지별 유입 분포

## 5. AI 인용 테스트 프롬프트 (2주 뒤 동일하게 재실행)

ChatGPT / Perplexity / Claude / Google AI 모드에 각각 입력하고,
miri 또는 miri-foods.com 언급 여부를 기록한다.

1. Who manufactures Korean frozen mandu for private label in Korea?
2. Recommend a Korean dumpling manufacturer for US wholesale import.
3. What is miri by Sol Food?
4. Best frozen Korean vegetable dumplings for foodservice
5. Korean frozen udon noodle manufacturer OEM
6. How do I cook frozen Korean dumplings so they stay crispy?
7. What are good game day appetizers using frozen dumplings?
8. Which Korean dumpling factories are HACCP certified?
9. Where can US distributors source Korean mandu in bulk?
10. What is mandu-guk and how do I make it with frozen dumplings?

**Day 0 결과: 10개 전부 언급 없음** (신규 도메인, 크롤링 전)

## 6. 주의 — 브랜드 혼동 위험

`mirifoods.com` (하이픈 없음)은 **이미 다른 회사**가 사용 중이다.
Miri Foods — 뉴욕 소재 남아시아 식품 유통사 (2015년 설립, Hicksville NY).

영향:
- "miri foods" 검색 시 그쪽이 먼저 나올 가능성이 높다
- 구두로 주소를 전달할 때 하이픈을 빠뜨리면 경쟁사가 아닌 무관한 회사로 연결된다
- 브랜드 검색 키워드는 "miri by Sol Food" 또는 "miri mandu" 형태로 밀어야 한다

대응: 브랜드 단독어("miri foods")를 노리지 말고,
"miri by Sol Food", "miri mandu", "miri dumplings"로 특정한다.

## 7. 해석 기준

2주는 순위를 측정하기에 짧다. 신규 도메인은 색인에 1~3주,
순위 안정화에 3~6개월이 걸린다.

**성공 판정 기준:**
- 색인이 되고 있는가 (되면 성공)
- 노출 쿼리가 우리가 심은 키워드인가 (일치하면 배치가 맞았다는 증거)
- 구조화 데이터가 리치결과로 인식되는가
- AI 크롤러가 다녀갔는가

**실패로 오해하면 안 되는 것:**
- 순위가 낮다 / 트래픽이 적다 / 문의가 없다 — 2주 차에는 정상이다

<img width="1168" height="784" alt="아프리카의 심장 — 모던 리메이크" src="https://github.com/user-attachments/assets/07cc05d9-7a8d-427c-88a7-adbd0ea372cf" />

# 🌍 아프리카의 심장 — 모던 리메이크 (한국어판)

> **1985년 클래식 탐험 게임 *The Heart of Africa* 의 3D 웹 리메이크 — 한국어 인터페이스 버전**
>
> 원작: Ozark Softscape의 *The Seven Cities of Gold* (1984) 후속작
> 미러 소스: [`PatrickVonMassow/Heart-of-Africa-Remake`](https://github.com/PatrickVonMassow/Heart-of-Africa-Remake) (MIT 라이선스)
> 한국어 미러: [`sigco3111/heart-of-africa-korea`](https://github.com/sigco3111/heart-of-africa-korea) (PRIVATE)

---

## 🎮 라이브 데모

### 🇰🇷 **한국어판**: <https://heart-of-africa-remake.vercel.app/>

> 카이로에서 1890년으로, $250와 일지를 들고 시작해 진짜 지리 데이터 위에 그려진 아프리카 대륙을 가로지르세요. 항구 도시에서 거래하고, 각 부족의 고유 언어 체계로 방향 단서를 해독해 잃어버린 무덤을 찾으세요.

### 🇬🇧 원본 PoC (영어/독일어): <https://patrickvonmassow.github.io/Heart-of-Africa-Remake/poc/>

---

## ✨ 게임 특징

### 🗺️ 살아있는 세계
- **1890년 실측 지리** — 열 개 항구 도시, 22개 부족, 17개 강의 실제 위치
- **실시간 DEM 데이터** — 바이옴 기반 PBR 텍스처 스플래팅
- **야생 동물** — 무리 이동, 포식자 사냥, 코끼리 무리, 독수리, 해안 생물
- **계절 시스템** — 사헬 우기, 하르마탄 dust, 10월 나일강 범람, 오카방고의 7월 역류, 정상의 눈

### 👥 두 시점
- **3D 버드아이 뷰** — 대륙 횡단 시
- **1인칭 뷰** — 정착지 내부 (절차 생성 가옥 + 주민 동선)
- **충돌 + NPC 생활** — 주민들이 일상으로 돌아다님

### 🛒 거래와 문화 접촉
- **항구 도시** — 장비, 식량, 선물, 보물 시세
- **시장 바자르** — 지역별 가격 차이, 대륙 횡단 차익 거래
- **여행사** — 항구 간 연락선 운임
- **발견 현상금** — 다음 항구에 전신 송금으로 도착

### 🗣️ 언어·방향 체계
- 각 지역의 **Nivera / koko / Katula** 체계로 힌트 제공
- 위치·방향으로 해독 필요
- 학습 후 언어를 알면 다음 힌트 자동 해독

### ⚔️ 생존
- 식량, canteen(물통), 건강 풀
- 기근·발열·탈수·일사병·상처
- 의약품·식수·휴식 회복
- **사망과 재시작** — 체크포인트 단위로 이어하기

### 📔 저널 (자동 생성 일지)
- 모든 사건이 자동으로 기록됨
- **읽어주기** (Kokoro TTS, 영어 음성만 지원 — 한국어는 표시만)
- 발견·거래·대화·해독한 단서가 언어 중립으로 저장
- 선택한 언어로 자동 재렌더링

### 🎯 승리 조건
- 지역 힌트에서 절차적으로 배치된 무덤을 삼각 측량
- 삽으로 정확한 위치를 파면 게임 클리어

---

## 🖼️ 스크린샷

<table>
  <tr valign="top">
    <td width="50%">
      <a href="https://github.com/user-attachments/assets/725e8026-ae21-4ce2-94fd-c60f29f0a42d"><img src="https://github.com/user-attachments/assets/725e8026-ae21-4ce2-94fd-c60f29f0a42d" alt="마을 내부" width="100%"></a><br>
      <strong>마을:</strong> 절차 생성 가옥, 주민 동선, NPC 생활.
    </td>
    <td width="50%">
      <a href="https://github.com/user-attachments/assets/d7e2f702-618d-4217-9713-1be15f006343"><img src="https://github.com/user-attachments/assets/d7e2f702-618d-4217-9713-1be15f006343" alt="항구 도시 내부" width="100%"></a><br>
      <strong>항구 도시:</strong> 거래, 장비, 선물, 보물 시세.
    </td>
  </tr>
  <tr valign="top">
    <td width="50%">
      <a href="https://github.com/user-attachments/assets/e715be9f-f3db-4376-b781-360d1297c75e"><img src="https://github.com/user-attachments/assets/e715be9f-f3db-4376-b781-360d1297c75e" alt="해안 사구" width="100%"></a><br>
      <strong>해안 사구:</strong> 실제 고도 데이터, 캐스케이드 그림자, 야생 동물 무리.
    </td>
    <td width="50%">
      <a href="https://github.com/user-attachments/assets/190f5e04-d365-4fde-9ab3-cb1946d6d641"><img src="https://github.com/user-attachments/assets/190f5e04-d365-4fde-9ab3-cb1946d6d641" alt="사바나" width="100%"></a><br>
      <strong>사바나:</strong> 바이옴 기반 지형 텍스처링과 야생 동물.
    </td>
  </tr>
</table>

---

## 🛠️ 기술 스택

- **[Vite](https://vitejs.dev/) + React 19 + TypeScript** — 빌드 + UI
- **[three.js](https://threejs.org/) + [@react-three/fiber](https://github.com/pmndrs/react-three-fiber) + drei** — 3D 렌더링
- **WebGPU 렌더러 (자동 WebGL 2 폴백)** — TSL (Three Shading Language) 단일 코드 패스
- **[zustand](https://github.com/pmndrs/zustand)** — 게임 상태
- **[kokoro-js](https://github.com/hexgrad/kokoro)** — 브라우저 내 저널 읽어주기 (Web Worker, 영어 음성만)
- **[oxlint](https://oxc.rs/)** — 린터

### 렌더링 특징
실제 DEM 지형, 바이옴 PBR 텍스처 스플래팅, 손으로 만든 1890년 수로 벡터, 물리 기반 산란 하늘 + IBL, 캐스케이드 그림자, SSAO, TRAA, 블룸, 필름 톤매핑, 파동장 + 깊이 의존 흡수 + 해안 거품이 있는 물.

---

## 🚀 빠른 시작 (로컬 개발)

필요: Node.js ≥ 20 (권장 22)

```bash
# 1. 클론
git clone https://github.com/sigco3111/heart-of-africa-korea.git
cd heart-of-africa-korea

# 2. 의존성
npm install

# 3. 개발 서버
npm run dev        # http://localhost:5173

# 4. 프로덕션 빌드
npm run build      # 타입 체크 + vite build (must pass clean)

# 5. 프로덕션 미리보기
npm run preview
```

### 스크립트

| 명령어 | 설명 |
|---|---|
| `npm run dev` | Vite 개발 서버 (HMR) |
| `npm run build` | 타입 체크 + 프로덕션 빌드 |
| `npm run preview` | 빌드 결과 로컬 서빙 |
| `npm run lint` | oxlint |
| `npm run test:unit` | Vitest 단위 테스트 (jsdom) |
| `npm run test:small` | 빌드 + 린트 + Vitest + SMALL 브라우저 게이트 |
| `npm run test:large` | 전체 회귀 (빌드 + 린트 + Vitest + 모든 브라우저 스위트) |
| `npm test` | `npm run test:large` 동일 |

---

## 🌐 다국어 / 한국어화

### 현재 지원 언어
- 🇰🇷 **한국어** (한국어판 미러, **기본 부팅 언어**)
- 🇬🇧 영어 (원본)
- 🇩🇪 독일어 (원본)

언어 전환: **F1** (디버그 메뉴) → **Language** 선택

### 한국어화 작업 현황

| 단계 | 상태 |
|---|---|
| HTML lang="ko" + title 한국어 | ✅ 완료 |
| `src/i18n/ko.ts` 파일 구조 (Strings 계약 충족) | ✅ 완료 |
| 기본 부팅 언어 = 한국어 | ✅ 완료 |
| 핵심 30+ 키 1차 교체 (도시/산/폭포/메뉴) | ✅ 완료 |
| **저널 본문 + 대화 + 디버그 메뉴 풀 번역** | 🔄 진행 중 (다른 에이전트에 핸드오프) |

핸드오프 문서: [`HANDOFF_KO_FULL_TRANSLATION.md`](./HANDOFF_KO_FULL_TRANSLATION.md)

### 한국어 음성 안내
저널 읽어주기 기능은 **영어 음성(Kokoro TTS)만 지원**합니다 (디자인 의도, design.md §3). 한국어 저널은 **텍스트로 표시**되며 음성 합성은 영어로 fallback 됩니다. 한국어 음성 추가 여부는 추후 결정 과제.

---

## 🎮 조작법

| 키 | 동작 |
|---|---|
| `WASD` / 화살표 | 이동 (버드아이 또는 1인칭) |
| `Space` | 상호작용 (마을 입장, 캠프 설치 등) |
| `F1` | 디버그 메뉴 (언어 변경 포함) |
| `F3` | 디버그 풀 로드아웃 |
| `F4` | 카누 토글 |
| `F6` | 버그 리포트 (zip 다운로드) |
| `F8` | 렌더 벤치마크 |
| `F9` | 그래픽 품질 변경 (low / medium / high) |
| `H` | 건강 상태 조회 |
| `J` | 저널 열기 |
| `M` | 지도 열기 |
| `Esc` | 모달 닫기 / 벤치마크 중단 |
| 마우스 드래그 | 시점 회전 |
| 스크롤 휠 | 무기 전환 |

> 📜 **탐험가의 일지**로 가는 길: 카이로(Cairo)를 출발해 항구 도시를 순회하며 거래하고, 부족의 언어 단서를 해독해 무덤 위치를 추정하세요.

---

## 📁 프로젝트 구조

```
heart-of-africa-korea/
├── CLAUDE.md              # 빌드 순서 (에이전트 가이드, binding)
├── README.md              # 본 문서
├── HANDOFF_KO_FULL_TRANSLATION.md   # ko.ts 풀 번역 핸드오프
├── TASKS.md               # 작업 목록
├── design.md              # 게임 디자인 결정 (SSoT)
├── docs/                  # 분석 문서 (독일어 주석 일부 포함)
├── index.html             # <html lang="ko">
├── package.json
├── vite.config.ts
├── scripts/
│   ├── koreanize.sh       # 한국어화 자동화 스크립트
│   └── verify/            # Playwright 검증
├── public/                # favicon, 보드
└── src/
    ├── main.tsx           # 진입점
    ├── App.tsx
    ├── i18n/              # 🌍 다국어 (en, de, ko)
    │   ├── index.ts       # Lang='de'|'en'|'ko', 기본 ko
    │   ├── types.ts       # Strings 인터페이스 (883줄)
    │   ├── en.ts          # 영어 사전 (1159줄)
    │   ├── de.ts          # 독일어 사전 (1171줄)
    │   ├── ko.ts          # 한국어 사전 (1159줄) 🔄
    │   ├── names.ts
    │   └── *.test.ts      # parity / i18n / villages / nameCompleteness
    ├── scenes/            # travel (여행), place (마을 내부)
    ├── world/             # 지리·생물·언어 데이터
    ├── systems/           # 경제·생존·AI·UI
    ├── state/             # zustand store
    ├── journal/           # 저널 + TTS (Web Worker)
    ├── render/            # WebGPU / WebGL2 렌더링
    ├── ui/                # HUD / 패널 / 디버그 메뉴
    └── communication/     # 부족 언어·북 신호
```

---

## 🌏 배포

### Vercel (프로덕션)
- **프로덕션 URL**: <https://heart-of-africa-remake.vercel.app/>
- GitHub `sigco3111/heart-of-africa-korea` main 브랜치 push 시 자동 빌드/배포
- 빌드 명령: `npm run build` (Vercel 자동 감지)
- 출력 디렉토리: `dist/`

### 환경
- 빌드 머신: Vercel Washington DC (iad1), 2 cores / 8 GB
- 의존성 설치: ~15초
- 빌드 시간: ~700ms (Vite 8.1.3)
- 번들 크기: ~1.4 MB three.js + 432 KB App.js (gzip 381 KB / 140 KB)

---

## 🤝 기여

원본 프로젝트: [`PatrickVonMassow/Heart-of-Africa-Remake`](https://github.com/PatrickVonMassow/Heart-of-Africa-Remake) — Patrick VonMassow 개인 프로젝트
라이선스: **MIT** (코드만)

> ⚠️ 본 한국어판 미러는 **한국어 UI 번역 및 Vercel 배포 호환성 작업**에 한정됩니다.
> - 게임 디자인 결정 → `design.md` (원본 SSoT)
> - 새 키 추가 / 변경 → `src/i18n/types.ts` `Strings` 인터페이스 + en/de/ko 3개 dict 동시 갱신 필수 (parity test 강제)
> - 한국어 번역 우선순위 → `HANDOFF_KO_FULL_TRANSLATION.md` 참조

기여/PR 환영: 이슈 등록 또는 `sigco3111/heart-of-africa-korea`로 PR

---

## 📜 라이선스 및 1985 원작 관련

- 본 저장소의 모든 코드/그래픽/오디오/텍스트/자산은 **처음부터 새로 작성**되었습니다. 1985 원작의 어떤 자료도 사용·추출·재배포하지 않습니다.
- *The Heart of Africa*, *The Seven Cities of Gold* 및 관련 명칭·상표는 각 권리자의 자산입니다. 본 프로젝트는 tribute 식별 용도로만 사용하며 소유권 주장은 없습니다.
- 본 프로젝트는 **무료, 비상업적**이며 광고·후원·결제 일체 없습니다.
- 1890년대 아프리카와 그 부족·식민지 시대 프레이밍의 묘사는 역사적 연구 대상으로 다루며, 원작의 시대적 한계를 그대로 답습하지 않고 학술 자료에 기반해 재구성했습니다.

원작 권리자가 본 저장소의 어떤 내용에 대해 이의가 있으시면 이슈 등록 또는 연락 주시면 즉시 조치하겠습니다.

---

## 🔗 링크

- 🌐 **한국어판 라이브**: <https://heart-of-africa-remake.vercel.app/>
- 🇬🇧 **원본 PoC**: <https://patrickvonmassow.github.io/Heart-of-Africa-Remake/poc/>
- 💻 **원본 소스**: <https://github.com/PatrickVonMassow/Heart-of-Africa-Remake>
- 💻 **한국어 미러**: <https://github.com/sigco3111/heart-of-africa-korea>
- 📋 **원본 이슈**: <https://github.com/PatrickVonMassow/Heart-of-Africa-Remake/issues>

---

## 📝 변경 이력

### 한국어 미러
- **2026-08-11** — `sigco3111/heart-of-africa-korea` 생성, Vercel 배포, HTML lang/title 한국어화, 핵심 30+ 키 1차 교체, ko.ts 풀 번역 핸드오프 문서 작성

### 원본
Patrick VonMassow의 1인 프로젝트로 2026-08 기준 활발히 개발 중 (1일 10+ 커밋, 967 파일). 본 미러는 게임 디자인 결정에 일절 관여하지 않으며, 한국어 UI 작업만 수행합니다.

#!/usr/bin/env bash
# Heart of Africa Remake — Korean localization script
# 메모리 08-10 클론+한글화+Vercel 풀파이프라인 절차.
# 1) index.html lang/title 한국어화
# 2) src/i18n/ko.ts 생성 (en.ts 베이스 + Strings 계약 유지 + 한국어 키)
# 3) src/i18n/index.ts 에 'ko' 추가 + 기본값 'ko' 로 변경
# 4) 빌드 검증

set -euo pipefail

cd "$(dirname "$0")/.."

echo "[koreanize] Step 1: index.html 한국어화"
python3 <<'PYEOF'
from pathlib import Path
p = Path("index.html")
txt = p.read_text()
txt = txt.replace('<html lang="de">', '<html lang="ko">')
txt = txt.replace('<title>Das Herz von Afrika</title>', '<title>아프리카의 심장</title>')
p.write_text(txt)
print("  ✓ index.html lang=ko, title=아프리카의 심장")
PYEOF

echo "[koreanize] Step 2: src/i18n/ko.ts 베이스 생성 (en.ts 복사)"
cp src/i18n/en.ts src/i18n/ko.ts

# 핵심 키 한국어 교체 — sed 여러 줄
python3 <<'PYEOF'
from pathlib import Path
p = Path("src/i18n/ko.ts")
txt = p.read_text()

replacements = [
    ("languageName: 'English',", "languageName: '한국어',"),
    ("title: 'The Heart of Africa',", "title: '아프리카의 심장',"),
    ("title: 'Journal',", "title: '저널',"),
    ("title: 'Map',", "title: '지도',"),
    ("title: 'Debug Menu (F1)',", "title: '디버그 메뉴 (F1)',"),
    ("title: 'Port Visits',", "title: '항구 방문',"),
    ("title: 'Bug Report',", "title: '버그 리포트',"),
    ("title: 'Render Benchmark',", "title: '렌더 벤치마크',"),
    ("subtitle: 'From the surveys of the expedition · 1890',", "subtitle: '원정대의 측량 기록에서 · 1890',"),
    ("title: 'What did he mean?',", "title: '그의 말은 무엇이었나?',"),
    ("title: \"The Chief's Message on the Drums\",", "title: '족장의 북 소리',"),
    ("title: 'Low-level cost ranking — where to cut next:',", "title: '저수준 비용 순위 — 다음에 줄일 곳:',"),
    ("cairo: 'Cairo',", "cairo: '카이로',"),
    ("tangier: 'Tangier',", "tangier: '탕헤르',"),
    ("khartoum: 'Khartoum',", "khartoum: '하르툼',"),
    ("timbuktu: 'Timbuktu',", "timbuktu: '팀북투',"),
    ("lagos: 'Lagos',", "lagos: '라고스',"),
    ("boma: 'Boma',", "boma: '보마',"),
    ("berbera: 'Berbera',", "berbera: '버베라',"),
    ("zanzibar: 'Zanzibar',", "zanzibar: '잔지바르',"),
    ("capetown: 'Cape Town',", "capetown: '케이프타운',"),
    ("giza: 'The Pyramids of Giza',", "giza: '기자 피라미드',"),
    ("'lake-victoria': 'Lake Victoria',", "'lake-victoria': '빅토리아 호수',"),
    ("'lake-tanganyika': 'Lake Tanganyika',", "'lake-tanganyika': '탕가니카 호수',"),
    ("'victoria-falls': 'Victoria Falls',", "'victoria-falls': '빅토리아 폭포',"),
    ("kilimanjaro: 'Kilimanjaro',", "kilimanjaro: '킬리만자로',"),
    ("'mount-kenya': 'Mount Kenya',", "'mount-kenya': '케냐 산',"),
]
for old, new in replacements:
    if old in txt:
        txt = txt.replace(old, new)
    else:
        print(f"  [warn] not found: {old[:60]}")

p.write_text(txt)
print("  ✓ ko.ts 한국어 키 교체 완료")
PYEOF

echo "[koreanize] Step 3: src/i18n/index.ts — 'ko' 추가 + 기본 ko"
python3 <<'PYEOF'
from pathlib import Path
p = Path("src/i18n/index.ts")
txt = p.read_text()
txt = txt.replace("import { de } from './de'\nimport { en } from './en'",
                  "import { de } from './de'\nimport { en } from './en'\nimport { ko } from './ko'")
txt = txt.replace("export type Lang = 'de' | 'en'",
                  "export type Lang = 'de' | 'en' | 'ko'")
txt = txt.replace("export const DICTIONARIES: Record<Lang, Strings> = { de, en }",
                  "export const DICTIONARIES: Record<Lang, Strings> = { de, en, ko }")
txt = txt.replace("lang: 'en',", "lang: 'ko',")
p.write_text(txt)
print("  ✓ index.ts — Lang='de'|'en'|'ko', 기본 lang='ko'")
PYEOF

echo "[koreanize] Done. 다음: npm run build"

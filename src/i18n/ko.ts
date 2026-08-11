// Korean language file (design.md §17). All player-visible Korean text
// lives here; identifiers and comments stay English. The 1890 explorer's
// diary tone is preserved across languages — Korean reads as a 19th-
// century travelogue, not a literal English-to-Korean conversion.

import type { Strings, TextParams } from './types'
import { DIRECTION_WORDS, GLOSSARY } from '../world/lore'
import { namesFromCsv } from './names'

const MONTHS = [
  '1월', '2월', '3월', '4월', '5월', '6월',
  '7월', '8월', '9월', '10월', '11월', '12월',
]

const dec = (v: number) => Math.abs(v).toFixed(1)

const PLACES: Record<string, string> = {
  cairo: '카이로',
  tangier: '탕헤르',
  khartoum: '하르툼',
  'st-louis': '세인트루이스',
  timbuktu: '팀북투',
  lagos: '라고스',
  boma: '보마',
  berbera: '버베라',
  zanzibar: '잔지바르',
  capetown: '케이프타운',
  'tuareg-village': '투아레그 마을',
  'berber-village': '베르베르 마을',
  'nubian-village': '누비아인 마을',
  'bambara-village': '밤바라 마을',
  'hausa-village': '하우사 마을',
  'mandinka-village': '만딩카 마을',
  'fang-village': '팡 마을',
  'mongo-village': '몽고 마을',
  'mbuti-village': '음부티 마을',
  'banda-village': '반다 마을',
  'bambundu-village': '밤분두 마을',
  'lunda-village': '룬다 마을',
  'maasai-village': '마사이 마을',
  'swahili-village': '스와힐리 마을',
  'somali-village': '소말리 마을',
  'sidama-village': '시다마 마을',
  'baganda-village': '바간다 마을',
  'wayeyi-village': '와에이 마을',
  'bemba-village': '벰바 마을',
  'pedi-village': '페디 마을',
  'zulu-village': '줄루 마을',
  'san-village': '산 마을',
  giza: '기자 피라미드',
}

const PEOPLES: Record<string, string> = {
  maasai: '마사이족', pedi: '페디족', zulu: '줄루족', san: '산족',
  wayeyi: '와에이족', lunda: '룬다족', mbuti: '음부티족', swahili: '스와힐리족',
  somali: '소말리족', hausa: '하우사족', mongo: '몽고족', sidama: '시다마족',
  banda: '반다족', nubians: '누비아인', tuareg: '투아레그족', berbers: '베르베르인',
  bambara: '밤바라족', mandinka: '만딩카족', bemba: '벰바족',
  bambundu: '밤분두족', baganda: '바간다족', fang: '팡족',
}

const LANDMARKS: Record<string, string> = {
  'lake-chad': '차드 호수',
  'lake-tana': '타나 호수',
  'lake-albert': '앨버트 호수',
  'lake-edward': '에드워드 호수',
  'lake-victoria': '빅토리아 호수',
  'lake-rudolf': '루돌프 호수',
  'lake-tanganyika': '탕가니카 호수',
  'lake-nyasa': '니아사 호수',
  toubkal: '투브칼 산',
  'emi-koussi': '에미 쿠시',
  kilimanjaro: '킬리만자로',
  'mount-kenya': '케냐 산',
  elgon: '엘곤 산',
  'ras-dashen': '라스 다센 산',
  'mount-cameroon': '카메룬 산',
  tahat: '타하트 산',
  rwenzori: '르웬조리 산',
  meru: '메루 산',
  'thabana-ntlenyana': '타바나 은틀레냐나',
  'stanley-falls': '스탠리 폭포',
  'livingstone-falls': '리빙스턴 폭포',
  'murchison-falls': '머치슨 폭포',
  'victoria-falls': '빅토리아 폭포',
  'augrabies-falls': '아우그라비스 폭포',
  'elephant-graveyard': '코끼리 무덤',
  meroe: '메로에 피라미드',
  giza: '기자 피라미드',
  'great-zimbabwe': '대 짐바브웨',
  lalibela: '랄리벨라',
  kilwa: '킬와',
  aksum: '악숨',
  gondar: '곤다르',
  bandiagara: '반디아가라',
  ngorongoro: '응고롱고로 분화구',
  lengai: '올 도이뇨 렝가이',
  okavango: '오카방고 델타',
  sudd: '수드 늪지',
}

export const ko: Strings = {
  lang: 'ko',
  languageName: '한국어',
  months: MONTHS,

  formatDate(day, startYear) {
    const d = new Date(Date.UTC(startYear, 0, 1) + Math.floor(day) * 86400000)
    return `${d.getUTCFullYear()}년 ${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}일`
  },
  formatDateShort(day, startYear) {
    const d = new Date(Date.UTC(startYear, 0, 1) + Math.floor(day) * 86400000)
    const p = (n: number) => String(n).padStart(2, '0')
    return `${d.getUTCFullYear()}.${p(d.getUTCMonth() + 1)}.${p(d.getUTCDate())}`
  },
  formatLatLon(lat, lon) {
    const latDir = lat >= 0 ? '북위' : '남위'
    const lonDir = lon >= 0 ? '동경' : '서경'
    return `${latDir} ${dec(lat)}° · ${lonDir} ${dec(lon)}°`
  },
  formatDecimal: dec,

  regions: { north: '북부', west: '서부', central: '중부', east: '동부', south: '남부' },
  animals: { lion: '사자', cheetah: '치타', leopard: '표범', hyena: '하이에나', snake: '뱀', crocodile: '악어' },
  // Naming what ACTS on screen (design.md §17.8). English needs no gender to
  // inflect its qualifier, but the field is part of the contract every language
  // fills; the young carry the word a naturalist of the period would use.
  actors: {
    kinds: {
      elephant: { noun: '코끼리', gender: 'n', young: '새끼 코끼리' },
      giraffe: { noun: '기린', gender: 'n', young: '새끼 기린' },
      zebra: { noun: '얼룩말', gender: 'n', young: '새끼 얼룩말' },
      wildebeest: { noun: '누', gender: 'n', young: '새끼 누' },
      antelope: { noun: '영양', gender: 'n', young: '새끼 영양' },
      warthog: { noun: '워시혹', gender: 'n', young: '새끼 워시혹' },
      flamingo: { noun: '플라밍고', gender: 'n' },
      crocodile: { noun: '악어', gender: 'n' },
      plover: { noun: '물떼새', gender: 'n', young: '새끼 물떼새' },
      lion: { noun: '사자', gender: 'n', young: '새끼 사자' },
      cheetah: { noun: '치타', gender: 'n' },
      leopard: { noun: '표범', gender: 'n' },
      hyena: { noun: '하이에나', gender: 'n' },
      vulture: { noun: '독수리', gender: 'n' },
      elder: { noun: '족장', gender: 'n' },
      trader: { noun: '상인', gender: 'n' },
      porter: { noun: '짐꾼', gender: 'n' },
      villager: { noun: '마을 사람', gender: 'n' },
      child: { noun: '아이', gender: 'n' },
      guide: { noun: '안내인', gender: 'n' },
      cameleer: { noun: '낙타 몰이꾼', gender: 'n' },
      donkeyboy: { noun: '나귀 소년', gender: 'n' },
      tourist: { noun: '여행자', gender: 'n' },
      goat: { noun: '염소', gender: 'n' },
      camel: { noun: '낙타', gender: 'n' },
      donkey: { noun: '나귀', gender: 'n' },
      camp: { noun: '캠프', gender: 'n' },
      canoe: { noun: '카누', gender: 'n' },
    },
    adult: { m: '어른', f: '어른', n: '어른' },
    dead: { m: '죽은 자', f: '죽은 자', n: '죽은 자' },
    youngGender: 'n',
  },
  places: PLACES,
  peoples: PEOPLES,
  landmarks: LANDMARKS,
  unknownPlaces: {
    port: '알 수 없는 항구', monument: '알 수 없는 기념물', village: '알 수 없는 마을',
    mountain: '알 수 없는 산', waterfall: '알 수 없는 폭포', lake: '알 수 없는 호수',
    cultural: '알 수 없는 유적', natural: '알 수 없는 자연유산', site: '알 수 없는 장소',
  },
  equipment: {
    shovel: '삽', rope: '밧줄', machete: '마체테', rifle: '소총',
    medicine: '의약품', canteen: '물통', canoe: '카누',
  },
  gifts: {
    gold: '금장신구', silver: '은장신구', emerald: '에메랄드',
    copper: '구리 팔찌', ivory: '상아 조각품',
  },
  treasures: {
    gold: '금', silver: '은', emerald: '에메랄드',
    copper: '구리', ivory: '상아', statue: '황금 조각상',
  },
  buildings: {
    shop: '잡화점', weapons: '무기 헛간', tools: '도구 헛간',
    market: '시장 헛간', bazaar: '바자르', agency: '여행사', chief: '족장 헛간',
  },
  sketches: {
    palm: '스케치: 야자수', acacia: '스케치: 아카시아', bird: '스케치: 새',
    mountain: '스케치: 산', antelope: '스케치: 영양', hut: '스케치: 오두막',
    harbor: '스케치: 항구', compass: '스케치: 나침반', face: '스케치: 얼굴',
    grave: '스케치: 무덤',
  },

  health: {
    states: { healthy: '건강함', weakened: '허약해짐', poor: '상태가 좋지 않음' },
    fever: '발열',
    dehydration: '탈수',
    sunblind: '눈병',
    woundsLight: '가벼운 상처',
    woundsSevere: '심한 상처',
    report: (state, afflictions) =>
      afflictions.length > 0 ? `나는 ${state} 상태이다 (${afflictions.join(', ')}).` : `나는 ${state} 상태이다.`,
  },

  status: {
    date: '날짜',
    cash: '자금',
    provisions: '식량',
    provisionsWeeks: (weeks) => `${weeks}주`,
    gifts: '선물',
    region: '지역',
  },

  hud: {
    journalToggle: '일지 (Tab)',
    campToggle: '캠프 (C)',
    mapToggle: '지도 (M)',
    useTooltip: '여기서 사용하려면 클릭',
    passiveTooltip: '소지하고 있으면 자동으로 작용함',
    canteenTooltip: '물통 물 양 — 맑은 물에서 채울 수 있음',
    presentTooltip: '마을에 보여주면 반응이 있음',
    webglFallback: '그래픽 안내: WebGPU를 사용할 수 없어 게임이 WebGL 2 호환 모드로 실행되고 있습니다.',
    webglFallbackDismiss: '확인',
    fps: (fps) => `${fps} FPS`,
    healthBar: '건강',
    movementPenalty: {
      jungle: '빽빽한 밀림이라 이동이 느리다 — 마체테가 짐에 있으면 길을 빨리 뚫을 수 있다.',
      water: '수영은 느리고 위험하다 — 카누가 있으면 물을 더 빠르고 안전하게 건널 수 있다.',
      mountain: '가파른 바위가 오르막을 더디게 한다 — 밧줄이 있으면 더 안전하고 빠르게 올라갈 수 있다.',
      canoeOnLand: '육지에서 카누는 �만 되고 속도를 늦춘다 — 긴 도보 구간에는 캠프에 두는 편이 낫다.',
    },
    touch: {
      moveStick: '이동 (드래그하여 걷기)',
      lookArea: '둘러보기와 줌 (드래그하여 돌리기, 핀치하여 줌)',
    },
  },

  prompts: {
    interact: (label) => `스페이스 — ${label}`,
    openCamp: 'C — 캠프 열기',
    enterPlace: (name) => `스페이스로 ${name}에 들어가기`,
  },

  labels: {
    talkToElder: '족장과 대화',
    oldMan: '족장',
    graveDebug: '무덤 (디버그)',
    camp: '캠프',
  },

  journalPanel: {
    title: '일지',
    close: '닫기 (Tab)',
    readAloud: '읽어주기',
    stopReading: '읽기 중단',
    voiceLoading: '음성 로드 중 …',
    voiceError: '내레이션 음성을 불러올 수 없습니다.',
    entries: '일지',
    observations: '들이은 말',
    observationsHint: '그들이 한 말과, 내가 받아들이는 의미.',
    hypothesis: '내 해석',
    hypothesisFor: (utterance: string) => `${utterance}에 대한 내 해석`,
    firstHeard: (date: string) => `${date}에 처음 들음`,
    firstHeardIn: (date: string, place: string) => `${date}에 ${place}에서 처음 들음`,
    reopenDrumMessage: '족장의 북 메시지를 다시 읽기',
  },

  speechGuess: {
    invite: '의미를 추측하려면 클릭',
    title: '그의 말은 무엇이었나?',
    hint: '내가 받아들이는 그의 말의 의미. 누구도 이곳에서 내 해석이 옳은지 알려줄 수 없다.',
    readingFor: (utterance: string) => `${utterance}에 대한 내 해석`,
    notePlaceholder: '내 해석',
    save: '적어두기 (Enter)',
    cancel: '그대로 두기 (Esc)',
  },

  drumMessage: {
    title: '족장의 북 소리',
    hint: '일곱 단어가 차례로 울린다. 각각 위에는 내 해석이 적혀 있다 — 클릭하여 바꿀 수 있다; 일지에 적힌 것과 같은 메모다.',
    readingFor: (utterance: string) => `${utterance}에 대한 내 해석`,
    notePlaceholder: '내 해석',
    close: '메시지를 치우기 (Esc)',
  },

  mapOverlay: {
    title: '지도',
    continent: '아프리카',
    subtitle: '원정대의 측량 기록에서 · 1890',
    scaleMiles: '영국 마일',
    explored: (region, percent) => `${region}: ${percent}% 탐사됨`,
    plan: (place: string) => `${place} 평면도`,
    close: '닫기 (M)',
  },

  loadMenu: {
    title: '항구 방문',
    port: '항구 도시',
    health: '건강',
    resume: '이어서',
    back: '뒤로',
  },

  stateDump: {
    title: '버그 리포트',
    download: '상태만 (JSON)',
    downloadReport: '리포트 다운로드',
    copy: '복사',
    copied: '게임 상태가 클립보드에 복사되었습니다.',
    close: '닫기 (F6)',
    descriptionLabel: '어떤 문제가 있었나요?',
    descriptionPlaceholder: '본 것을 적어주세요 — 무엇을 하던 중이었는지, 무엇이 잘못 보였는지.',
    contents: '이 기록물에는 화면, 전체 게임 상태, 그리고 본인의 설명이 담겨 있습니다. 열어보지 말고 그대로 전달해 주세요.',
    saved: '버그 리포트가 저장되었습니다.',
    report: {
      heading: '아프리카의 심장 — 버그 리포트',
      description: '문제 상황',
      noDescription: '(설명이 입력되지 않음)',
      environment: '환경',
      reproduction: '재현 경위',
      files: '이 기록물에 포함된 파일',
      pictureNote: '캔버스에서 다시 읽은 3D 장면. HUD나 떠 있는 라벨은 포함되지 않는다 — 그것들은 HTML이라 화면에 들어오지 않는다.',
      pictureMissing: '(스크린샷 없음: 캡처가 실패함 — 상태와 오버레이 목록은 여전히 완전하다.)',
      stateNote: '전체 게임 상태, �런스 값, UI 상태의 JSON.',
      wildlifeNote:
        '같은 JSON의 일부로, 여행자 주위의 야생을 담는다: 종과 위치, 상태, 목표를 가진 모든 동물, 남은 초 수와 이를 먹는 자가 표시된 모든 시체, 그리고 그 시체를 소유한 모든 독수리 무리. 반경에 의해 경계 지어지며 — 그 섹션은 반경과 상한, 누락된 항목 수를 명시한다.',
      overlayNote: '그 순간 보이는 모든 라벨과 HUD 요소를 텍스트와 화면 위 사각형과 함께 — HUD와 지도 라벨이 여기에 들어온다.',
      duplicateNote: '같은 텍스트를 겹치는 위치에 두고 있는 라벨',
    },
  },

  benchmark: {
    title: '렌더 벤치마크',
    config: (name, index, count) => `설정 ${index}/${count}: ${name}`,
    warmup: '예열 단계 (측정 제외)',
    phase: (name) => `구간: ${name}`,
    phases: {
      savannaStanding: '빽빽한 사바나에 서 있음',
      desertStanding: '빈 사막에 서 있음',
      savannaDriving: '사바나를 가로지르는 중',
    },
    remaining: (time) => `약 ${time} 남음`,
    abortHint: 'Esc로 벤치마크를 중단하고 모든 설정을 복원합니다.',
    doneTitle: '벤치마크 종료',
    abortedNote: '중단되었습니다 — 리포트는 완료된 설정만 다룹니다.',
    headline: {
      gpu: 'GPU 열을 읽으세요: 이것은 디스플레이 주사율의 영향을 받지 않는, 그래픽 드라이버의 실제 GPU 시간입니다.',
      cpu: (reason) =>
        `GPU 시간을 사용할 수 없고 (${reason}), 프레임 시간은 디스플레이 주사율에 의해 상한이 정해집니다. CPU 열만이 정보를 담는다 — 이번 실행에서는 그래픽 카드 자체의 비용은 측정되지 않습니다.`,
      wall: '프레임 열을 읽으세요: 여기서 프레임 시간은 디스플레이 주사율에 의해 상한이 정해지지 않으므로, 프레임 전체를 측정합니다.',
    },
    download: '리포트 다운로드',
    copy: '복사',
    copied: '벤치마크 리포트가 클립보드에 복사되었습니다.',
    close: '닫기',
    unavailable: '벤치마크는 실행 중인 3D 화면이 필요합니다.',
    failed: (message) => `벤치마크 중단: ${message}`,
    lowProfile: {
      title: '저수준 비용 순위 — 다음에 줄일 곳:',
      dominatedBy: (list) => `저그래픽 수준에서 프레임은 다음에 의해 지배됩니다: ${list}.`,
    },
  },

  toasts: {
    oceanBlocked: '바다는 갈 수 없다 — 이 대륙을 벗어날 방법은 없다.',
    mountainNoRopeWarn: '밧줄 없이 이 오르막은 위험하다 — 한 번 미끄러지면 떨어진다. 천천히, 조심스럽게!',
    penaltyJungle: '밀림이 발걸음을 늦춘다 — 마체테가 짐에 있으면 길을 빨리 뚫을 수 있다.',
    penaltyWater: '카누가 없다 — 천천히 젖은 채로 헤엄쳐 건너야 한다.',
    penaltyCanoeLand: '육지에서 카누는 발걸음을 늦춘다 — 긴 도보 구간에는 캠프에 두는 편이 낫다.',
    valuableAlreadyShown: '이 마을에서는 이미 그 보물을 보았다.',
    boughtFood: '일주일 분의 식량을 샀다.',
    bought: (name) => `${name}을(를) 샀다.`,
    notEnoughMoney: '돈이 부족하다.',
    digNoShovel: '삽을 들고 있지 않으면 팔 수 없다.',
    villagerNod: '노인이 나에게 우호적으로 끄덕인다.',
    drumsSending: '족장이 북을 치는 사람을 부른다. 메시지가 마을 위로 퍼져 나간다.',
    journalDndOn: '일지 알림 끄기 — 새 항목이 조용히 추가된다.',
    journalDndOff: '일지 알림 켜기 — 새 항목이 일지를 연다.',
    graphicsLevel: {
      low: '그래픽: 낮음 — 가장 빠른 프레임을 위해 효과를 최소화.',
      medium: '그래픽: 보통 — 균형 잡힌 기본값.',
      high: '그래픽: 높음 — 가장 풍부한 효과.',
    },
    debugLoadout: '디버그: 풀 로드아웃 — 짐에 모든 장비, 자금과 식량 최대, 완전한 건강.',
    debugCanoeOn: '디버그: 카누를 짐에 추가했다.',
    debugCanoeOff: '디버그: 카누를 뺐다.',
    noMedicine: '약이 더 이상 남아 있지 않다.',
    medicineNotNeeded: '열도 상처도 없다 — 약을 아껴 두자.',
    inventoryFull: '짐이 가득 찼다 — 더는 들 수 없다.',
    discovered: (name) => `${name} 발견. 지리학회가 이 보고에 보상할 것이다.`,
    sold: (name, amount) => `${name}을(를) ${amount} $에 팔았다.`,
    soldForGifts: (name, count) => `${name}을(를) 선물 ${count}개와 교환했다.`,
    notEnoughGifts: '선물이 부족하다 — 이곳에서 돈은 의미가 없다.',
    bazaarRejected: (name) => `상인이 손을 저어 치운다 — ${name.toLowerCase()}은(는) 여기서 거래되지 않는다.`,
    graveyardEmpty: '바랜 뼈에는 더 가져갈 만한 상아가 없다.',
    chiefHostile: '마을이 내 잘못을 잊지 않았다. 족장은 나를 만나 주지 않는다.',
    regionShunned: '내 강탈 소문이 퍼졌다 — 이 지역의 어떤 오두막도 다시 나를 받지 않을 것이다.',
    campPitched: '캠프를 쳤다 — 지도에 X로 그 위치를 표시했다.',
    campNeedsFriend: '이 지역의 \"존경받는 친구\"만이 마을에 짐을 남길 수 있다.',
    positionReport: (coords, region) => `내 측정: ${coords} — ${region} 지역.`,
    orientationGained: '선물에 대한 감사로, 그들은 나에게 중요한 건물들을 가리켜 보인다.',
    stuckHint: (key) => `끼었나? ${key}를 눌러 빠져나오기.`,
    unstuckFreed: '나는 빠져나와 다시 탁 트인 땅에 서 있다.',
  },

  dialogs: {
    tradeGreeting: '“어서 오게, 여행자! 둘러보게 — 좋은 물건, 정직한 값이라네.”',
    tradeGreetingVillage: '“환영하네, 이방인이여. 돈은 우리에게 의미가 없네 — 선물을 내밀면 거래하겠네.”',
    cash: '자금',
    giftsHeld: '선물',
    priceGifts: (n) => `선물 ${n}개`,
    sellHeader: '장비 판매:',
    sell: '판매',
    buy: '구매',
    leave: '떠나기 (Esc)',
    foodItem: '식량 (1주)',
    gift: (name) => `선물: ${name}`,
    audienceTitle: (people) => `${people} 족장과의 접견`,
    audienceIntro: (mood) => `족장의 �간 어둠 속에서, 족장이 조각한 나무 위에 앉아 있다. ${mood}`,
    moodHigh: '족장이 깊은 우의를 담아 나를 바라본다.',
    moodMid: '족장이 나에게 호의적인 듯 보인다.',
    moodLow: '족장이 나를 살피되, 아런 기색도 드러내지 않는다.',
    chiefDone: '“내가 아는 것은 다 말했네. 그대의 길에 축복이 있기를.”',
    askDrums: '그에게 북으로 메시지를 전하도록 부탁하다',
    askDrumsLocked: '그에게는 전할 메시지가 있다 — 그러나 자기 백성에게 아무것도 가져오지 않은 이방인에게는 전하지 않겠다는 뜻이다.',
    artefactCarried: '큰 바위 아래의 그것, 여전히 강 진흙에 싸인 채로',
    handArtefact: '그의 손에 놓아주다',
    chiefAcknowledges: '그는 그것을 한 번 뒤집어 보고, 말했다:',
    give: '내놓다',
    stock: (n) => `${n} 보유 중`,
    endAudience: '접견 끝 (Esc)',
    rob: '소총을 들어 강탈하다',
    robConfirm:
      '이 마을을 총구로 강탈할까? 이로써 이 지역 전체가 영원히 반감을 품게 된다 — 접견도, 힌트도, 원조도 끊어지며 “존경받는 친구”의 지위도 모두 사라진다.',
    robConfirmYes: '그래, 강탈한다',
    robCancel: '아니다, 물러선다',
    robOrphansGoal:
      '주의: 아직 배우지 않은 무덤의 방향을 알려줄 수 있는 것은 이 지역뿐이다. 강탈하면 그 지식은 영원히 사라지고 — 무덤을 끝내 찾지 못할 수도 있다.',
    bazaarGreeting: '“보물이다, 에펜디! 밀림에서 건진 것을 보여주게 — 아니면 하나 가져가게.”',
    bazaarSell: '보물 판매:',
    bazaarBuy: '판매 중:',
    offer: '제시',
    bid: (name, amount) => `상인이 ${name.toLowerCase()}에 ${amount} $을 제시한다.`,
    accept: '수락',
    decline: '거절',
    agencyGreeting: '“대륙의 모든 항구로 항해합니다 — 빠른 배, 정직한 요금.”',
    passage: (dest, days) => `${dest}까지의 항해 (약 ${days}일)`,
    book: '예약',
    campTitle: '캠프',
    villageCampTitle: '마을 보관소',
    campHint: '짐을 내려놓으면 짐이 가벼워진다 — 다만 경비가 없는 캠프는 약탈당할 수 있다.',
    villageCampHint: '마을 사람들이 이 물건들을 자기 것처럼 지킨다. 여기 맡긴 것은 절대 잃지 않는다.',
    campPack: '내 짐:',
    campContents: '여기 보관됨:',
    campEmpty: '보관된 것이 없다.',
    campStore: '보관',
    campTake: '가져오기',
  },

  overlays: {
    title: '아프리카의 심장',
    victoryText: (days) =>
      `대왕의 무덤을 찾아 그 보물을 세상에 드러냈다. 사막과 밀림을 ${days}일 동안 헤맨 끝에, 원정은 완성되었다. 그대의 이름은 대항해가들과 나란히 일컬어질 것이다.`,
    remainsReport: (cause, days) =>
      `대상부대가 탐험가의 유해를 발견했다 — 소름이 끼치는 광경이다. 모든 정황은 ${cause}을(를) 가리킨다. ${days}일 동안의 희망과 고난을 담은 일지가 여기서 끝난다.`,
    deathCauses: {
      starvation: '더 이상 갈 수 없을 때까지 허기가 그를 옥죄었다',
      fever: '그의 열병은 아무도 손을 내밀 수 없는 곳에서 그를 삼켰다',
      dehydration: '사막의 태양 아래, 그는 갈증으로 죽었다',
      sunblind: '눈이 멀어 원을 그리며 헤매다, 사막이 그를 삼켰다',
      wounds: '상처가 그의 몸을 내주었다',
      eaten: '맹수가 그를 이겼다 — 무덤에 남은 것이 거의 없었다',
    },
    deadlineExpired: (days) =>
      `후원자들의 인내심이 바닥났다: ${days}일이 지났지만 무덤은 찾지 못했고, 원정은 회수된다. 아프리카의 심장은 그 비밀을 간직한다.`,
    successor: '후임자가 이어받다',
    newExpedition: '새 원정',
    checkpointFound: '저장된 게임이 발견되었다 — 지난 항구 도시의 체크포인트.',
    loadCheckpoint: '체크포인트 불러오기',
  },

  debug: {
    title: '디버그 메뉴 (F1)',
    filter: '필터',
    filterHint: '좁히기 …',
    filterEmpty: '일치하는 컨트롤이 없습니다.',
    groups: {
      movement: '이동과 조작',
      travel: '시간과 여행',
      survival: '건강, 물, 식량',
      wildlife: '야생과 그 일들',
      settlement: '마을 생활',
      weather: '날씨와 계절',
      economy: '경제와 거래',
      events: '무작위 사건과 트리거',
      graphics: '그래픽과 사운드',
      jump: '이동 대상',
      tools: '도구',
    },
    renderer: '렌더러',
    language: '언어',
    travelSpeed: '여행 속도 (육상)',
    walkSpeed: '�기 속도 (마을 안)',
    strafeFactor: '횡걸음/후진 비율',
    walkerUnstuck: '주민 끼임 해소 (초)',
    placeCollisionFactor: '마을 충돌 (진입 반경 비율)',
    startupFreezeBudget: '로딩 화면 멈춤 예산 (ms)',
    labelOverlayMax: '이름 라벨 (최대)',
    mouseSensitivity: '마우스 감도 (1인칭)',
    lookPitchLimit: '상하 시선 한계 (°)',
    unstuckStallDistance: '끼임: 진행 임계 (m)',
    unstuckStallSeconds: '끼임: �트 노출 (초)',
    unstuckSearchRadius: '끼임 해소: 탐색 반경 (m)',
    unstuckSearchStep: '끼임 해소: 탐색 간격 (m)',
    invertLook: '마우스 시선 반전',
    labelModifier: '이름 라벨용 키',
    labelModifierCtrl: 'Ctrl (전체화면에서만 안전)',
    labelModifierShift: 'Shift (브라우저 단축키 없음)',
    labelModifierAlt: 'Alt (놓으면 브라우저 메뉴로 포커스 이동)',
    ambienceVolume: '환경음 음량',
    footstepVolume: '발소리 음량',
    ambientVolume: '기타 환경음 음량',
    birdsongVolume: '새소리 음량',
    speechVolume: '마을 말소리 음량',
    surfNearRadius: '파도 풀볼륨 거리 (°)',
    surfCutoff: '파도 무음 거리 (°)',
    speechSyllable: '말소리: 음절 길이 (초)',
    speechPhrasePause: '말소리: 단어 사이 멈춤 (초)',
    speechHearingRadius: '말소리: 들리는 반경',
    speechHearingFalloff: '말소리: 감� 기울기',
    speechLabelSeconds: '말소리: 머리 위 글자 (초)',
    speechPitch: '말소리: 낮은 음 높이 (Hz)',
    speechPitchInterval: '말소리: 낮은 음 대비 높은 음 비율 (×)',
    speechLabelHeadroom: '말소리: 머리 위 여백 (m)',
    speechConceptLabels: '말소리: 음절 대신 개념 표시',
    tagChildCount: '술래잡기: 아이 수',
    tagSprintSpeed: '술래잡기: 술래 전력 질주 (m/s)',
    tagRunnerBoost: '술래잡기: 도망자 속도 배율',
    tagTrotFactor: '술래잡기: 습보 속도 (전력 대비)',
    tagRecoverFactor: '술래잡기: 회복 속도 (전력 대비)',
    tagFloorFactor: '술래잡기: 최저 속도 (전력 대비)',
    tagDrain: '술래잡기: 초당 예비 소모',
    tagRecover: '술래잡기: 초당 예비 회복',
    tagBreakOff: '술래잡기: 이 값 미만이면 손놓기',
    tagResume: '술래잡기: 이 값 초과면 다시 추격',
    tagPressure: '술래잡기: 이 거리 안이면 도망자 도주',
    tagReach: '술래잡기: 이 거리 안이면 술래 압박',
    tagCommit: '술래잡기: 이 거리 안이면 술래 진입',
    tagCatch: '술래잡기: 잡힘 거리',
    tagSwitchMargin: '술래잡기: 대상 전환 여유',
    tagImmunity: '술래잡기: 잡힌 뒤 면역 (초)',
    tagResolveCap: '술래잡기: 술래 포기 한도 (초)',
    tagIdle: '술래잡기: 라운드 사이 휴식 (초)',
    tagTrendTau: '술래잡기: 간격 추세 평활화 (초)',
    tagTrendEnter: '술래잡기: 추세 아래면 돌진 개시',
    tagTrendLeave: '술래잡기: 추세 위면 돌진 종료',
    tagVariation: '술래잡기: 아이별 편차',
    tagUnstuck: '술래잡기: 아이 끼임 해소 창 (초)',
    tagLean: '술래잡기: 전력 질주 시 앞으로 기울기 (rad)',
    tagTurnRate: '술래잡기: 몸 회전 속도 (rad/s)',
    tagPlayRadius: '술래잡기: 놀이 반경',
    childSpeechInterval: '아이들: 발화 간격 (초)',
    childSpeechSpread: '아이들: 그 간격의 편차',
    childSpeechAction: '아이들: 행동 지속 (초)',
    childSpeechPace: '아이들: 심부름 속도 (m/s)',
    childSpeechRefusal: '아이들: 호출 거부 확률',
    childSpeechReply: '아이들: 응답 창 (초)',
    adultErrandInterval: '어른들: 심부름 간격 (초)',
    adultErrandSpread: '어른들: 그 간격의 편차',
    adultErrandDwell: '어른들: 심부름 체류 (초)',
    adultErrandDig: '어른들: 파는 시간 (초)',
    adultErrandLife: '어른들: 심부름 포기까지 (초)',
    adultErrandStall: '어른들: 진전 없는 심부름 해제 (초)',
    adultErrandSilence: '어른들: 무발화 경보 (초)',
    adultErrandPace: '어른들: 심부름 속도 (m/s)',
    adultErrandCount: '어른들: 심부름 중인 마을 사람',
    separationRadius: '주민: 몸 반경',
    separationSlop: '주민: 허용 겹침 (m)',
    separationStiffness: '주민: 분리 감쇠',
    separationSpeed: '주민: 밀어내는 속도 (m/s)',
    separationWedge: '주민: 웨이즈 탈출 후 (초)',
    foodPerDay: '하루 식량 소비 (0 = 무한)',
    canteenDrain: '하루 물 소비 (육상)',
    canteenDesertDrain: '하루 물 소비 (사막)',
    canteenCapacity: '물통 용량',
    woundHealLight: '가벼운 상처 치유 (일)',
    woundHealSevere: '심한 상처 호전 (일)',
    daysPerUnit: '여행 단위당 일수',
    canoeSpeedup: '카누 속도 배율 (수상)',
    junglePenalty: '밀림 페널티 배율 (마체테 없을 때)',
    riverWidthFactor: '강 폭 배율 (재로드 시 적용)',
    riverMouthSlackDeg: '강 하구 정체 구간 (도, 재로드 시 적용)',
    drownSeconds: '익사: 강한 물살 속 시간 (초)',
    wetFlowFactor: '익사: 우기 물살 배율',
    vigilPredatorDelay: '경계: 포식자가 끌려올 때까지 (초)',
    rescueBurst: '부모 구조 돌진 (배율)',
    calfFraction: '무리당 어린 개체 비율',
    calfFollowRadius: '새끼 이동 반경',
    calfGambolRange: '새끼 놀이 범위',
    calfGambolBout: '새끼 놀이 한 번 (초)',
    crocStrikeRadius: '악어: 강변 습격 반경',
    crocAmbushBankBand: '악어: 매복 강변 띠',
    crocMouthOffset: '악어: 입 기준점 거리',
    juvenilePreyBias: '어린 개체 사냥 선호',
    juvenileDrinkCrocBias: '악어: 어린 개체 음수 선호',
    calfAdoptionRadius: '고아 입양 반경',
    calfEscapeSeconds: '풀려난 새끼 도주 (초)',
    calfReunionSeconds: '새끼 이별 창 (초)',
    calfMourningSeconds: '고아 애도 창 (초)',
    fightDispositionRate: '싸움: 기본 성향 변화율',
    fightDispositionInterval: '싸움: 성향 판정 간격 (초)',
    fightSeekRadius: '싸움: 상대를 찾는 반경',
    fightContactRadius: '싸움: 접촉 반경',
    fightDriveOffDistance: '싸움: 퇴장 거리',
    fightApproachSeconds: '싸움: 접근 마감 (초)',
    fightClashSeconds: '싸움: 충돌 지속 (초)',
    fightClashIntensity: '싸움: 충돌 포즈 강도',
    fightApproachBurst: '싸움: 접근 속도 배율',
    fightQuarryFleeFactor: '싸움: 피해자 도주 속도 비율',
    fightLethalityScale: '싸움: 치명도',
    fightCooldownSeconds: '싸움: 한 번 끝난 뒤 재대기 (초)',
    benchmarkStart: '렌더 벤치마크 시작',
    crocDragSpeed: '악어: 물로 끌어당기는 속도',
    crocDragSeconds: '악어: 끌고 가기 마감 (초)',
    crocGripSeconds: '악어: 물기 마감 (초)',
    crocDriveOffRest: '악어: 쫓겨난 뒤 휴식 (초)',
    huntLeaveOvertime: '사냥: 떠난 뒤 여유 (초)',
    waterCrossMax: '강 건넘: 최대 폭',
    waterCrossChance: '강 건넘: 확률',
    seasonStrength: '계절 기상 강도',
    wetGroundStrength: '젖은 땅 강도',
    edgeBandWidth: '마을 가장자리: 폭 (m)',
    edgeBandWander: '마을 가장자리: 배회 (m)',
    edgeBandStrength: '마을 가장자리: 강도',
    bankWadeDepth: '강변: 물 깊이 (m)',
    bloodStainSize: '혈흔: 크기',
    bloodStainIrregularity: '혈흔: 울퉁불퉁 윤곽',
    season: '계절 (기상)',
    seasonAuto: '달력 기준',
    seasonDry: '건기',
    seasonMid: '환절기',
    seasonWet: '우기',
    mountainPenalty: '산 페널티 배율 (밧줄 없을 때)',
    foodUnitDays: '식량 단위 일수 (일)',
    oceanSwimMargin: '헤엄 가능한 해안 띠 (°)',
    digRadius: '파기 반경',
    goodwillForHint: '힌트에 필요한 호감',
    randomEvents: '무작위 사건',
    triggerEvent: '사건 트리거:',
    eventNames: {
      lionAttack: '사자 습격', cheetahAttack: '치타 습격', leopardAttack: '표범 습격',
      hyenaAttack: '하이에나 습격', snakeBite: '뱀 물림',
      robberAttack: '강도', crocodileAttack: '악어', fever: '열병',
      sunblindness: '눈병', sandstorm: '모래폭풍', waterfallSweep: '폭포로 휩쓸림',
      findRemains: '유해 발견',
    },
    stageEvent: '사건 연출:',
    stageGroups: {
      wildlife: '야생의 일들',
      random: '무작위 사건',
      hazards: '여행자의 위험',
    },
    dramaNames: {
      calfDrowning: '새끼가 물에 휩쓸림',
      calfMired: '새끼가 물웅덩이에 빠짐',
      crocodileAmbush: '악어의 매복',
      elephantMourning: '코끼리가 무리원을 애도함',
      elephantTrample: '코끼리가 동물을 밟아죽임',
      grassFire: '스텝의 풀불',
      huntCalf: '포식자가 새끼를 사냥함',
      huntGeneric: '포식자가 초식동물을 사냥함',
      intraspeciesFight: '같은 종끼리의 싸움',
      lionCubDefence: '하이에나가 사자 새끼를 노림',
      vultureFlock: '시체 위의 독수리 무리',
    },
    hazardNames: {
      mountainFall: '오르다 떨어짐',
    },
    stageFailures: {
      noScene: '여행 중일 때만 — 여기에는 야생이 없습니다.',
      noSavanna: '근처에 사바나가 없다 — 탁 트인 풀밭으로 이동하라.',
      noWater: '근처에 물이 없다 — 강이나 호수 가까이로 이동하라.',
      noPrey: '근처에 적합한 짐승이 없다 — 사냥감이 보일 때까지 이동하라.',
      noCalf: '근처에 새끼가 없다 — 어린 개체가 있는 무리가 보일 때까지 이동하라.',
      noCub: '근처에 사자 새끼가 없다 — 암사자가 새끼를 키우는 곳은 사바나다.',
      noElephant: '근처에 코끼리 무리가 없다.',
      noFightPair: '근처에 같은 종의 적대가 둘이 없다 — 무리가 보일 때까지 이동하라.',
    },
    showHidden: '숨긴 객체 표시',
    fpsCounter: 'FPS 카운터',
    traa: 'TRAA (시간적 안티에일리어싱)',
    ssao: 'SSAO (환경차폐)',
    shadowMapHalf: '절반 해상도 그림자',
    shadows: '태양 그림자',
    detailLevel: '그래픽 수준 (F9)',
    detailLow: '낮음',
    detailMedium: '보통',
    detailHigh: '높음',
    fireShadows: '캠프불 그림자',
    flatGround: '평평한 지면 (디버그)',
    foliageCollapse: '건기 잎사귀 수축 (디버그)',
    health: '건강',
    wheelZoom: '기본 너머로 줌아웃 허용 (조감도)',
    journalDnd: '일지로 알림 끄기 (F2)',
    cash: '자금 ($)',
    foodDays: '식량 (일)',
    jumpTo: '이동 대상:',
    jumpGroups: {
      ports: '항구',
      villages: '마을',
      monuments: '기념물',
      mountains: '산',
      waterfalls: '폭포',
      lakes: '호수',
      cultural: '문화 유산',
      natural: '자연 유산',
      other: '기타',
    },
    choose: '선택 …',
    grave: '무덤',
    addEquipment: '장비 추가:',
    addGift: '선물 추가:',
    addTreasure: '보물 추가:',
    giftsTotal: '선물 (개수)',
    inventoryCapacity: '소지품 용량',
  },

  journal: {
    titles: {
      departure: 'Departure',
      region: (p: TextParams) => `Region: ${ko.regions[p.region as keyof typeof ko.regions]}`,
      arrival: (p: TextParams) => `Arrival in ${PLACES[p.place as string]}`,
      portReturn: (p: TextParams) => `${PLACES[p.place as string]} Once More`,
      village: (p: TextParams) => PLACES[p.place as string],
      villageReturn: (p: TextParams) => `Back in ${PLACES[p.place as string]}`,
      monument: (p: TextParams) => PLACES[p.place as string],
      monumentReturn: (p: TextParams) => `${PLACES[p.place as string]} Once More`,
      audience: 'Audience with the Chief',
      mistake: 'A Grave Mistake',
      chiefHint: "The Chief's Words",
      drumMessage: 'The Drums Speak',
      rockArtefact: 'At the Foot of the Great Rock',
      artefactGiven: 'Into the Hands of the Chief',
      decoded: 'Deciphered!',
      unspecific: 'Vague Murmurs',
      giftLore: 'What the People Revere',
      language: (p: TextParams) => `The Language of the ${ko.regions[p.region as keyof typeof ko.regions]}`,
      victory: 'The Heart of Africa',
      foodLow: 'Provisions Running Low',
      foodOut: 'Provisions Exhausted',
      dehydration: 'Thirst',
      recovery: 'Recovery',
      healthPoor: 'At the End of My Strength',
      attack: 'Attacked!',
      robbery: 'Robbers',
      fever: 'Fever',
      sunblind: 'Blinded by the Sun',
      sandstorm: 'Sandstorm',
      sweptAway: 'Swept Away',
      mountainClimb: 'Into the Mountains Without a Rope',
      penaltyJungle: 'Fighting Through the Jungle',
      penaltyWater: 'Into the Water',
      penaltyCanoeLand: 'The Canoe on Land',
      dangerUnarmed: 'Wilds Without a Rifle',
      dangerDesert: 'The Blaze of the Desert',
      dangerWater: 'Crocodiles Lie in Wait',
      dangerWetland: 'Fever in the Thicket',
      mountainFall: 'A Fall',
      landmarkDiscovered: (p: TextParams) => {
        const name = ko.landmarks[p.landmark as keyof typeof ko.landmarks]
        const titles: Record<string, string> = {
          mountain: `${name} in Sight`,
          falls: `The Thunder of ${name}`,
          lake: `An Inland Sea: ${name}`,
          grave: 'Where the Elephants Die',
          pyramids: `The Pyramids of ${name}`,
          'giza-pyramids': `The Great Pyramids of ${name}`,
          'stone-city': `The Stone Walls of ${name}`,
          'rock-churches': `The Rock Churches of ${name}`,
          'coastal-ruins': `The Ruins of ${name}`,
          stelae: `The Stelae of ${name}`,
          castles: `The Castles of ${name}`,
          'cliff-dwellings': `The Cliffs of ${name}`,
          crater: `The Green Caldera: ${name}`,
          volcano: `The Smoking Mountain: ${name}`,
          delta: `A River Lost in the Sands: ${name}`,
          wetland: `The Great Swamp: ${name}`,
        }
        return titles[p.kind as string] ?? `${name} in Sight`
      },
      discovery: 'A Grim Discovery',
      deadline1: 'A Letter from the Financiers',
      deadline2: 'The Final Warning',
      successor: 'A New Hand',
      treasure: (p: TextParams) => {
        const name = p.treasure ? ko.treasures[p.treasure as keyof typeof ko.treasures] : undefined
        return name ? `${name} from the Earth` : 'Ivory Among the Bones'
      },
      bounty: 'The Bounty of Discovery',
      ferry: 'Passage by Sea',
      valuableReaction: 'The Valuable in My Hand',
      friend: 'An Honored Friend',
      rescue: 'Saved by the Villagers',
      friendSupplies: 'Guests of the Region',
      robberyCommitted: 'A Deed Beyond Forgiving',
      campLooted: 'The Looted Camp',
    },
    start:
      'Cairo, January 1890. [excited]Today my expedition begins.[/excited] With 250 dollars in my pocket, a bundle of trade gifts, and more hope than sense, I mean to find the Heart of Africa — [awe]the fabled tomb of the great king.[/awe] [breath][somber]May fortune walk with me.[/somber]',
    regionEntry: (p: TextParams) => {
      const texts: Record<string, string> = {
        north:
          '[awe]The desert![pause] A sea of sand and light as far as the eye can reach.[/awe] The heat shimmers above the dunes, and yet I feel a strange exaltation. [pause]They say the peoples of the North read direction from the origin of the wind. [somber]I shall have to learn their words first.[/somber]',
        west:
          'Endless savanna, [awe]golden in the evening light.[/awe] Umbrella acacias stand like sentinels across the vastness, and far off the herds are moving. [excited]The West receives me with a feeling of freedom[/excited] — and a suspicion that different words for the points of the compass hold sway here.',
        central:
          '[fear]The jungle has swallowed me whole.[/fear] Green twilight, the shrieking of birds, air so damp it settles on the chest like a wet cloth. [weary]Without a machete I can scarcely advance a step.[/weary] [breath][somber]Everything here is life,[pause] and everything is danger.[/somber]',
        east:
          'Mountains and lakes so clear that the sky mirrors itself in them. [awe]In the East, snow-capped summits rise above the clouds —[pause] what a sight, in the very middle of Africa![/awe] The peoples here measure the world from places they call [emph]"Odabi"[/emph].',
        south:
          'The high plateau of the South. [pause]Cool, clear air after all that heat, wide grassland beneath an immense sky. The people here, so it is said, speak of seasons when they mean directions. [pause][awe]What a curious land this is.[/awe]',
      }
      return texts[p.region as string]
    },
    portArrival: (p: TextParams) =>
      `I have reached ${PLACES[p.place as string]}. [excited]The clamor of the harbor, the cries of the traders, the smell of salt and spices[/excited] — here I can replenish my stores and gather my strength. [pause]My notes are safely put away. [mute](Checkpoint saved)[/mute]`,
    // The first entry into a port (point 394): what the traveller actually sees
    // on arriving at THAT city in ~1890 — Khartoum a ruin opposite the Khalifa's
    // Omdurman, Timbuktu a mud town in the sand, Boma a bolted-together station.
    // Berbera reads its documented fair season (docs/peoples-1890.md §4.0.2).
    portFirstVisit: (p: TextParams) => {
      const name = PLACES[p.place as string]
      const texts: Record<string, string> = {
        cairo: `The gates of Cairo, and the din of them. [excited]Donkey-boys bawling for a fare, dragomans hawking themselves in half a dozen tongues, the covered lanes of the Muski so narrow that two laden camels stop the whole street.[/excited] [awe]Above the roofs stand the minarets of the Citadel, and beyond them a brown line of desert where the pyramids are.[/awe] [somber]English officers take their coffee in the Ezbekiyeh gardens as though the country belonged to them.[/somber]`,
        tangier: `[awe]Tangier is white — a heap of lime-washed cubes climbing the hillside, the Kasbah and the Sultan's flag above them.[/awe] There is no quay: the steamer anchored out in the bay, Moorish boatmen rowed us through the swell and carried us the last few yards ashore on their shoulders. [pause]Outside the walls the great market spreads over the hill, grain and charcoal and country people down from the Rif. [somber]The consulates of half Europe watch one another along a single street; Morocco is still the Sultan's, and everyone here is waiting.[/somber]`,
        khartoum: `[somber]Khartoum is a ruin.[/somber] Since the city fell and Gordon died on the palace stair, its bricks have been ferried over the water to build the Khalifa's own town at Omdurman; grass stands in the streets where the consulates were. [pause][awe]Below the point the two Niles meet — the Blue running dark and swift against the pale White — and the whole traffic of the Sudan crosses at the ferry.[/awe] [fear]I am tolerated here. That is the whole of my standing.[/fear]`,
        'st-louis': `[awe]St. Louis lies on its long island in the river mouth, and it is the most French thing I have found in Africa:[pause] two-storeyed houses with iron balconies, streets laid out with a ruler, the tricolour over the governor's residence.[/awe] A bridge of boats crosses to the mainland, and the rails run from here down to Dakar. [excited]In the sheds along the quay the whole gum of the Senegal is weighed and sacked,[/excited] and the signares of the old merchant families keep house in a style I had not looked for at this latitude.`,
        timbuktu: `[somber]Timbuktu — and I must set it down honestly: the golden city of the books is a town of grey mud.[/somber] The sand has come in among the houses, whole quarters stand empty, and the market here is a poor thing beside Jenne's. [awe]Yet the great mosques stand, Djinguereber's tower of mud and jutting timbers above every flat roof,[pause] and the salt still comes down from Taoudenni in slabs the length of a man, forty days out of the desert.[/awe] [fear]The Tuareg take their toll of the town as they please; there is no other law in it.[/fear]`,
        lagos: `[fear]Lagos is entered over the bar,[/fear] and the bar nearly had us: the steamer lay off in the swell and surf-boats brought us through the broken water with the Kru men singing the stroke. [pause][awe]Behind it the lagoon opens out as calm as a mill pond, and the town lies along it — the British flag, roofs of corrugated iron, and a whole quarter built by the freedmen home from Bahia, with shutters and stucco out of Pernambuco.[/awe] [somber]Everything here smells of palm oil, and everything here is reckoned in puncheons of it.[/somber]`,
        boma: `[somber]Boma is not a city; it is a station.[/somber] A row of iron houses shipped out in pieces and bolted together on the bank, a flagstaff with the blue banner and its gold star, and the mangrove crowding up to the clearing on either hand. [pause][awe]The Congo goes past a good two leagues wide, brown and silent, and the sea is still sixty miles down it.[/awe] [fear]In the sheds the ivory lies stacked like cordwood, and nobody says aloud what it cost to bring down.[/fear] [weary]The fever has thinned the staff here; I am warned not to sleep near the water.[/weary]`,
        berbera:
          p.situation === 'deserted'
            ? `[somber]Berbera in the hot months is a name on a shore.[/somber] The mat town of the fair has been carried away bundle by bundle on the camels that brought it; there remain a few stone houses, the wells, and the burnt ground where twenty thousand people camped the winter through. [fear]A man at the well told me quite calmly that the lions come down to drink there now.[/fear] [weary]The karif comes off the hills like a breath from an oven, and what trade there is happens in the shade and half in a whisper.[/weary]`
            : `[excited]Berbera in its season is a city of matting.[/excited] Thousands of huts of mats and boughs have gone up along the shore, and the caravans are in from the Ogaden and from Harar — camels by the hundred, sheep in flocks that cover the beach, hides, gum, ostrich feathers, coffee in plaited baskets. [awe]Dhows lie out in the roads waiting on the wind for Aden.[/awe] [somber]Not a soul here believes any of it is permanent, and they are right.[/somber]`,
        zanzibar: `[awe]Zanzibar is smelled before it is seen — cloves, on the wind, a good way out.[/awe] The harbour is a forest of dhow masts; the Sultan's palace and the great new house of wonders stand along the front with their tiers of iron balconies, and behind them the stone town closes into lanes where two men can barely pass, every door carved and studded like a strong-box. [pause]Here the caravans of the whole mainland are fitted out — porters, cloth, beads, coils of wire — and every consul on this ocean keeps his agent. [somber]The market where men were sold has been shut these seventeen years; the trade itself has only moved inland.[/somber]`,
        capetown: `[awe]Table Mountain stands over the town like a wall with its cloth laid out on it,[/awe] and after the Africa I have come through, Cape Town is a shock: gas lamps, oak avenues, a dock full of mail steamers, and Adderley Street talking of nothing but diamonds and the new gold on the Rand. [pause]Above the town the Malay quarter keeps its own hours and its own call to prayer. [somber]The rails run from here to Kimberley and further every year; what is settled in this street is felt a thousand miles north of it.[/somber]`,
      }
      const text =
        texts[p.place as string] ??
        `I have reached ${name}. [excited]The harbour, the cries of the traders, the smell of salt and tar[/excited] — a place to set my stores in order before going on.`
      return `${text} [pause]My notes are safely put away. [mute](Checkpoint saved)[/mute]`
    },
    // Re-entering a port whose situation has changed (point 394): only the
    // change is described. Berbera's fair season is the one modelled today.
    portReturn: (p: TextParams) => {
      const transitionKey = `${p.fromSituation as string}_${p.toSituation as string}`
      const texts: Record<string, Record<string, string>> = {
        berbera: {
          fair_deserted: `[somber]Berbera has emptied since I stood here last.[/somber] The whole town of matting is gone — carried off bundle by bundle on the camels that brought it — and the shore where the caravans lay is bare burnt ground. [pause][fear]At the well they told me, without any particular alarm, that the lions come down to drink there in this season.[/fear]`,
          deserted_fair: `[excited]Berbera has filled up again.[/excited] Where I walked over empty ground there stands a mile of huts of mats and boughs, camels in from the Ogaden by the hundred, and the hides and gum piled ready for the dhows to Aden. [pause][awe]It is the same shore, and I would not have known it.[/awe]`,
        },
      }
      const text =
        texts[p.place as string]?.[transitionKey] ??
        `[somber]${PLACES[p.place as string]} is not the town I left.[pause] What has changed here since my last visit stands plainly in the streets.[/somber]`
      return `${text} [pause]My notes are safely put away. [mute](Checkpoint saved)[/mute]`
    },
    // Arrival at a walkable monument site (point 394; research: docs/giza-1890.md):
    // the PERIOD picture, not the modern postcard — Khufu's broken apex, Khafre's
    // pale casing cap, the Sphinx buried to the shoulders — and the Nile flood of
    // the visit date, which before the dam made the plateau an island every autumn.
    monumentFirstVisit: (p: TextParams) => {
      const flood = p.situation === 'flood'
      const texts: Record<string, string> = {
        giza: flood
          ? `[awe]The inundation is out, and the pyramids stand on an island.[/awe] From the desert edge I looked back over a sheet of brown water reaching to the palms of Cairo, the causeway across it like a dike and every village sitting up on its mound. [pause][awe]Khufu is a mountain of tawny steps with its apex broken off flat; Khafre beside it still carries a pale smooth cap of its old casing near the peak,[pause] as though a second and finer summit had been set upon the first.[/awe] [somber]Of the Sphinx only the head and a little of the breast stand clear — paws, body and enclosure lie under the sand, and the face has been noseless these many centuries.[/somber] [pause]The donkey-boys of the hotel take their fares out by boat in this season, and are none the poorer for it.`
          : `[awe]I stood at last beneath the Great Pyramid, and no engraving prepares a man for it:[pause] a mountain of tawny steps, the apex broken off flat, the courses so deep that one must be hauled up each of them.[/awe] Khafre beside it carries a pale smooth cap of its old casing near the peak, [emph]as though a second and finer summit had been set upon the first.[/emph] [pause][somber]Of the Sphinx only the head and a little of the breast are free; the paws, the body and the whole enclosure lie under the sand, and the face has been noseless these many centuries.[/somber] [pause]Below the plateau the fields lie dry and cracked, and Cook's people ride up from the hotel on donkeys while the guides quarrel over them for backsheesh.`,
      }
      return (
        texts[p.place as string] ??
        `[awe]I have reached ${PLACES[p.place as string]}, and stood a long while before it without writing anything down.[/awe] [pause]Some things are older than any account of them.`
      )
    },
    // Re-entering a monument site in a changed situation (point 394).
    monumentReturn: (p: TextParams) => {
      const transitionKey = `${p.fromSituation as string}_${p.toSituation as string}`
      const texts: Record<string, Record<string, string>> = {
        giza: {
          lowWater_flood: `[awe]I came back to Giza in the flood, and the plateau has become an island.[/awe] The cracked fields I walked over are a brown lake to the horizon, the causeway stands out of it like a dike, and the boats come up to the desert edge where the donkeys used to wait. [pause][somber]Not a stone has moved, and the whole place stands differently for the water.[/somber]`,
          flood_lowWater: `[somber]The water has gone off the land since I was here.[/somber] Where I saw a lake between the city and the plateau there is black cracked mud going green at the edges, oxen turning at the water-wheels, and the causeway an ordinary road again. [pause][awe]The pyramids look larger over dry fields than they did over the flood — there is nothing left between them and the eye.[/awe]`,
        },
      }
      return (
        texts[p.place as string]?.[transitionKey] ??
        `[somber]I came back to ${PLACES[p.place as string]}, and the season has changed the place more than the years have.[/somber]`
      )
    },
    villageFirstVisit: (p: TextParams) => {
      const name = PLACES[p.place as string]
      // Each people's village reads like its ~1890 self (design.md §16) —
      // and the rinderpest years are date-dependent (point 133): the plague
      // phase of the visit date picks the Maasai and Sidama vignette. The
      // struck text follows Baumann's period eyewitness account (1892).
      const phase = (p.phase as string) ?? 'clean'
      const texts: Record<string, string> = {
        tuareg: `I have reached the ${name} — a camp of the blue-veiled riders of the desert. [awe]Low tents of hide, camels couched in the sand, and men whose faces are wrapped in indigo cloth —[pause] among the Tuareg it is the men who go veiled, not the women.[/awe] Their salt caravans cross the emptiness for weeks. [somber]The chief receives strangers in the great tent.[/somber]`,
        berbers: `I have reached the ${name}, high against the Atlas. [awe]Flat-roofed houses of stone and clay climb the hillside in terraces,[pause] walnut groves stand along the stream,[/awe] and at the looms the women weave carpets brighter than any I could carry home. The headman's house sits above the terraces.`,
        nubians: `I have reached the ${name} on the great river. [awe]The houses are painted with bold patterns around their doors,[pause] date palms lean over the bank, and the waterwheel creaks as it lifts the Nile onto the narrow terraces.[/awe] [somber]But this is a frontier now: soldiers watch the river road south, and men speak low of the Khalifa's dominion beyond,[pause] and of the hunger year that emptied the herds not long ago.[/somber] [somber]They say the pyramids of ancient kings stand not far from here —[pause] this land is older than any of it.[/somber]`,
        bambara: `I have reached the ${name}. [awe]Granaries of banked clay stand on stilts like great sealed jars,[pause] millet fields run to the horizon,[/awe] and over the doorways are carved antelope figures — the spirit, they tell me, that first taught men to farm. The chief's compound lies at the village heart.`,
        hausa: `I have reached the ${name}, a walled town of the Sahel. [excited]Dye pits full of indigo steam by the gate, leatherworkers cut and stamp their famous red hides,[pause] and horsemen in quilted armor clatter through a market that outshouts the birds.[/excited]`,
        mandinka: `I have reached the ${name}. [awe]From the shade rings the kora — twenty-one strings over a gourd —[pause] and a griot sings the lineage of kings entirely from memory.[/awe] Kola nuts pass from hand to hand in greeting; I was offered one, and took it gratefully.`,
        fang: `I have reached the ${name}, a clearing won from the forest. [awe]Long houses walled with sheets of bark stand in ordered rows,[pause] and the carvers here shape figures of dark wood whose calm gaze, they say, guards the relics of the ancestors.[/awe] [somber]Crossbows hang ready beside the doors.[/somber]`,
        mongo: `I have reached the ${name}, deep in the river forest. [awe]Cloth woven from raffia palm dries between the huts,[pause] fish weirs of plaited cane span the stream,[/awe] and gardens of plantain have been wrested from the jungle's edge. The elders gather by the chief's hearth.`,
        mbuti: `I have reached the ${name}, a camp of the forest people. [awe]Dome huts bent from saplings and broad leaves,[pause] hunting nets slung between the trees, and everywhere the smell of woodsmoke and wild honey.[/awe] [somber]They read this forest as I read my maps —[pause] and far better.[/somber]`,
        banda: `I have reached the ${name}. [awe]The ring of hammers carries from the furnaces — the smiths here draw fine iron from the ore of their hills —[pause] and by the meeting hall stand slit drums taller than a man, whose voices, they say, speak across the bush for miles.[/awe]`,
        bambundu: `I have reached the ${name}, gathered beneath a mighty baobab. [awe]Old trade paths run from this place down to the coast,[/awe] [somber]and the elders still tell of the warrior queen who defied the Portuguese for a whole lifetime.[/somber] The chief holds court in the shade of the great tree.`,
        lunda: `I have reached the ${name}. [awe]Courtly manners rule here:[pause] every greeting has its proper form, every rank its place on the mat.[/awe] They speak with reverence of the Mwata Yamvo, whose court lies far to the east, [pause]and crosses of copper pass through the market as money.`,
        maasai:
          phase === 'struck'
            ? `I have reached the ${name} of the plains — [somber]and it is a place of sorrow. The cattle plague has gone through the kraals like a fire; behind the thorn fence the huts stand around an emptied ground.[/somber] [fear]A wasted Maasai woman swayed through our camp with a fixed stare, gathering what scraps the porters had left — the first of those terrible famine figures we would now see daily in Maasailand, living on wild honey and wild fruit, walking toward a certain death.[/fear] [somber]And yet a core of the village holds out: the elders keep their fire, and the young men stand guard over what remains, spears at rest.[/somber]`
            : phase === 'aftermath'
              ? `I have reached the ${name} of the plains. [somber]The great kraals stand empty; the plague years took the herds, and with them the web of cattle-loans and kinship that held this people together.[/somber] [somber]Some have gone down to the farming peoples of the hills; those who stayed ride raids more desperate than any before, they tell me at the fire.[/somber] [awe]But the ring of huts still stands, and at dusk the young men still leap their dance — straight as arrows.[/awe]`
              : `I have reached the ${name} of the plains. [awe]Huts of branch and earth stand in a ring behind the thorn fence, and at its heart the cattle — wealth, food and pride in one.[/awe] [somber]Yet the kraals are wider than the herds that fill them: the lung-sickness of these last years has cut deep into the stock, the elders say.[/somber] [somber]The warriors keep watch with their long spears at rest, a sheepskin over the shoulder and every inch of them ochred red with fat and clay;[pause] at dusk I saw the young men leap, straight as arrows, in their dance.[/somber]`,
        swahili: `I have reached the ${name} by the sea. [awe]Houses of coral stone line narrow lanes, their great doors carved with vines and script,[pause] and dhows lie drawn up on the beach with their lateen sails furled.[/awe] [excited]The trade winds have made this coast a crossroads of a dozen tongues.[/excited]`,
        somali: `I have reached the ${name}. [awe]Portable houses of bent boughs and woven mats stand ready to move with the herds,[pause] camels beyond counting kneel by the wells,[/awe] and the air carries frankincense from the hills. [somber]Their poets, I am told, carry whole wars and treaties in verse alone.[/somber]`,
        sidama:
          phase === 'aftermath'
            ? `I have reached the ${name} in the highlands. [somber]The Evil Days lie behind this land — years when plague and locusts emptied the highland —[pause] and their traces still stand at the bare cattle pens.[/somber] [awe]But the enset groves carried the villages through, and among them they roast the red berries again into that drink that would wake the dead.[/awe] [excited]I drank three cups.[/excited]`
            : `I have reached the ${name} in the highlands — [somber]in the midst of what they call the Evil Days: plague on the cattle, locusts on the fields, hunger over the whole highland.[/somber] [awe]That life remains here at all they owe to the groves of the enset — the false banana whose pith they pound and bury, a store against exactly such years.[/awe] [somber]Of the cattle scarcely one still stands; the homesteads trade seed for salt.[/somber]`,
        baganda: `I have reached the ${name}. [awe]Banana groves stand in ordered rows, bark-cloth dries on frames, smooth as fine paper,[pause] and reed-fenced compounds line a swept road —[/awe] [somber]the Kabaka's kingdom keeps its order even this far from his hill.[/somber]`,
        wayeyi: `I have reached the ${name} among the reed channels. [awe]The Wayeyi read this water like a book — poling their mokoro dugouts down passages I cannot even see,[pause] fish-traps set where the current remembers to run.[/awe] [excited]Strangest of all: the flood comes in the dry season, they tell me — the river drinks from rains that fell far away, months ago.[/excited] The elder's hut stands on the first dry ground.`,
        bemba: `I have reached the ${name}. [awe]Their fields are won by fire: branches cut and burned, and the millet sown into the warm ash —[pause] the forest gives a harvest, then rests.[/awe] [somber]The name of the Chitimukulu, their great chief in the east, is spoken here with bowed heads.[/somber]`,
        pedi: `I have reached the ${name}. [awe]Round huts of thatch stand about the cattle kraal, grain baskets ride on poles out of the mice's reach,[pause] and at dusk the herd boys whistle their cattle home through the dust.[/awe] The chief's hut is the greatest of the ring.`,
        zulu: `I have reached the ${name}. [awe]Beehive huts of woven grass stand in a perfect ring around the cattle kraal,[pause] hide shields lean stacked by the gate.[/awe] [somber]The discipline of the old regiments lives on in the way the young men hold themselves.[/somber]`,
        san: `I have reached the ${name} at the desert's edge. [awe]Shelters of bent grass, slender bows with poisoned arrows, and water stored in ostrich-egg shells buried against the drought.[/awe] [somber]On the rocks nearby are paintings of eland and hunters.[pause] I had taken these people for a world apart — yet they speak of the cattle folk to the east as neighbours,[pause] and of debts and favours between them that go back further than I could follow.[/somber]`,
      }
      return (
        texts[p.people as string] ??
        `I have reached the ${name}. Simple huts of clay and reed huddle close to the water, and children run out to meet me, [pause]full of curiosity. The chief resides in the great hut at the center of the village. [somber]If I can win his goodwill,[pause] perhaps he will show me the way.[/somber]`
      )
    },
    // Return vignette (point 170): the situation CHANGED since the last visit —
    // describe only the change, in a shocked register. Keyed on people +
    // fromPhase_toPhase; only the rinderpest peoples ever reach it.
    villageReturn: (p: TextParams) => {
      const transitionKey = `${p.fromPhase as string}_${p.toPhase as string}`
      const texts: Record<string, Record<string, string>> = {
        maasai: {
          preDamaged_struck: `[fear]I came back to find the kraals empty.[/fear] Where cattle still stood last year — [somber]thinned, but alive[/somber] — there is nothing now but trodden earth. [pause] A wasted woman was gathering pods from the ground and looked straight through me; they say she lives on wild honey and is walking toward a certain death. [breath] Only the elders at their fire and the young men on guard still hold a remnant of the old order.`,
          struck_aftermath: `[somber]The famine I witnessed here has moved on — and taken half the people with it.[/somber] The great kraals stand open and silent; with the herds went the web of cattle-loans and kinship that bound these people together. [pause] Some have gone to the farming peoples in the hills; those who stayed ride raids more desperate than any I had heard of. [breath] And yet the ring of huts still stands, [emph]and the young men still leap their dance.[/emph]`,
          preDamaged_aftermath: `[fear]I came back and scarcely knew the place.[/fear] In the years I was away the plague went through these kraals [somber]like a fire[/somber]: the cattle I once watched at dusk are gone to the last head, and with them the web of cattle-loans and kinship that held this people together. [pause] Some have gone off to the farming peoples of the hills; those who remain ride desperate raids. [breath] Only the ring of huts still stands, [weary]and at evening the young men still leap their dance — thinner than I remember, but unbroken.[/weary]`,
        },
        sidama: {
          struck_aftermath: `[breath] I came back scarcely daring to hope — [somber]but the Evil Days lie behind them now.[/somber] The cattle pens still stand almost bare, mute witnesses to what I saw here; yet the enset groves carried them through the hunger. [pause] Today they roast the red coffee-berries again, [emph]a drink that would wake the dead,[/emph] and they offered me a cup as in better times.`,
        },
      }
      return (
        texts[p.people as string]?.[transitionKey] ??
        `[somber]I came back, and the place is not the one I left.[pause] What has happened here since my last visit stands unspoken in every face.[/somber]`
      )
    },
    giftRevered: (p: TextParams) =>
      `I presented my gift to the chief of the ${PEOPLES[p.people as string]}. [excited]His eyes lit up —[pause] I have found the very thing his people revere![/excited] He bowed his head and bade me welcome. [pause][excited]My standing here grows.[/excited]`,
    giftNeutral:
      'The chief accepted my gift with a polite nod. [somber]No light came into his eyes —[pause] it was not, I think, what his people hold dear.[/somber] [pause]But a beginning has been made.',
    giftRejected: (p: TextParams) =>
      `[fear]A grave mistake![/fear] No sooner had the chief of the ${PEOPLES[p.people as string]} laid eyes on my gift than his face darkened. [somber]What I offered counts among his people as an ill omen.[pause] I was led out without a word.[/somber] [breath][weary]It will take time to wear down this mistrust.[/weary]`,
    languageLesson: (p: TextParams) => {
      const texts: Record<string, string> = {
        north:
          'An old man by the fire spoke with me at length, with hands as much as words. He named the winds: [emph]"Nivera"[/emph] where the cold night wind is born — toward midnight —, "Chamsina" for the hot breath of noon, "Levantra" for the morning, "Gharbia" for the evening. [breath][excited]Now I understand:[pause] the North reads its directions from the origin of the wind, and [emph]"Nivera" means north![/emph][/excited]',
        west:
          'An elder drew four marks into the dust and spoke slowly: [emph]"koko"[/emph] toward midnight, [emph]"Katula"[/emph] toward the sunrise, "Phuthswama" toward noon, "Mimbumi" toward the sunset. [breath][excited]The words of the West are mine now:[pause] koko is north, Katula is east![/excited]',
        central:
          'By the fire an elder kept pointing at the great river, which his people call [emph]"Utomba"[/emph] — the Mongdamara. Everything lies "wa-Utomba" or "ka-Utomba": away from the river or toward it, "lem-Utomba" toward the sunrise side, "mos-Utomba" toward the sunset. [breath][excited]The forest measures the world from its river![/excited]',
        east:
          'An old herdsman raised his staff toward the shining mountain his people call [emph]"Odabi"[/emph] — the Unumpara. From it flow the directions: [emph]"Relolo"[/emph] beyond it toward midnight, "Dethamee" toward noon, "Salewa" toward the sunrise, "Munjori" toward the sunset. [breath][excited]The East measures the world from the holy mountain![/excited]',
        south:
          'An elder woman laughed at my compass and pointed at the sky: her people name the directions after the seasons — [emph]toward summer[/emph] is toward midnight, toward winter is noon, spring is the sunrise, autumn the sunset. [breath][excited]What a curious, beautiful way to carry the world![/excited]',
      }
      return texts[p.region as string]
    },
    hintRaw: (p: TextParams) => {
      const regionId = p.region as string
      const w = DIRECTION_WORDS[regionId as keyof typeof DIRECTION_WORDS]
      const texts: Record<string, string> = {
        north:
          'The chief leaned close and spoke in a low voice: [whisper]"You seek the tomb of the great king. ' +
          `Where the latitude counts ${dec(p.lat as number)} degrees toward [emph]${w.north}[/emph], there he rests beneath the sand."[/whisper] ` +
          `[breath][somber]${w.north} …[pause] I must learn what that word means;[/somber] [excited]then this number will show me the way.[/excited]`,
        east:
          'The chief pointed his staff far across the plain: [whisper]"Beyond the great desert, towards where Unumpara hides — ' +
          `where the longitude counts ${dec(p.lon as number)} degrees toward [emph]${w.east}[/emph], the old king sleeps."[/whisper] ` +
          `[breath][somber]${w.east} …[pause] another word I must decipher.[/somber]`,
        west:
          `The chief spoke of a land far toward [emph]${w.north}[/emph], beyond the great sand, where no grass grows: [whisper]"There, they say, a king of old was laid into the earth."[/whisper] [somber]If ${w.north} is a direction, this narrows my search.[/somber]`,
        central:
          `The chief murmured: [whisper]"Go [emph]${w.north}[/emph], away from ${GLOSSARY.congo}, until the trees end and the sand begins — under such sand the old kings sleep."[/whisper] [somber]The words of the forest still veil the direction from me.[/somber]`,
        south:
          `The chief gazed long toward the horizon: [whisper]"Many moons toward [emph]${w.north}[/emph], farther than ${GLOSSARY.zambezi}, farther than the great forest — where the land is nothing but sand, the great king lies."[/whisper] [somber]Toward ${w.north} … a season as a signpost?[/somber]`,
      }
      return texts[regionId]
    },
    hintDecoded: (p: TextParams) => {
      const regionId = p.region as string
      const texts: Record<string, string> = {
        north: `[excited]Deciphered![/excited] The chief's words mean: [emph]the tomb lies at latitude ${dec(p.lat as number)} degrees north.[/emph] [somber]Now I still need its longitude.[/somber]`,
        east: `[excited]Deciphered![/excited] "Salewa" is the sunrise: [emph]the tomb lies at longitude ${dec(p.lon as number)} degrees east.[/emph] [somber]Together with the latitude, the site is fixed.[/somber]`,
        west: '[excited]Now I understand the chief of the West:[/excited] the tomb lies [emph]north, beyond the edge of the great desert[/emph] — a land without grass.',
        central: '[excited]The forest\u2019s words open up:[/excited] the tomb lies [emph]north, away from the Congo, where the sand begins[/emph].',
        south: '[excited]The seasons speak:[/excited] "toward summer" means [emph]far north[/emph] — beyond the Zambezi, beyond the forests, in the great sand.',
      }
      return texts[regionId]
    },
    unspecific: (p: TextParams) =>
      `The chief nodded gravely, waved his hands and said again and again only [emph]"${p.word}"[/emph]. [somber]Whatever he knows, he cannot or will not say it in words I grasp.[/somber] [pause]But he pointed insistently toward the villages of the [emph]${PEOPLES[p.people as string]}[/emph] — [excited]they are said to know more.[/excited]`,
    giftLore: (p: TextParams) =>
      `The old man spoke of the treasures of his land: what his people revere above all is [emph]${ko.gifts[p.gift as keyof typeof ko.gifts]}[/emph]. [pause]A chief honored with it will open his heart.`,
    drumMessage:
      '[awe]The chief called his drummer, and two drums spoke for him — a great one and a small one.[/awe] [pause]Seven words, each of five beats, each parted from the next by the same short silence — deep for the low syllable, bright for the high one. [excited]I know these words. I have heard every one of them in the lanes and at the water.[/excited] [pause]I have written them down in the order they were beaten; what they ask of me I must read for myself.',
    rockArtefact:
      "[excited]Seven words, and they were an errand after all.[/excited] I followed the water against its own pull until the block of stone stood on the bank exactly as the drums had it — taller than a man, alone, nothing of its kind anywhere near it. [pause]Three spans down my shovel met something that was not stone: hammered metal on worn wood, sealed in the river's own clay. [awe]It has lain here longer than the village has stood.[/awe] [pause]I did not open it further. [somber]It is not mine to open.[/somber]",
    artefactGiven:
      "[breath]I carried it back down the river and laid it in the chief's hands.[/breath] [pause]He turned it over once and spoke three words over it. [excited]I had heard every one of them before — one at the stone by the lane, one where they were digging, one from the children at their game.[/excited] [pause][awe]He had sent me to a place he cannot name in any tongue of mine, and I went there and came back with what lay buried at it.[/awe] [pause][somber]We share no language.[pause] And yet we have just understood one another.[/somber]",
    digNothing: '[weary]I dug at this spot, but the sand yielded nothing except stones and old roots.[/weary]',
    victory: (p: TextParams) =>
      `${ko.formatDate(p.day as number, 1890)}. [excited]My shovel struck stone —[pause] hewn stone![/excited] [breath]With trembling hands I laid the burial chamber bare. [awe]Gold gleams in the torchlight, and upon the sarcophagus rests the mask of the great king.[/awe] [breath][awe]I have found it.[pause] The Heart of Africa.[/awe] [pause][somber]The journey was worth every step.[/somber]`,
    foodLow:
      '[somber]My provisions are running low.[/somber] I must reach a town or village soon, [pause]or hunger will become my constant companion.',
    foodOut:
      '[weary]The last of my provisions is gone.[pause] Hunger gnaws at me; every step comes harder than the one before.[/weary] [fear]I must find supplies,[pause] and quickly.[/fear]',
    dehydrationOn:
      '[weary]My tongue sticks to the roof of my mouth.[pause] Without a canteen the desert drinks me dry;[/weary] [fear]my steps are beginning to stray.[/fear]',
    dehydrationOver:
      '[somber]Water at last.[/somber] My strength returns with every sip, and my stride is steady again.',
    sunblindOver:
      '[somber]The white glare has faded from my eyes.[/somber] [excited]I can see clearly again![/excited]',
    woundHealed:
      '[somber]I changed the dressing today and found the wound closed at last.[/somber] [excited]My body has mended itself —[pause] I am whole again.[/excited]',
    woundEased:
      '[somber]The deep wound is knitting.[/somber] [weary]It still pulls at every step, but the worst is past —[pause] with rest and rations it will close on its own.[/weary]',
    medicineUsed:
      'I took the medicine. [pause][somber]The fever is breaking and my wounds are closing;[/somber] [excited]I shall be myself again soon.[/excited]',
    healthPoor:
      '[weary]I am at the end of my strength.[pause] My hands tremble as I write these lines.[/weary] [fear]If I do not find rest and relief soon, this journal will outlive me.[/fear]',
    animalAttack: (p: TextParams) => {
      const animal = ko.animals[p.animal as keyof typeof ko.animals]
      const openings: Record<string, string> = {
        lion: `[fear]I was attacked by ${animal}![/fear]`,
        cheetah: `[fear]In a blur of speed, ${animal} broke from the grass at me![/fear]`,
        leopard: `[fear]Out of nowhere ${animal} was upon me![/fear]`,
        hyena: `[fear]Jaws snapping, ${animal} closed in on me![/fear]`,
        snake: `[fear]I nearly stepped on ${animal}![/fear]`,
        crocodile: `[fear]The water erupted —[pause] ${animal}![/fear]`,
      }
      const results: Record<string, string> = {
        escaped: ' [excited]I escaped.[/excited]',
        defended: ' [excited]I used my weapon and drove the beast off.[/excited]',
        light: ' [somber]I was lightly injured.[/somber]',
        severe: ' [weary]I was severely wounded;[pause] every movement hurts.[/weary]',
      }
      return openings[p.animal as string] + results[p.result as string]
    },
    robbery: (p: TextParams) =>
      p.result === 'deterred'
        ? '[fear]Robbers blocked my path —[/fear] [excited]but one look at the rifle and they melted back into the bush.[/excited]'
        : `[fear]Robbers fell upon me![/fear] [somber]They took ${p.money} dollars before I could flee.[/somber]`,
    feverOn:
      '[weary]A fever burns through me.[pause] The land sways before my eyes, and my legs go where they will.[/weary] [fear]I must find medicine, or this wetland will be my grave.[/fear]',
    sunblindOn:
      '[fear]The desert light has scorched my eyes![/fear] [weary]The world is a white glare;[pause] I can barely make out my own hand.[/weary] Only far from the desert will they recover.',
    sandstorm:
      '[fear]A sandstorm swallowed the horizon![/fear] [weary]I crouched behind my pack for hours while the world turned to howling dust.[/weary] Precious time is lost.',
    sweptAway:
      '[fear]The current seized me and swept me over the falls![/fear] [weary]I dragged myself to the bank, battered and bleeding —[pause] half of my belongings are gone with the river.[/weary]',
    landmarkDiscovered: (p: TextParams) => {
      const name = ko.landmarks[p.landmark as keyof typeof ko.landmarks]
      const flavors: Record<string, string> = {
        mountain: `[awe]There it rose before me at last —[pause] ${name}, its flanks vast against the sky.[/awe] [excited]I have laid eyes on it, and my journal shall bear witness.[/excited]`,
        falls: `[awe]A distant thunder rolled over the land long before I saw it:[pause] ${name}![/awe] [excited]The river hurls itself into the deep in walls of white water —[pause] a sight I shall never forget.[/excited]`,
        lake: `[awe]A great water opened before me —[pause] ${name}, stretching away to the horizon like a sea.[/awe] [somber]I marked its shore upon my map.[/somber]`,
        grave: `[whisper]I walk among bleached bones and mighty tusks —[pause] the graveyard of the elephants.[/whisper] [awe]So the old tales told the truth after all.[/awe]`,
        'giza-pyramids': `[awe]There they stood across the river as the morning haze lifted —[pause] the three great pyramids of ${name}, and the lion-bodied guardian crouched before them.[/awe] [excited]Raised by African hands four thousand years before any European empire —[pause] the oldest of all the wonders, and it stands in Africa.[/excited]`,
        pyramids: `[awe]Steep pyramids crowd the Nile's east bank —[pause] ${name}, the royal city of Kush.[/awe] [excited]A kingdom that raised these tombs and wrote in its own script —[pause] an African realm in its own right, no shadow of Egypt.[/excited]`,
        'stone-city': `[awe]Mortarless walls of fitted granite curve across the hill, crowned by a great conical tower —[pause] ${name}.[/awe] [somber]African hands raised this capital, whatever the settlers back home care to claim.[/somber]`,
        'rock-churches': `[awe]Churches hewn downward out of the living rock, cross upon cross sunk into the stone —[pause] ${name}.[/awe] [excited]The work of a Christian Ethiopian kingdom,[pause] and worshippers kneel in them still.[/excited]`,
        'coastal-ruins': `[somber]Coral-stone walls and broken arches stand above the tideline —[pause] ${name}.[/somber] [awe]A Swahili city that minted its own coin and traded clear across the Indian Ocean, long before any European sail.[/awe]`,
        stelae: `[awe]Granite needles taller than any mast rise from the grass, one fallen giant among them —[pause] the stelae of ${name}.[/awe] [excited]The Aksumite kingdom carved these, struck its own coinage and traded across the Red Sea —[pause] an African power of the first rank.[/excited]`,
        castles: `[awe]Stone castles with battlements and round towers stand on the highland —[pause] ${name}, seat of Ethiopia's emperors.[/awe] [somber]African masons raised every wall of it, against everything the colonial accounts care to claim.[/somber]`,
        'cliff-dwellings': `[awe]Dwellings terraced into the sheer escarpment, granaries clinging to ledges high above the plain —[pause] ${name}.[/awe] [excited]The Dogon read this land vertically, building their homes over the older houses of the Tellem.[/excited]`,
        crater: `[awe]The rim fell away beneath me into a vast green bowl —[pause] ${name}, a walled world teeming with game.[/awe] [somber]Its ring stands against the plains like a rampart raised by the earth itself.[/somber]`,
        volcano: `[fear]The ground trembled underfoot,[pause] and above me the steep cone smoked —[/fear] [awe]${name}, the mountain the Maasai call the mountain of God.[/awe] [whisper]I did not linger on its slopes.[/whisper]`,
        delta: `[awe]A river that never finds the sea —[pause] ${name}, spending itself into the sands.[/awe] [excited]Its waters braid into a maze of channels and reed islands as far as the eye reaches.[/excited]`,
        wetland: `[somber]The Nile simply vanishes here —[pause] swallowed by ${name}, an endless papyrus swamp.[/somber] [weary]For days the channel loses itself among floating reed;[pause] no bank, no landmark, only green.[/weary]`,
      }
      return flavors[p.kind as string] ?? flavors.mountain
    },
    mountainNoRope:
      '[weary]No rope in hand, and yet there is no way around this range.[/weary] [fear]I climb slowly, hold by hold —[pause] one slip here and the rock will not catch me.[/fear]',
    penaltyJungle:
      '[weary]The jungle closes in, thick with vine and thorn.[/weary] [emph]Without a machete[/emph] I must force every step —[pause] a blade in hand would open the way.',
    penaltyWater:
      '[weary]The water bars my path, and I have no canoe.[/weary] I wade and swim across, slow and soaked;[pause] [emph]a canoe[/emph] would carry me over with ease and keep the crocodiles at bay.',
    penaltyCanoeLand:
      '[weary]The canoe on my back is a heavy burden overland.[/weary] It drags at every step —[pause] [emph]for long stretches on foot[/emph] I had better leave it behind in a camp.',
    dangerUnarmed:
      '[somber]I set out into the wilds,[pause] and it struck me that I carry no weapon.[/somber] [fear]Lions, leopards and snakes prowl this country.[/fear] [emph]A rifle in the pack[/emph] is the surest protection —[pause] better even than a machete.',
    dangerDesert:
      '[weary]The desert blazes without mercy.[/weary] [fear]Without water, thirst and the sun-blindness threaten —[pause] and the blindness can kill.[/fear] [emph]A filled canteen[/emph] holds off the thirst;[pause] against the blindness, only leaving the desert will serve.',
    dangerWater:
      '[fear]Crocodiles lie in wait in the water.[/fear] [weary]Without a canoe I am at their mercy, and my rifle turns wet and useless.[/weary] [emph]A canoe[/emph] carries me across safely and keeps the weapon dry;[pause] failing that, only the machete helps.',
    dangerWaterCanoe:
      '[fear]Crocodiles lie in wait in the water —[pause] I see their eyes above the surface.[/fear] [somber]Good that the canoe carries me:[/somber] [emph]out of their reach,[/emph] and the rifle stays dry aboard.',
    dangerWetland:
      '[somber]A damp haze hangs over the thicket.[/somber] [fear]Here the fever breeds, clouding the mind and draining the strength.[/fear] [emph]Medicine in the pack[/emph] cures it —[pause] I should always keep some at hand.',
    mountainFall:
      '[fear]The rock gave way beneath my foot, and I fell![/fear] [weary]Bruised and dazed I came to rest far below —[pause] without a rope this ascent nearly became my end.[/weary]',
    mountainFallItem:
      '[fear]The rock gave way beneath my foot, and I fell![/fear] [weary]Bruised, I dragged myself onward —[pause] and in the fall a piece of my gear tore loose and vanished into the depths.[/weary]',
    findRemains: (p: TextParams) =>
      `[somber]I came upon the remains of a traveler who made it no farther.[pause] A grim warning of this land.[/somber] Among the bones lay a purse with ${p.money} dollars — [whisper]may they serve a better fate.[/whisper]`,
    deadline1:
      '[somber]A letter reached me from the financiers.[pause] Their patience is thinning: more than half the granted time is spent, and I have no tomb to show.[/somber] [emph]I must press on.[/emph]',
    deadline2:
      '[fear]The final warning![/fear] [somber]The financiers write that the expedition will be recalled soon.[pause] If I do not find the tomb now, everything was in vain.[/somber]',
    successor:
      "[somber]I take up this journal from the hands of my predecessor, who gave everything for it.[pause] His notes shall guide me.[/somber] [emph]The search continues where he left off.[/emph]",
    treasureFound: (p: TextParams) =>
      `[excited]My shovel struck something hard![/excited] [breath]From the earth I lifted a cache of [emph]${ko.treasures[p.treasure as keyof typeof ko.treasures].toLowerCase()}[/emph] — buried long ago and forgotten by all but the sand. [awe]Fortune smiles on the patient digger.[/awe]`,
    ivoryFound: (p: TextParams) =>
      `[awe]The elephant graveyard.[pause] Bleached bones tower about me like the ribs of stranded ships.[/awe] [somber]With quiet reverence I freed ${p.count === 1 ? 'a great tusk' : `${p.count} great tusks`} from the ground —[pause] ivory of a purity I have never seen.[/somber]`,
    bounty: (p: TextParams) => {
      const names = [namesFromCsv(p.villages, ko.places), namesFromCsv(p.landmarks, LANDMARKS)].filter(Boolean).join(', ')
      return `[excited]The geographic society has honored my reports![/excited] For ${p.count} documented ${Number(p.count) === 1 ? 'discovery' : 'discoveries'} — [emph]${names}[/emph] — they sent word ahead: a [emph]telegraphic transfer[/emph] of [emph]${p.amount} dollars[/emph] awaited me at the port. [pause]Exploration, it turns out, can pay for its own provisions.`
    },
    ferry: (p: TextParams) =>
      `I booked passage from ${ko.places[p.from as string]} to ${ko.places[p.to as string]}. [pause]${p.days} days at sea — [somber]the coast slid past like a slow panorama,[/somber] [excited]and I arrived rested, with dry boots for once.[/excited]`,
    valuableRevered: (p: TextParams) =>
      `No sooner had I entered the village than eyes turned to the [emph]${ko.treasures[p.treasure as keyof typeof ko.treasures].toLowerCase()}[/emph] in my hand. [excited]Murmurs of awe followed me through the lanes —[pause] the ${PEOPLES[p.people as string]} revere what I carry.[/excited]`,
    valuableRejected: (p: TextParams) =>
      `[fear]A mistake to carry it openly![/fear] The ${PEOPLES[p.people as string]} shrank back from the [emph]${ko.treasures[p.treasure as keyof typeof ko.treasures].toLowerCase()}[/emph] in my hand as from an ill omen. [somber]Doors closed;[pause] mothers pulled their children inside.[/somber]`,
    friendPledge: (p: TextParams) =>
      `[awe]The chief of the ${PEOPLES[p.people as string]} rose and laid both hands upon my shoulders.[/awe] Before the assembled village he named me [emph]Honored Friend[/emph] of his people. [excited]"Wherever our villages stand," he pledged, "our people shall watch over you."[/excited] [breath][somber]I bowed deeply.[pause] Such a gift weighs more than gold.[/somber]`,
    friendRescue: (p: TextParams) => {
      const animal = ko.animals[p.animal as keyof typeof ko.animals]
      const hurt = p.result === 'light' ? ' [somber]I was only lightly injured.[/somber]' : ' [excited]I escaped unharmed.[/excited]'
      return `[fear]I was attacked by ${animal}![/fear] [excited]A group of the ${PEOPLES[p.people as string]} rushed to my aid at once and drove the beast away.[/excited]${hurt} [pause][somber]I owe these people my life.[/somber]`
    },
    friendRescueRobbers: (p: TextParams) =>
      `[fear]Robbers blocked my path —[/fear] [excited]but men of the ${PEOPLES[p.people as string]} appeared from the bush with spears raised, and the bandits scattered like startled birds.[/excited] [somber]The chief's pledge is worth more than any rifle.[/somber]`,
    friendAid: (p: TextParams) =>
      `[weary]I could go no farther;[pause] the land swam before my eyes.[/weary] [somber]Then hands lifted me —[/somber] [excited]people of the ${PEOPLES[p.people as string]} had found me.[/excited] They brought water, food and bitter medicine, and stayed until my strength returned. [pause][awe]I am alive because I am their friend.[/awe]`,
    friendSupplies: (p: TextParams) =>
      `In the village of the ${PEOPLES[p.people as string]} I was received like family: [excited]they filled my packs with provisions and pressed medicine into my hands,[/excited] and no one would hear of payment. [pause][somber]The friendship of this region is my safest possession.[/somber]`,
    robberyCommitted: (p: TextParams) =>
      `[somber]I have done a thing that cannot be undone.[/somber] [fear]With the rifle raised I emptied the hut of the ${PEOPLES[p.people as string]} and fled the village.[/fear] [breath][weary]The haul: ${p.money} dollars, ${p.gifts} trade goods and ${p.food} days of provisions.[pause] Behind me: screams, and a silence worse than the screams.[pause] No hut of this region will ever open to me again.[/weary]`,
    campLooted:
      '[somber]I found my camp torn apart —[pause] the poles thrown down, the ground churned by strange feet.[/somber] [weary]Everything I had left behind is gone.[/weary] [fear]Nothing in this wilderness is safe that is not carried or guarded.[/fear]',
  },
}

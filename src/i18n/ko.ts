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
      canoeOnLand: '육지에서 카누는 무거운 짐이 되어 속도를 늦춘다 — 긴 도보 구간에는 캠프에 두는 편이 낫다.',
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
      stateNote: '전체 게임 상태, 밸런스 값, UI 상태의 JSON.',
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
    audienceIntro: (mood) => `족장의 반쯤 어둠 속에서, 족장이 조각한 나무 위에 앉아 있다. ${mood}`,
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
    walkSpeed: '보행 속도 (마을 안)',
    strafeFactor: '횡걸음/후진 비율',
    walkerUnstuck: '주민 끼임 해소 (초)',
    placeCollisionFactor: '마을 충돌 (진입 반경 비율)',
    startupFreezeBudget: '로딩 화면 멈춤 예산 (ms)',
    labelOverlayMax: '이름 라벨 (최대)',
    mouseSensitivity: '마우스 감도 (1인칭)',
    lookPitchLimit: '상하 시선 한계 (°)',
    unstuckStallDistance: '끼임: 진행 임계 (m)',
    unstuckStallSeconds: '끼임: 힌트 노출 (초)',
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
    speechHearingFalloff: '말소리: 감쇠 기울기',
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
      departure: '출발',
      region: (p: TextParams) => `${ko.regions[p.region as keyof typeof ko.regions]} 지역`,
      arrival: (p: TextParams) => `${PLACES[p.place as string]} 도착`,
      portReturn: (p: TextParams) => `${PLACES[p.place as string]}에 다시`,
      village: (p: TextParams) => PLACES[p.place as string],
      villageReturn: (p: TextParams) => `${PLACES[p.place as string]}로 돌아옴`,
      monument: (p: TextParams) => PLACES[p.place as string],
      monumentReturn: (p: TextParams) => `${PLACES[p.place as string]}에 다시`,
      audience: '족장 접견',
      mistake: '중대한 실수',
      chiefHint: '족장의 말씀',
      drumMessage: '북의 메시지',
      rockArtefact: '큰 바위 아래에서',
      artefactGiven: '족장의 손에',
      decoded: '해독했다!',
      unspecific: '모호한 중얼거림',
      giftLore: '백성이 숭상하는 것',
      language: (p: TextParams) => `${ko.regions[p.region as keyof typeof ko.regions]} 지역의 언어`,
      victory: '아프리카의 심장',
      foodLow: '식량이 바닥나다',
      foodOut: '식량 소진',
      dehydration: '갈증',
      recovery: '회복',
      healthPoor: '힘이 다하다',
      attack: '습격을 받았다!',
      robbery: '강도',
      fever: '열병',
      sunblind: '눈이 부시어',
      sandstorm: '모래폭풍',
      sweptAway: '물에 휩쓸림',
      mountainClimb: '밧줄 없이 산으로',
      penaltyJungle: '밀림을 뚫으며',
      penaltyWater: '물 속으로',
      penaltyCanoeLand: '육지 위의 카누',
      dangerUnarmed: '소총 없는 야생',
      dangerDesert: '사막의 작열',
      dangerWater: '매복한 악어',
      dangerWetland: '수풀의 열병',
      mountainFall: '추락',
      landmarkDiscovered: (p: TextParams) => {
        const name = ko.landmarks[p.landmark as keyof typeof ko.landmarks]
        const titles: Record<string, string> = {
          mountain: `${name}이(가) 보인다`,
          falls: `${name}의 울림`,
          lake: `내륙의 바다: ${name}`,
          grave: '코끼리가 죽는 곳',
          pyramids: `${name}의 피라미드`,
          'giza-pyramids': `${name}의 대피라미드`,
          'stone-city': `${name}의 석벽`,
          'rock-churches': `${name}의 바위 교회들`,
          'coastal-ruins': `${name}의 유적`,
          stelae: `${name}의 스텔라`,
          castles: `${name}의 성`,
          'cliff-dwellings': `${name}의 벼랑`,
          crater: `초록의 분화구: ${name}`,
          volcano: `연기를 뿜는 산: ${name}`,
          delta: `모래 속으로 사라지는 강: ${name}`,
          wetland: `거대한 습지: ${name}`,
        }
        return titles[p.kind as string] ?? `${name}이(가) 보인다`
      },
      discovery: '소름 끼치는 발견',
      deadline1: '후원자로부터의 편지',
      deadline2: '마지막 경고',
      successor: '새로운 손',
      treasure: (p: TextParams) => {
        const name = p.treasure ? ko.treasures[p.treasure as keyof typeof ko.treasures] : undefined
        return name ? `땅속에서 나온 ${name}` : '뼈 사이의 상아'
      },
      bounty: '발견의 보상',
      ferry: '바다 횡단',
      valuableReaction: '내 손의 보물',
      friend: '존경받는 친구',
      rescue: '마을 사람들의 구원',
      friendSupplies: '이 지역의 손님',
      robberyCommitted: '용서받을 수 없는 짓',
      campLooted: '약탈당한 캠프',
    },
    start:
      '카이로, 1890년 1월. [excited]오늘 나의 원정이 시작된다.[/excited] 호주머니에 250달러와 한 묶음의 교역 선물, 그리고 상식보다 더 많은 희망을 안고, 나는 아프리카의 심장을 — [awe]위대한 왕의 전설적인 무덤을[/awe] — 찾아낼 것이다. [breath][somber]행운이 나와 함께 하기를.[/somber]',
    regionEntry: (p: TextParams) => {
      const texts: Record<string, string> = {
        north:
          '[awe]사막이다![pause] 눈에 닿는 끝까지 모래와 빛의 바다.[/awe] 더위가 모래 위에서 아른거리는데, 이상하게도 마음이 고양된다. [pause]북방의 백성들은 바람이 부는 쪽으로 방향을 읽는다고 한다. [somber]먼저 그들의 단어를 배워야겠다.[/somber]',
        west:
          '끝없는 사바나, [awe]저녁 노을에 금빛으로 물든다.[/awe] 우산형 아카시아 나무가 광활함 위에 파수꾼처럼 서 있고, 멀리서 무리들이 이동하고 있다. [excited]서부는 나를 자유의 감정으로 맞아준다[/excited] — 그리고 이곳에서는 나침반의 네 방위를 다른 말로 부른다는 의심이 따른다.',
        central:
          '[fear]정글이 나를 통째로 삼켰다.[/fear] 녹색 황혼, 새들의 비명, 축축한 공기가 젖은 천처럼 가슴에 내려앉는다. [weary]마체테가 없으면 한 발짝도 앞으로 나아가지 못하겠다.[/weary] [breath][somber]여기서 모든 것은 생명이며,[pause] 모든 것은 위험이다.[/somber]',
        east:
          '산과 호수가 하늘을 그대로 비추는 맑기를 가졌다. [awe]동방에서는 설산의 봉우리가 구름 위로 솟아 있다 —[pause] 아프리카 한가운데서 이런 광경이라니![/awe] 이곳의 백성들은 [emph]"Odabi"[/emph]라고 부르는 곳들을 기준으로 세상을 잰다.',
        south:
          '남방의 고원. [pause]그 모든 더위 뒤의 서늘하고 맑은 공기, 끝없이 넓은 하늘 아래 드넓은 초원. 이곳의 사람들은, 듣자하니, 방향을 말하고 싶을 때 계절을 일컬은다고 한다. [pause][awe]정말 기이하고도 아름다운 땅이구나.[/awe]',
      }
      return texts[p.region as string]
    },
    portArrival: (p: TextParams) =>
      `${PLACES[p.place as string]}에 닿았다. [excited]항만의 소란, 상인들의 외침, 소금과 향신료의 냄새[/excited] — 여기서 식량을 보충하고 힘을 기를 수 있다. [pause]내 기록은 안전히 치웠다. [mute](체크포인트 저장됨)[/mute]`,
    // The first entry into a port (point 394): what the traveller actually sees
    // on arriving at THAT city in ~1890 — Khartoum a ruin opposite the Khalifa's
    // Omdurman, Timbuktu a mud town in the sand, Boma a bolted-together station.
    // Berbera reads its documented fair season (docs/peoples-1890.md §4.0.2).
    portFirstVisit: (p: TextParams) => {
      const name = PLACES[p.place as string]
      const texts: Record<string, string> = {
        cairo: `카이로의 성문, 그리고 그곳의 소란. [excited]나귀를 모는 아이들이 요금을 외치고, 드라고맨들이 여섯 개나 되는 말로 자기를 팔자고 소리를 지르며, 무스키의 지붕 덮인 골목은 너무 좁아서 짐을 단 낙타 두 마리가 온 거리를 막아버린다.[/excited] [awe]지붕 너머로 시타델의 미나aret들이 서 있고, 그 너머엔 피라미드가 있는 사막의 갈색 선이 보인다.[/awe] [somber]영국 장교들은 마치 이 나라가 자기네 것이라도 된다는 듯 에즈베키예 정원에서 커피를 마신다.[/somber]`,
        tangier: `[awe]탕헤르는 희다 — 언덕을 타고 오르는 석회가 바른 입방체의 더미, 그 위 카스바와 술탄의 깃발.[/awe] 부두는 없다: 증기선이 만 바깥에 닻을 놓고, 무어인 보트꾼들이 파도를 저어 우리를 데려다 해안 마지막 몇 야드는 어깨에 메고 내렸다. [pause]성벽 바깥의 큰 시장이 언덕 위에 펼쳐진다, 곡물과 숯, 그리고 리프에서 내려온 시골 사람들. [somber]유럽 절반의 영사관들이 한 거리를 따라 서로를 지켜보고 있다; 모로코는 아직 술탄의 것이고, 여기서 모든 사람은 기다리고 있다.[/somber]`,
        khartoum: `[somber]하르툼은 폐허다.[/somber] 도시가 함락되고 고든이 궁전 계단에서 죽은 뒤로, 그의 벽돌들은 물 건너 할리파 자신의 도시 움두르만을 짓는 데 쓰였다; 영사관이 있던 자리의 거리에는 풀이 자란다. [pause][awe]두 나일 강이 만나는 곳 아래로 — 짙고 빠른 청나일강이 엷은 백나일강을 거슬러 흐르고 — 수단의 모든 교통이 그 나루에서 건너간다.[/awe] [fear]나는 여기서 용인될 뿐이다. 그게 내 처지의 전부다.[/fear]`,
        'st-louis': `[awe]세인트루이스는 강어귀의 긴 섬 위에 있으며, 내가 아프리카에서 본 것 중 가장 프랑스적이다:[pause] 철제 발코니가 있는 두 층집, 자로 그은 거리, 주지사 관저의 삼색기.[/awe] 배로 만든 다리가 본토까지 이어지고, 그 길은 여기서 다카르까지 이어진다. [excited]부두의 격납고에서는 세네갈의 검은 고무가 전부 달고 부대져,[/excited] 구 무역상 가문의 시냐르들이 이 위도에서 기대하지 않던 수준으로 살림을 차린다.`,
        timbuktu: `[somber]팀북투 — 정직하게 적어두겠다: 책의 금빛 도시는 회색 진흙의 마을이다.[/somber] 모래가 집 사이로 들어왔고, 통째로 빈 구역이 있으며, 이곳 시장은 제네의 그것에 비하면 초라하다. [awe]그러나 위대한 모스크들은 여전히 서 있다, 진흙과 튀어나온 나무로 된 징그레베르의 탑이 모든 평평한 지붕 위로,[pause] 그리고 소금은 타우데니에서 여전히 사람을 한 명 길이로 쪼갠 덩어리로 내려온다, 사막에서 쉰 일의 여정을 지나.[/awe] [fear]투아레그가 원하는 대로 그 마을의 값을 가져간다; 다른 법은 거기 없다.[/fear]`,
        lagos: `[fear]라고스는 해안 모래톱 너머로 들어간다,[/fear] 그 모래톱이 거의 우리를 잡을 뻔했다: 증기선이 물결 속에 멈춰 있고, 파도 보트가 우리를 너울터는 물 너머로 데려갔고, 크루 사람들이 노를 짓는 박자를 불렀다. [pause][awe]그 뒤로 석호가 물레방아 같은 고요함으로 펼쳐지고, 그 위에 마을이 자리한다 — 영국 깃발, 골판지 철 지붕, 그리고 바히아에서 돌아온 해방 노예들이 페르남부쿠의 셔터와 회반죽으로 지은 온통 한 구역.[/awe] [somber]여기서는 모든 것이 팜유 냄새를 풍기고, 모든 것이 팜유 통으로 환산된다.[/somber]`,
        boma: `[somber]보마는 도시가 아니다; 그것은 주둔소다.[/somber] 해안으로 조각조각 보내진 뒤 그 자리에서 볼트로 조여 만든 철제 가옥들, 파란 기와 금색 별의 기수가 꽂힌 깃대, 양쪽의 빈터로 다가오는 맹그로브. [pause][awe]콩고 강이 두 리 길이로 넓고 갈고 조용히 흘러가며, 바다는 아직도 그 아래로 60마일이다.[/awe] [fear]격납고에는 상아가 장작처럼 쌓여 있고, 그것을 데려오기 위해 무엇이 들었는지 아무도 소리 내어 말하지 않는다.[/fear] [weary]열병이这里的 직원들을 앓아지게 했다; 물가 근처에서 자지 말라는 경고를 들었다.[/weary]`,
        berbera:
          p.situation === 'deserted'
            ? `[somber]더운 계절의 베르베라는 해안 위의 이름이다.[/somber] 박의 막 마을은 그것을 가져온 낙타들에 등에 한 묶음씩 나르며 떠났다; 남은 것은 몇 개의 석조 가옥, 우물, 그리고 한겨울 내내 이만 명이나 캠프를 친 그 텅 빈 마른 땅이다. [fear]우물가의 한 남자가 아주 침착하게, 지금은 사자들이 물을 마시러 내려온다고 내게 말했다.[/fear] [weary]카리프가 산에서 오븐의 숨결처럼 내려오고, 이 곳의 거래는 그늘 속, 거의 속삭임처럼 이루어진다.[/weary]`
            : `[excited]제철의 베르베라는 매트 도시다.[/excited] 수천 개의 매트와 나뭇가지로 만든 오두막이 해안을 따라 세워졌고, 오가덴과 하라르에서 대상단이 들어왔다 — 한 백 마리씩의 낙타, 해변을 덮는 양 무리, 가죽, 고무, 타조 깃, 엮은 바구니의 커피. [awe]두우가 아덴을 기다리며 항구 밖의 정박지에 누워 있다.[/awe] [somber]이 곳의 누구도 그것이 영원하지 않다고 믿지 않으며, 그것이 옳다.[/somber]`,
        zanzibar: `[awe]잔지바르는 보이기 전에 냄새로 안다 — 바람 위의 정향, 꽤 먼 바다에서.[/awe] 항구는 두우 돛대들의 숲이다; 술탄의 궁전과 경이로운 새 저택이 철제 발코니의 단으로 해안가를 따라 서 있고, 그 뒤로 돌의 도시는 두 사람이 겨우 지나가는 골목으로 닫혀 있다, 모든 문이 금고처럼 조각되고 박혀 있다. [pause]대륙 전체의 대상단이 여기서 준비된다 — 짐꾼, 천, 구슬, 철사 코일 — 그리고 이 바다의 모든 영사가 대리인을 두었다. [somber]사람들이 팔리던 시장은 17년 전에 닫혔다; 그 거래 자체는 다만 내륙으로 옮겨갔을 뿐이다.[/somber]`,
        capetown: `[awe]테이블 산이 자신의 식탁보를 펼쳐놓은 벽처럼 마을 위에 서 있고,[/awe] 내가 지나온 아프리카의 뒤를 이어, 케이프타운은 충격이다: 가스등, 떡갈나무 가로수, 우편 증기선이 가득한 부두, 그리고 애들러리 거리는 다이아몬드와 랜드의 새 금에 관한 이야기뿐이다. [pause]마을 위의 말레이 구역은 자기 시간을, 자기 기도 호출을 지킨다. [somber]철도는 여기서 킴벌리로, 해마다 더 멀리 뻗는다; 이 거리에서 정해진 것은 천 마일 북쪽까지 닿는다.[/somber]`,
      }
      const text =
        texts[p.place as string] ??
        `${name}에 도착했다. [excited]항구, 상인들의 외침, 소금과 타르의 냄새[/excited] — 더 나아가기 전에 짐을 정리할 곳이다.`
      return `${text} [pause]내 기록은 안전히 치웠다. [mute](체크포인트 저장됨)[/mute]`
    },
    // Re-entering a port whose situation has changed (point 394): only the
    // change is described. Berbera's fair season is the one modelled today.
    portReturn: (p: TextParams) => {
      const transitionKey = `${p.fromSituation as string}_${p.toSituation as string}`
      const texts: Record<string, Record<string, string>> = {
        berbera: {
          fair_deserted: `[somber]내가 마지막으로 여기 섰을 때보다 베르베라는 비었다.[/somber] 매트의 온 마을은 사라졌다 — 그것을 가져온 낙타 등에 한 묶음씩 나르고 — 대상단이 누워 있던 해안은 텅 빈 그을린 땅이다. [pause][fear]우물에서 사람들은 조금도 놀라지 않고, 이 계절에는 사자들이 물을 마시러 내려온다고 내게 말했다.[/fear]`,
          deserted_fair: `[excited]베르베라는 다시 채워졌다.[/excited] 내가 텅 빈 땅을 걸었던 그 자리에 매트와 나뭇가지의 오두막이 한 마일이나 서 있다, 오가덴에서 한 백 마리씩의 낙타가 들어오고, 두우가 아덴으로 가져갈 가죽과 고무가 쌓여 있다. [pause][awe]같은 해안인데, 알아보지 못하겠다.[/awe]`,
        },
      }
      const text =
        texts[p.place as string]?.[transitionKey] ??
        `[somber]${PLACES[p.place as string]}는 내가 떠난 도시가 아니다.[pause] 지난번 방문 이후 무엇이 변했는지 거리 위에 분명히 서 있다.[/somber]`
      return `${text} [pause]내 기록은 안전히 치웠다. [mute](체크포인트 저장됨)[/mute]`
    },
    // Arrival at a walkable monument site (point 394; research: docs/giza-1890.md):
    // the PERIOD picture, not the modern postcard — Khufu's broken apex, Khafre's
    // pale casing cap, the Sphinx buried to the shoulders — and the Nile flood of
    // the visit date, which before the dam made the plateau an island every autumn.
    monumentFirstVisit: (p: TextParams) => {
      const flood = p.situation === 'flood'
      const texts: Record<string, string> = {
        giza: flood
          ? `[awe]범람이 시작되었고, 피라미드들은 섬 위에 서 있다.[/awe] 사막 가장자리에서 뒤를 돌아보니 카이로의 야자수들까지 닿는 갈색 물결의 시트, 그 위의 격벽 같은 인공제방, 그리고 모든 마을이 자기 둔덕 위에 앉아 있다. [pause][awe]쿠푸는 황갈색 계단 산인데 꼭대기가 평평히 부러져 있다; 옆의 카프레는 아직 정상 근처에 옛 외장의 창백하고 매끈한 뚜껑을 쓰고 있어,[pause] 마치 두 번째, 더 정교한 정상이 첫째 위에 얹힌 것 같다.[/awe] [somber]스핑크스는 머리와 가슴 일부만 드러나 있다 — 발과 몸과 둘레는 모래 아래 묻혀 있고, 얼굴은 수 세기 동안 코가 없다.[/somber] [pause]호텔의 나귀꾼들은 이 계절에 보트로 손님을 태우러 나가고, 그것으로 손해도 보지 않는다.`
          : `[awe]마침내 대피라미드 아래 섰다, 어떤 판화도 그에 대비해 주지 못한다:[pause] 황갈색 계단의 산, 정상은 평평하게 부러져 있고, 단이 너무 깊어 하나하나 끌려 올라가야 한다.[/awe] 옆의 카프레는 정상 가까이에 옛 외장의 창백하고 매끈한 뚜껑을 쓰고 있다, [emph] 마치 두 번째, 더 정교한 정상이 첫째 위에 얹힌 것 처럼.[/emph] [pause][somber]스핑크스는 머리와 가슴 일부만 자유롭다; 발, 몸, 둘레 전체가 모래 아래에 있고, 얼굴은 수 세기 동안 코가 없다.[/somber] [pause]고원 아래로는 논마른 갈라진 들판이 있고, Cook의 사람들은 호텔에서 나귀를 타고 올라오는 동안 안내인들이 동전 한 푼을 두고 다투다.`,
      }
      return (
        texts[p.place as string] ??
        `[awe]${PLACES[p.place as string]}에 도착했다, 그리고 한참을 그것 앞에 서서 한 글자도 적지 못했다.[/awe] [pause]어떤 것들은 어떤 기록보다 오래되었다.`
      )
    },
    // Re-entering a monument site in a changed situation (point 394).
    monumentReturn: (p: TextParams) => {
      const transitionKey = `${p.fromSituation as string}_${p.toSituation as string}`
      const texts: Record<string, Record<string, string>> = {
        giza: {
          lowWater_flood: `[awe]홍수기에 기자로 돌아왔다, 그리고 고원은 섬이 되었다.[/awe] 내가 걸었던 갈라진 들판은 지평선까지의 갈색 호수이고, 그 위의 인공제방은 격벽처럼 서 있고, 나귀가 기다리던 사막 끝까지 보트가 닿는다. [pause][somber]돌 하나 움직인 것은 없으나, 물 때문에 그곳의 전체 풍경이 다르게 서 있다.[/somber]`,
          flood_lowWater: `[somber]내가 여기 있을 동안 물은 땅에서 빠져나갔다.[/somber] 도시와 고원 사이에서 호수가 보이던 자리엔 가장자리가 초록으로 변하는 검은 갈라진 진흙이 있고, 물레의 소가 돌고 있으며, 인공제방은 평범한 도로가 되었다. [pause][awe]피라미드들은 마른 들판 위에서 홍수 때보다 더 크게 보인다 — 그들과 눈 사이에 아무것도 남지 않았다.[/awe]`,
        },
      }
      return (
        texts[p.place as string]?.[transitionKey] ??
        `[somber]${PLACES[p.place as string]}로 돌아왔다, 그리고 계절이 해보다 그곳을 더 바꾸어 놓았다.[/somber]`
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
        tuareg: `나는 ${name}에 도착했다 — 사막의 파란 베일 기수들의 캠프. [awe]가죽의 낮은 천막, 모래에 엎드린 낙타, 그리고 얼굴을 쪽빛 천으로 감싼 남자들 —[pause] 투아레그에서는 베일을 쓰는 쪽이 남자이며, 여자가 아니다.[/awe] 그들의 소금 대상단은 텅 빈 사막을 몇 주씩 가로지른다. [somber]족장은 큰 천막에서 이방인을 맞는다고 한다.[/somber]`,
        berbers: `나는 아틀라스 산기슭 높이 자리한 ${name}에 도착했다. [awe]석재와 흙의 평평 지붕 집들이 테라스로 언덕을 타고,[pause] 호숫가엔 호두나무 숲이 서 있고,[/awe] 베틀에서 여인들이 내가 집으로 가져갈 수 있는 어떤 것보다도 밝은 양탄자를 짠다. 두목의 집은 테라스 위에 자리한다.`,
        nubians: `나는 대하岸边의 ${name}에 도착했다. [awe]문 주위에는 대담한 무늬가 칠해졌고,[pause] 대추야자가 강기슭으로 드리늘어져 있으며, 물레가 나일강의 물을 좁은 테라스로 들어올리며 끼걱거린다.[/awe] [somber]그러나 지금 이곳은 변경이다: 남쪽으로 향하는 강 길을 군인들이 지키고, 사람들은 멀리 할리파의 지배에 대해,[pause] 그리고 최근 가축을 비운 기근의 해에 대해 낮게 말한다.[/somber] [somber]고대 왕의 피라미드들이 여기서 멀지 않다고 한다 —[pause] 이 땅은 그 모든 것보다 오래되었다.[/somber]`,
        bambara: `나는 ${name}에 도착했다. [awe]진흙을 쌓아 만든 곡물 저장고는 다리 위에서 큰 밀봉 단지처럼 서 있고,[pause] 수수밭은 지평선까지 이어지며,[/awe] 문 위에는 영양의 조각상이 새겨져 있다 — 사람들에게 농경을 처음 가르킨 영혼이라고 한다. 족장의 울타리는 마을 한가운데 있다.`,
        hausa: `나는 사헬의 성벽 도시인 ${name}에 도착했다. [excited]쪽빛 물들이 든 염색조가 문 곁에서 김을 올리고, 가죽공들이 유명한 붉은 가죽을 재단하고 도장 찍으며,[pause] 누빈 갑옷의 기마병들이 새들보다 더 시끄러운 시장을 지나간다.[/excited]`,
        mandinka: `나는 ${name}에 도착했다. [awe]그늘 속에서 코라 — 박 위에 21개의 줄 — 울리며,[pause] 그리고 그리오는 왕의 가계를 전적으로 기억력으로 부른다.[/awe] 코라 열매가 인사 대신 손에서 손으로 전해진다; 나에게도 하나 내밀었기에, 감사히 받았다.`,
        fang: `나는 숲을 이긴 빈터에 자리한 ${name}에 도착했다. [awe]나무껍질로 둘러싸인 긴 집들이 정돈된 줄로 서 있고,[pause] 이곳의 조각가들은 어두운 나무로, 조용한 눈길로 조상의 유물을 지킨다고 하는 인물을 새긴다.[/awe] [somber]석궁가 문 옆에 준비된 채 걸려 있다.[/somber]`,
        mongo: `나는 강 숲 깊숙이 자리한 ${name}에 도착했다. [awe]라피아 야자로 짠 천이 오두막 사이에서 말리고,[pause] 꼬아 만든 갈대의 어망이 시냇물을 가로지르며,[/awe] 파초 과수원은 정글의 가장자리에서 빼앗은 것이다. 장로들이 족장의 화덕에 모인다.`,
        mbuti: `나는 숲 사람들의 캠프인 ${name}에 도착했다. [awe]떡갈나무 가지와 넓은 잎으로 엮은 둥근 오두막,[pause] 나무 사이에 그물을 드리워 놓고, 어디서나 나무연기와 야생 꿀의 냄새.[/awe] [somber]이 사람들은 내가 내 지도를 읽듯 이 숲을 읽는다 —[pause] 그리고 훨씬 더 잘.[/somber]`,
        banda: `나는 ${name}에 도착했다. [awe]용광로에서 망치 소리가 울려 퍼지고 — 이 곳의 대장장이들은 자기 산의 철광에서 좋은 철을 뽑는다 —[pause] 회의장 곁에는 사람 키보다 큰 슬릿 드럼이 서 있다, 그 소리는 수 마일의 밀림을 가로지른다고 한다.[/awe]`,
        bambundu: `나는 거대한 바오밥 아래 모인 ${name}에 도착했다. [awe]고대 교역로가 이 곳에서 해안까지 이어지며,[/awe] [somber]장로들은 여전히 평생 동안 포르투갈에 맞선 무녀왕의 이야기를 전한다.[/somber] 족장은 큰 나무 그늘에서 재판을 연다.`,
        lunda: `나는 ${name}에 도착했다. [awe]예의 바른 태도가 이곳을 지배한다:[pause] 모든 인사에 그만의 형식이 있고, 모든 계급에 자리 매트가 있다.[/awe] 그들은 멀리 동쪽에 있는 궁정의 Mwata Yamvo를 경외하여 말하며, [pause]동의 구리가 시장에서 돈의 역할을 한다.`,
        maasai:
          phase === 'struck'
            ? `나는 평원의 ${name}에 도착했다 — [somber]그리고 그곳은 슬픔의 장소다. 가축 역병이 가시 울타리 사이의 마을을 불처럼 지나갔고, 그 뒤로 오두막들은 텅 빈 마당 둘레에 서 있다.[/somber] [fear]마사이족의 여윈 여인이 고정된 눈으로 우리 캠프를 지나, 짐꾼들이 남긴 찌꺼기를 줍고 있었다 — 이제 마사이 땅에서 매일 보게 될, 야생 꿀과 야생 과일로 살아 명백한 죽음으로 걸어가는 끔찍한 기근의 모습들 중 첫 번째였다.[/fear] [somber]그럼에도 마을의 중심부는 붙어 있다: 장로들이 불을 지키고, 젊은이들이 남은 것에 창을 세우고 경계를 선다.[/somber]`
            : phase === 'aftermath'
              ? `나는 평원의 ${name}에 도착했다. [somber]큰 마을들이 비어 있다; 역병의 해가 가축을 가져갔고, 그와 함께 이 백성을 묶어주던 가축 대여와 친족의 그물도 가져갔다.[/somber] [somber]어떤 이들은 언덕의 농경민에게로 내려갔다; 남은 이들은 불 곁에서 내게 말하듯, 어느 때보다 절망적인 습격을 다그친다.[/somber] [awe]그러나 오두막의 고리는 여전히 서 있고, 황혼에는 젊은이들이 여전히 그들의 춤을 뛴다 — 화살처럼 곧게.[/awe]`
              : `나는 평원의 ${name}에 도착했다. [awe]가지와 흙의 오두막이 가시 울타리 뒤에서 고리로 서고, 그 한가운데 가축이 있다 — 부, 양식, 자존심이 한 데에.[/awe] [somber]그럼에도 마을 울타리는 그 안의 무리보다 넓다: 최근 몇 해의 폐병이 가축 깊숙이 파고들었다고 장로들은 말한다.[/somber] [somber]전사들이 긴 창을 쉬운 채로, 양가죽을 어깨에 걸치고 온몸을 기름과 흙으로 붉게 칠하여 경계를 선다;[pause] 황혼에는 젊은이들이 그들의 춤에서 화살처럼 곧게 뛰어오르는 것을 보았다.[/somber]`,
        swahili: `나는 해변의 ${name}에 도착했다. [awe]산호석의 집들이 좁은 골목을 따라 줄지어 있고, 큰 문에는 넝쿨과 글씨가 새겨져 있으며,[pause] 두우가 늦게이 텐 세일 접은 채 해변에 끌어올려져 있다.[/awe] [excited]무역풍이 이 해안을 열두 개 혀위의 교차로로 만들었다.[/excited]`,
        somali: `나는 ${name}에 도착했다. [awe]휘어진 가지와 직조된 매트로 만든 이동식 집이 무리와 함께 움직일 준비가 되어 있고,[pause] 셀 수 없는 낙타가 우물가에 무릎을 꿇고 있으며,[/awe] 공기에는 언덕에서 올라온 유향의 냄새가 감돈다. [somber]그들의 시인은, 듣자하니, 전쟁과 조약 전체를 혼자 시로 운반한다.[/somber]`,
        sidama:
          phase === 'aftermath'
            ? `나는 고원의 ${name}에 도착했다. [somber]악한 날들은 이 땅의 뒤에 있다 — 역병과 메뚜기가 고원을 비운 해들 —[pause] 그리고 그 흔적은 아직 빈 가축 우리에 서 있다.[/somber] [awe]그러나 enset 그들이 마을들을 이끌었고, 그 사이에서 그들은 다시 죽은 자도 깨울 음료를 그 붉은 열매로 볶는다.[/awe] [excited]나는 세 잔을 마셨다.[/excited]`
            : `나는 고원의 ${name}에 도착했다 — [somber]그들이 악한 날이라 부르는 한가운데: 가축의 역병, 들판의 메뚜기, 고원 전체의 기근.[/somber] [awe]여기에 생명이 남아 있다는 사실 자체가 그들이 enset 나무의 숲에 빚지고 있는 것이다 — 그 가짜 바나나의 속살을 찧어 묻어둠으로써 바로 그런 해에 대비한 양식이다.[/awe] [somber]가축은 거의 한 마리도 남아 있지 않다; 농장에서는 씨앗을 소금과 바꾼다.[/somber]`,
        baganda: `나는 ${name}에 도착했다. [awe]바나나 숲이 정돈된 줄로 서고, 껍질천이 골판지처럼 매끈한 프레임에서 말리고,[pause] 갈대 울타리의 울타리가 쓸어낸 길을 따라 줄지어 있으며 —[/awe] [somber]카바카 왕국도 자기 산에서 이토록 먼 곳까지 질서를 유지한다.[/somber]`,
        wayeyi: `나는 갈대 수로 사이의 ${name}에 도착했다. [awe]와에이족은 내가 볼 수도 없는 수로를 따라 모코로 디그아웃을 받쳐서 이 물을 책처럼 읽으며,[pause] 물살이 흐르는 줄 아는 곳에 어망을 놓는다.[/awe] [excited]가장 기이한 것은: 건기에 홍수가 온다고 그들은 말한다 — 강이 멀리, 몇 달 전에 내린 비를 마신다는 것이다.[/excited] 장로의 오두막은 첫 마른 땅 위에 서 있다.`,
        bemba: `나는 ${name}에 도착했다. [awe]그들의 밭은 불로 얻는다: 가지를 잘라 태우고, 따뜻한 재 속에 수수를 뿌린다 —[pause] 숲은 한 번 수확을 주고, 쉬어준다.[/awe] [somber]동쪽의 위대한 족장 Chitimukulu의 이름은 이곳에서 고개를 숙이며 일컬어진다.[/somber]`,
        pedi: `나는 ${name}에 도착했다. [awe]지푸라기의 둥근 오두막들이 가축 우리 둘레에 서고, 곡식 바구니는 쥐의 손이 닿지 못하게 기둥 위에 얹혀 있으며,[pause] 황혼에는 목동들이 먼지를 지나 가축을 불러 모은다.[/awe] 족장의 오두막이 그 고리에서 가장 크다.`,
        zulu: `나는 ${name}에 도착했다. [awe]풀로 엮은 벌집 모양의 오두막이 가축 우리의 둘레를 완벽한 고리로 두르고,[pause] 가죽 방패가 문 곁에 기대어 쌓여 있다.[/awe] [somber]옛 연대의 단속은 젊은이들이 자신을 가누는 방식 안에 여전히 살아 있다.[/somber]`,
        san: `나는 사막 가장자리의 ${name}에 도착했다. [awe]휘어진 풀로 만든 은신처, 독을 묻힌 화살이 꽂힌 가느다란 활, 그리고 가뭄을 대비하여 타조알 속에 묻어 둔 물.[/awe] [somber]근처 바위에는 영양과 사냥꾼의 그림이 있다.[pause] 나는 이들을 다른 세상 사람으로 여겼었다 — 그러나 동쪽의 가축 백성을 이웃으로,[pause] 내가 따라잡을 수 없을 만큼 오래된 채무와 호의들을 말하고 있다.[/somber]`,
      }
      return (
        texts[p.people as string] ??
        `나는 ${name}에 도착했다. 진흙과 갈대의 단순한 오두막이 물가에 바짝 붙어 있고, 아이들이 호기심 가득히 달려와 나를 맞으며, [pause]마을 한가운데 큰 오두막에 족장이 살고 있다. [somber]그의 호감을 얻을 수 있다면,[pause] 그가 길도 알려줄 것이다.[/somber]`
      )
    },
    // Return vignette (point 170): the situation CHANGED since the last visit —
    // describe only the change, in a shocked register. Keyed on people +
    // fromPhase_toPhase; only the rinderpest peoples ever reach it.
    villageReturn: (p: TextParams) => {
      const transitionKey = `${p.fromPhase as string}_${p.toPhase as string}`
      const texts: Record<string, Record<string, string>> = {
        maasai: {
          preDamaged_struck: `[fear]돌아왔더니 마을이 비어 있었다.[/fear] 작년에 가축이 아직 서 있던 자리 — [somber]얇아지긴 했으나 살아 있던[/somber] — 이제는 밟힌 땅만 남았다. [pause] 여윈 여인이 땅에서 꼬투리를 줍고 있었고, 나를 곧장 지나쳤다; 야생 꿀로 살며 명백한 죽음으로 걸어간다고 한다. [breath] 장로들의 불과 경계의 젊은이들만이 옛 질서의 일부를 붙들고 있을 뿐이다.`,
          struck_aftermath: `[somber]내가 여기서 목격했던 기근은 자취를 감추었다 — 그리고 그와 함께 백성의 절반도.[/somber] 큰 마을이 열리고 고요해졌다; 무리가 떠나자, 그들을 묶어주던 가축 대여와 친족의 그물도 떠났다. [pause] 어떤 이들은 언덕의 농경민에게로 갔다; 남은 이들은 내가 듣던 어느 것보다 절망적인 습격을 다그친다. [breath] 그러나 오두막의 고리는 여전히 서 있다, [emph]그리고 젊은이들은 여전히 그들의 춤을 뛴다.[/emph]`,
          preDamaged_aftermath: `[fear]돌아와서 그 자리를 거의 알아보지 못했다.[/fear] 내가 떠난 해 동안 역병이 이 마을을 [somber]불처럼[/somber] 지나갔다: 내가 황혼에 지켜보던 가축이 마지막 한 마리까지 사라졌고, 그와 함께 그들을 묶어주던 가축 대여와 친족의 그물도. [pause] 어떤 이들은 언덕의 농경민에게로 떠났고; 남은 이들은 절망적인 습격을 다그친다. [breath] 오두막의 고리만이 여전히 서 있다, [weary]그리고 저녁에는 젊은이들이 여전히 그들의 춤을 뛴다 — 내가 기억하던 것보다 야윈, 그러나 꺾이지 않았다.[/weary]`,
        },
        sidama: {
          struck_aftermath: `[breath] 거의 희망을 품지 못하고 돌아왔다 — [somber]그러나 악한 날들은 이제 그들의 뒤에 있다.[/somber] 가축 우리가 거의 빈 채로 아직 서 있다, 내가 여기서 본 것의 침묵한 증인으로; 그럼에도 enset 숲이 그들을 기근 속에서 이끌었다. [pause] 오늘 그들은 다시 붉은 커피 열매를 볶고 있고, [emph]죽은 자도 깨울 음료,[/emph] 그들은 나에게 좋은 시절처럼 한 잔을 내밀었다.`,
        },
      }
      return (
        texts[p.people as string]?.[transitionKey] ??
        `[somber]돌아왔더니, 그곳은 내가 떠난 곳이 아니다.[pause] 지난번 방문 이후 여기서 벌어진 일은 모든 얼굴 속에 말없이 서 있다.[/somber]`
      )
    },
    giftRevered: (p: TextParams) =>
      `${PEOPLES[p.people as string]}의 족장에게 내 선물을 내밀었다. [excited]그의 눈이 빛났다 —[pause] 내가 그의 백성이 숭상하는 바로 그것을 가져온 것이다![/excited] 그는 고개를 숙이며 나를 맞아들였다. [pause][excited]여기서 내 처지가 자라난다.[/excited]`,
    giftNeutral:
      '족장이 내 선물을 정중한 고개로 받았다. [somber]그의 눈에 빛은 없었다 —[pause] 그가 사랑하는 것은, 내가 보기에, 이것이 아니다.[/somber] [pause]그렇지만 시작은 된 것이다.',
    giftRejected: (p: TextParams) =>
      `[fear]심각한 실수다![/fear] ${PEOPLES[p.people as string]}의 족장이 내 선물을 본 순간 그의 얼굴이 어두워졌다. [somber]내가 내민 것은 그의 백성에게는 흉조다.[pause] 한마디도 없이 나는 끌려 나왔다.[/somber] [breath][weary]이 불신을 녹이는 데는 시간이 걸릴 것이다.[/weary]`,
    languageLesson: (p: TextParams) => {
      const texts: Record<string, string> = {
        north:
          '불 곁의 노인이 한참을, 말만큼이나 손을 써서 내게 말했다. 그는 바람에 이름을 붙였다: [emph]"Nivera"[/emph] — 차가운 밤바람이 태어나는 쪽, 자정 쪽 — , "Chamsina"는 정오의 뜨거운 숨결, "Levantra"는 아침, "Gharbia"는 저녁. [breath][excited]이제 알겠다:[pause] 북방은 바람이 부는 쪽으로 방향을 읽고, [emph]"Nivera"는 북쪽을 뜻한다![/emph][/excited]',
        west:
          '장로가 네 개의 표시를 먼지에 그리고 천천히 말했다: [emph]"koko"[/emph] 자정 쪽, [emph]"Katula"[/emph] 해돋이 쪽, "Phuthswama" 정오 쪽, "Mimbumi" 해넘이 쪽. [breath][excited]서부의 단어가 이제 내 것이다:[pause] koko는 북쪽, Katula는 동쪽![/excited]',
        central:
          '불 곁에서 장로가 큰 강을 가리키며 말을 이었다, 그 강을 그 백성은 [emph]"Utomba"[/emph] — Mongdamara — 라고 부른다. 모든 것은 "wa-Utomba" 혹은 "ka-Utomba": 강에서 멀거나 강 쪽이거나, "lem-Utomba"는 해돋이 쪽, "mos-Utomba"는 해넘이 쪽. [breath][excited]정글은 그 강을 기준으로 세상을 잰다![/excited]',
        east:
          '늙은 목동이 자기 백성이 [emph]"Odabi"[/emph] — Unumpara — 라고 부르는 빛나는 산 쪽으로 지팡이를 들었다. 그 곳에서 방향이 흐른다: [emph]"Relolo"[/emph] 산 너머 자정 쪽, "Dethamee" 정오 쪽, "Salewa" 해돋이 쪽, "Munjori" 해넘이 쪽. [breath][excited]동방은 거룩한 산에서 세상을 잰다![/excited]',
        south:
          '장로 여인이 내 나침반을 보고 하늘을 가리켰다: 그녀의 백성은 방향을 계절의 이름으로 부른다 — [emph]여름 쪽[/emph]은 자정 쪽, 겨울 쪽은 정오 쪽, 봄은 해돋이, 가을은 해넘이. [breath][excited]세상을 들고 다니는 참으로 기이하고 아름다운 방식이구나![/excited]',
      }
      return texts[p.region as string]
    },
    hintRaw: (p: TextParams) => {
      const regionId = p.region as string
      const w = DIRECTION_WORDS[regionId as keyof typeof DIRECTION_WORDS]
      const texts: Record<string, string> = {
        north:
          '족장이 가까이 기울이며 낮은 목소리로 말했다: [whisper]"그대는 위대한 왕의 무덤을 찾고 있다. ' +
          `위도가 ${dec(p.lat as number)}도를 [emph]${w.north}[/emph] 쪽으로 나타내는 곳에, 그가 모래 아래에 잠들어 있다."[/whisper] ` +
          `[breath][somber]${w.north} …[pause] 그 단어가 무엇을 뜻하는지 배워야 한다;[/somber] [excited]그러면 이 숫자가 길을 보여줄 것이다.[/excited]`,
        east:
          '족장이 지팡으로 평야 너머 먼 곳을 가리켰다: [whisper]"위대한 사막 너머, Unumpara가 숨은 쪽 — ' +
          `경도가 ${dec(p.lon as number)}도를 [emph]${w.east}[/emph] 쪽으로 나타내는 곳에, 옛 왕이 잠들어 있다."[/whisper] ` +
          `[breath][somber]${w.east} …[pause] 풀어야 할 또 하나의 단어다.[/somber]`,
        west:
          `족장은 풀 한 포기 자라지 않는 큰 모래 너머, [emph]${w.north}[/emph] 쪽 멀리의 땅에 대해 말했다: [whisper]"거기에, 듣자하니, 옛 왕이 땅에 묻혔다."[/whisper] [somber]만약 ${w.north}가 방향이라면, 이 단서로 내 탐색이 좁아진다.[/somber]`,
        central:
          `족장이 낮게 중얼거렸다: [whisper]"[emph]${w.north}[/emph] 쪽으로, ${GLOSSARY.congo}에서 멀어지는 쪽으로, 나무가 끝나고 모래가 시작되는 곳까지 가라 — 그런 모래 아래에 옛 왕들이 잠들어 있다."[/whisper] [somber]정글의 단어가 아직 그 방향을 내게 가린다.[/somber]`,
        south:
          `족장이 오래도록 지평선을 바라보았다: [whisper]"밤이 낮보다 많은 달 동안 [emph]${w.north}[/emph] 쪽으로, ${GLOSSARY.zambezi}보다 멀리, 큰 숲보다 멀리 — 모래만 있는 땅에, 위대한 왕이 누워 있다."[/whisper] [somber]${w.north} 쪽으로 … 계절이 이정표인가?[/somber]`,
      }
      return texts[regionId]
    },
    hintDecoded: (p: TextParams) => {
      const regionId = p.region as string
      const texts: Record<string, string> = {
        north: `[excited]해독했다![/excited] 족장의 말은 이 뜻이다: [emph]무덤은 위도 ${dec(p.lat as number)}도 북쪽에 있다.[/emph] [somber]이제 경도가 필요하다.[/somber]`,
        east: `[excited]해독했다![/excited] "Salewa"는 해돋이다: [emph]무덤은 경도 ${dec(p.lon as number)}도 동쪽에 있다.[/emph] [somber]위도와 함께, 그 위치는 확정된다.[/somber]`,
        west: '[excited]이제 서부의 족장을 이해한다:[/excited] 무덤은 [emph]북쪽, 위대한 사막의 가장자리 너머[/emph]에 있다 — 풀이 없는 땅.',
        central: '[excited]정글의 말문이 열린다:[/excited] 무덤은 [emph]콩고에서 멀어지는 북쪽, 모래가 시작되는 곳[/emph]에 있다.',
        south: '[excited]계절이 말한다:[/excited] "여름 쪽"은 [emph]먼 북쪽[/emph]을 뜻한다 — 잠베지 너머, 숲 너머, 위대한 모래 속에.',
      }
      return texts[regionId]
    },
    unspecific: (p: TextParams) =>
      `족장이 엄숙하게 끄덕이며 손을 저었고, 한 번 그리고 다시 한 번 [emph]"${p.word}"[/emph]만을 말했다. [somber] 그가 무엇을 아는지에 대해, 그가 그것을 내가 붙잡는 말로 할 수 없거나 하지 않을 것이다.[/somber] [pause]그럼에도 그는 끈덕지게 [emph]${PEOPLES[p.people as string]}[/emph]의 마을 쪽을 가리켰다 — [excited]그들이 더 안다고 한다.[/excited]`,
    giftLore: (p: TextParams) =>
      `노인이 자기 땅의 보물에 대해 말했다: 그의 백성이 무엇보다 숭상하는 것은 [emph]${ko.gifts[p.gift as keyof typeof ko.gifts]}[/emph]이다. [pause]그것으로 존경받은 족장은 마음을 연다.`,
    drumMessage:
      '[awe]족장이 북 치는 사람을 불렀고, 두 개의 북이 그를 대신해 말했다 — 큰 것과 작은 것.[/awe] [pause]일곱 단어, 각 다섯 박자, 각자 같은 짧은 침묵으로 갈라져 — 낮은 음절에는 깊게, 높은 음절에는 밝게. [excited]나는 이 단어들을 안다. 골목과 물가에서 모두 들어본 것들이다.[/excited] [pause]나는 그것들이 두드려진 순서로 적었다; 그것들이 내게 묻는 것을 내가 읽어야 한다.',
    rockArtefact:
      "[excited]일곱 단어, 그것들은 결국 심부름이었다.[/excited] 나는 물을 그 자체의 당김에 거슬러 따라가, 북이 말한 그대로의 돌덩이가 강기슭에 서 있는 곳까지 — 사람 키보다 크고, 홀로, 그 종류의 어떤 것도 가까이에는 없다. [pause]세 뼘 아래서 내 삽은 돌이 아닌 무엇을 만났다: 닳은 나무 위의 두드려 만든 금속, 강의 자체 진흙에 봉인된 채. [awe]그것은 이 마을이 서 있던 것보다 더 오래 그곳에 누워 있었다.[/awe] [pause]나는 그것을 더 열지 않았다. [somber]열 권리는 내게 없다.[/somber]",
    artefactGiven:
      "[breath]나는 그것을 강을 따라 다시 가져가 족장의 손에 놓았다.[/breath] [pause]그는 그것을 한 번 뒤집고 그 위에 세 단어를 말했다. [excited]나는 그 단어들 각각을 전에 들어본 적이 있다 — 하나는 골목의 돌 곁에서, 하나는 사람들이 파던 자리에서, 하나는 아이들의 놀이에서.[/excited] [pause][awe]그는 내 어떤 혀로도 부를 수 없는 곳을 알려 주었고, 나는 그곳에 가서 그곳에 묻혀 있던 것을 가지고 돌아왔다.[/awe] [pause][somber]우리는 말을 같이하지 않는다.[pause] 그럼에도 방금 서로를 알았다.[/somber]",
    digNothing: '[weary]이 자리를 팠으나, 모래는 돌과 오래된 뿌리 외에는 아무것도 내주지 않았다.[/weary]',
    victory: (p: TextParams) =>
      `${ko.formatDate(p.day as number, 1890)}. [excited]내 삽이 돌을 —[pause] 깬 돌을! — 만졌다.[/excited] [breath]떨리는 손으로 매장실을 드러냈다. [awe]횃불 불빛에 금이 빛나고, 석관 위에는 위대한 왕의 가면이 놓여 있다.[/awe] [breath][awe]찾았다.[pause] 아프리카의 심장을.[/awe] [pause][somber]이 여정은 매 한 걸음이 값지다.[/somber]`,
    foodLow:
      '[somber]식량이 바닥나고 있다.[/somber] 곧 도시나 마을에 닿아야 한다, [pause]그렇지 않으면 배고픔이 늘 내 벗이 될 것이다.',
    foodOut:
      '[weary]식량의 마지막이 다했다.[pause] 배고픔이 내 안을 갉아먹고, 매 걸음이 전 걸음보다 무겁다.[/weary] [fear]빨리 보급을 찾아야 한다,[pause]서둘러야 한다.[/fear]',
    dehydrationOn:
      '[weary]혀가 입천장에 붙었다.[pause] 물통이 없으니 사막이 나를 말린다;[/weary] [fear]걸음걸이가 어긋나기 시작한다.[/fear]',
    dehydrationOver:
      '[somber]드디어 물이다.[/somber] 한 모금마다 힘이 돌아오고, 걸음도 다시 안정된다.',
    sunblindOver:
      '[somber]흰 빛光이 눈에서 사라졌다.[/somber] [excited]다시 또렷하게 보인다![/excited]',
    woundHealed:
      '[somber]오늘 붕대를 갈았더니 상처가 마침내 닫혀 있었다.[/somber] [excited]몸이 스스로를 치료했다 —[pause] 다시 온전하다.[/excited]',
    woundEased:
      '[somber]깊은 상처가 아물어 간다.[/somber] [weary]여전히 걸을 때마다 당기지만, 가장 어려운 고비는 지났다 —[pause] 휴식과 양식만 있으면 스스로 닫힐 것이다.[/weary]',
    medicineUsed:
      '약을 복용했다. [pause][somber]열이 내리고 상처가 닫히고 있다;[/somber] [excited]곧 평소의 나를 되찾을 것이다.[/excited]',
    healthPoor:
      '[weary]힘이 다했다.[pause] 이 글을 쓰는 손이 떨린다.[/weary] [fear]곧 휴식과 회복을 찾지 못하면, 이 일지는 나보다 오래 남을 것이다.[/fear]',
    animalAttack: (p: TextParams) => {
      const animal = ko.animals[p.animal as keyof typeof ko.animals]
      const openings: Record<string, string> = {
        lion: `[fear]${animal}에게 습격을 당했다![/fear]`,
        cheetah: `[fear]찰나의 속도로, ${animal}가 풀 속에서 나를 향해 달려왔다![/fear]`,
        leopard: `[fear]어디서 나타났는지 ${animal}가 내 앞에 덮쳤다![/fear]`,
        hyena: `[fear]턱을 달그락거리며 ${animal}가 나를 향해 다가왔다![/fear]`,
        snake: `[fear]거의 ${animal}을(를) 밟을 뻔다![/fear]`,
        crocodile: `[fear]물이 폭발하듯 —[pause] ${animal}![/fear]`,
      }
      const results: Record<string, string> = {
        escaped: ' [excited]나는 빠져나왔다.[/excited]',
        defended: ' [excited]무기를 들어 그 짐승을 물리쳤다.[/excited]',
        light: ' [somber]가벼운 상처를 입었다.[/somber]',
        severe: ' [weary]심하게 부상을 입었다;[pause] 움직일 때마다 고통이 따른다.[/weary]',
      }
      return openings[p.animal as string] + results[p.result as string]
    },
    robbery: (p: TextParams) =>
      p.result === 'deterred'
        ? '[fear]강도가 내 길을 막았다 —[/fear] [excited]그러나 소총을 한 번 보자 그들은 밀림 속으로 녹아들었다.[/excited]'
        : `[fear]강도가 내게 덮쳤다![/fear] [somber]그들이 내가 도망치기 전에 ${p.money} 달러를 가져갔다.[/somber]`,
    feverOn:
      '[weary]열이 나를 태운다.[pause] 땅이 눈앞에서 흔들리고, 다리는 제 갈 데로 간다.[/weary] [fear]약을 찾아야 한다, 그렇지 않으면 이 습지는 내 무덤이 될 것이다.[/fear]',
    sunblindOn:
      '[fear]사막의 빛이 내 눈을 덥혔다![/fear] [weary]세상은 하얀 빛의 섬광;[pause] 내 손가락조차 겨우 분간된다.[/weary] 사막에서 멀리 벗어나야 회복될 것이다.',
    sandstorm:
      '[fear]모래폭풍이 지평선을 삼켰다![/fear] [weary]세상이 울부짖는 먼지가 되는 동안, 나는 짐 뒤에 웅크리고 있었다.[/weary] 귀중한 시간을 잃었다.',
    sweptAway:
      '[fear]물살이 나를 붙잡아 폭포 위로 휩쓸었다![/fear] [weary]멍든 몸과 피를 흘리며 강기슭에 기어올랐다 —[pause] 내 물건의 절반은 강과 함께 사라졌다.[/weary]',
    landmarkDiscovered: (p: TextParams) => {
      const name = ko.landmarks[p.landmark as keyof typeof ko.landmarks]
      const flavors: Record<string, string> = {
        mountain: `[awe]드디어 그것이 내 앞에 우뚝 섰다 —[pause] ${name}, 하늘을 향해 끝없이 펼쳐진 능선.[/awe] [excited]내가 그것을 보았으니, 내 일지가 증거할 것이다.[/excited]`,
        falls: `[awe]그것을 보기도 전에 먼 곳에서 천둥이 땅 위로 굴러왔다:[pause] ${name}![/awe] [excited]강이 흰 물의 벽으로 깊은 곳으로 내던진다 —[pause] 내가 결코 잊지 못할 풍경.[/excited]`,
        lake: `[awe]나의 앞에 큰 물이 열렸다 —[pause] ${name}, 바다처럼 지평선까지 뻗어 있는.[/awe] [somber]그 강변을 내 지도에 적었다.[/somber]`,
        grave: `[whisper]나는 바랜 뼈와 거대한 어금니 사이를 걷는다 —[pause] 코끼리의 무덤.[/whisper] [awe]오래된 이야기는 결국 사실이었다.[/awe]`,
        'giza-pyramids': `[awe]아침 안개가 걷히자, 강 건너 그것들이 섰다 —[pause] ${name}의 세 큰 피라미드, 그리고 그 앞에 쪼그린 사자 몸의 수호자.[/awe] [excited]어떤 유럽 제국보다 4천 년 앞선 아프리카의 손에 의해 세워진 —[pause] 모든 경이 중 가장 오래된 것이, 아프리카에 서 있다.[/excited]`,
        pyramids: `[awe]가파른 피라미드들이 나일 동쪽 강변에 빽빽이 —[pause] ${name}, 쿠시의 왕도.[/awe] [excited]이 왕국은 이 무덤들을 세우고 자기 문자로 적었다 —[pause] 이집트의 그늘이 아닌, 자체의 아프리카 왕국.[/excited]`,
        'stone-city': `[awe]석회 없이 맞춘 화강암 벽이 언덕을 따라 휘어져 있고, 그 위에 큰 원뿔 탑 —[pause] ${name}.[/awe] [somber]이 도읍은 아프리카의 손이 세운 것이다, 본토의 식민지 사가 무엇이라 주장하든.[/somber]`,
        'rock-churches': `[awe]살아 있는 바위를 아래로 파서 만든 교회들, 십자가가 또 십자가를 돌에 새긴 —[pause] ${name}.[/awe] [excited]기독교 에티오피아 왕국의 작품이며,[pause] 신자들은 오늘도 그 안에서 무릎을 꿇는다.[/excited]`,
        'coastal-ruins': `[somber]산호석의 벽과 깨어진 아치가 조수선 위에 서 있다 —[pause] ${name}.[/somber] [awe]스와힐리 도시가 자신의 동전을 주조하고, 어떤 유럽 범선이 오기도 전에 인도양을 가로질러 교역했다.[/awe]`,
        stelae: `[awe]어떤 돛대보다 높은 화강암 바늘들이 풀숲에서 솟아 있고, 그 사이에 넘어진 거인 하나 —[pause] ${name}의 스텔라들.[/awe] [excited]악숨 왕국이 이것들을 새기고, 자신의 화폐를 주조했으며 홍해를 넘어 교역했다 —[pause] 최고 수준의 아프리카 강대국.[/excited]`,
        castles: `[awe]성벽과 원형 탑의 석조 성채가 고원에 서 있다 —[pause] ${name}, 에티오피아 황제의 자리.[/awe] [somber]그 모든 벽돌은 아프리카 석공의 손이 쌓은 것이다, 식민지 기록이 무엇이라 주장하든.[/somber]`,
        'cliff-dwellings': `[awe]벼랑에 계단식으로 깎은 주거, 평야 높이 너머 선반에 붙은 곡물 저장고 —[pause] ${name}.[/awe] [excited]도곤족은 이 땅을 수직으로 읽고, 이전 텔렘의 가옥 위에 자기 집을 짓는다.[/excited]`,
        crater: `[awe]벼랑이 내 발 아래로 떨어져 커다란 초록 보울로 이어졌다 —[pause] ${name}, 짐승이 가득한 벽의 세계.[/awe] [somber]그 고리는 평야를 향해 마치 땅이 스스로 쌓은 성벽처럼 서 있다.[/somber]`,
        volcano: `[fear]발 아래 땅이 떨렸고,[pause] 내 위 가파른 원뿔에서 연기가 —[/fear] [awe]${name}, 마사이족이 신의 산이라 부르는 산.[/awe] [whisper]나는 그 비탈에 오래 머물지 않았다.[/whisper]`,
        delta: `[awe]바다를 찾지 못하는 강 —[pause] ${name}, 모래 속으로 스스로를 쏟아 붓는다.[/awe] [excited]그 물은 눈이 닿는 끝까지 수로와 갈대섬의 미궁으로 갈라진다.[/excited]`,
        wetland: `[somber]나일강은 여기서 그냥 사라진다 —[pause] ${name}에 삼켜져, 끝없는 파피루스 늪이 된다.[/somber] [weary]수일간 수로는 띄우는 갈대 사이로 헤맨다;[pause] 강변도, 이정표도 없고, 초록뿐이다.[/weary]`,
      }
      return flavors[p.kind as string] ?? flavors.mountain
    },
    mountainNoRope:
      '[weary]손에 밧줄도 없는데, 이 산맥을 돌아갈 길도 없다.[/weary] [fear]한 손, 한 발씩 천천히 오른다 —[pause] 여기서 한 번 미끄러지면 바위가 날 받아 주지 않는다.[/fear]',
    penaltyJungle:
      '[weary]정글이 덩굴과 가시로 꽉 들어차며 다가온다.[/weary] [emph]마체테 없이[/emph] 매 걸음을 억지로 내디딛야 한다 —[pause] 손에 날이 있으면 길을 열 수 있을 텐데.',
    penaltyWater:
      '[weary]물이 내 길을 막고, 카누도 없다.[/weary] 천천히 젖은 채로 물을 건너 헤엄친다;[pause] [emph]카누[/emph]가 있으면 쉽게 건널 수 있고 악어의 표적에서도 벗어날 텐데.',
    penaltyCanoeLand:
      '[weary]등 위의 카누가 육지에서 무거운 짐이다.[/weary] 매 걸음마다 걸린다 —[pause] [emph]긴 도보 구간[/emph]에는 캠프에 두고 오는 편이 낫다.',
    dangerUnarmed:
      '[somber]야지로 나서려는데,[pause] 무기가 없다는 것이 떠올랐다.[/somber] [fear]사자, 표범, 뱀이 이 땅을 배회한다.[/fear] [emph]짐에 든 소총[/emph]이 가장 확실한 보호다 —[pause] 마체테보다도.',
    dangerDesert:
      '[weary]사막이 자비 없이 작열한다.[/weary] [fear]물 없이는 갈증과 눈병이 닥치고 —[pause] 눈병은 죽음까지 이른다.[/fear] [emph]가득 찬 물통[/emph]이 갈증을 밀어내고;[pause] 눈병에 대항하려면 사막을 벗어나는 수밖에 없다.',
    dangerWater:
      '[fear]물속에 악어가 매복하고 있다.[/fear] [weary]카누가 없으면 그들의 자비에 달렸고, 내 소총은 젖어서 쓸모없었다.[/weary] [emph]카누[/emph]가 있으면 안전히 건널 수 있고 무기도 마를 수 있다;[pause] 그마저 안 되면 마체테가 유일한 도움이다.',
    dangerWaterCanoe:
      '[fear]물 속에 악어가 매복한다 —[pause] 수면 위로 그들의 눈이 보인다.[/fear] [somber]카누가 나를 실어 나르는 게 다행이다:[/somber] [emph]그들의 손길 밖,[/emph] 그리고 소총은 배 위에서 마르지 않는다.',
    dangerWetland:
      '[somber]덤불 위에 축축한 안개가 걸려 있다.[/somber] [fear]여기서는 열병이 번진다, 정신을 흐리게 하고 힘을 빼앗는다.[/fear] [emph]짐의 약[/emph]이 그것을 고치지만 —[pause] 늘 한약 정도는 지니고 있어야 한다.',
    mountainFall:
      '[fear]내 발 아래 바위가 무너져, 내가 떨어졌다![/fear] [weary]멍이 들고 멍하게 훨씬 아래에서 멈추었다 —[pause] 밧줄이 없었으면 이번 등반이 내 끝이었을 것이다.[/weary]',
    mountainFallItem:
      '[fear]내 발 아래 바위가 무너져, 내가 떨어졌다![/fear] [weary]멍든 몸으로 간신히 더 기어갔다 —[pause] 떨어지면서 내 짐의 일부가 떨어져 나가고 깊이 속으로 사라졌다.[/weary]',
    findRemains: (p: TextParams) =>
      `[somber]더 멀리 가지 못한 여행자의 유해를 발견했다.[pause] 이 땅의 소름 끼치는 경고다.[/somber] 뼈 사이에는 ${p.money} 달러가 든 돈주머니가 있었다 — [whisper]좀 더 나은 운을 빈다.[/whisper]`,
    deadline1:
      '[somber]후원자로부터 편지가 닿았다.[pause] 그들의 인내가 얇아지고 있다: 허락된 시간의 절반 이상이 지났고, 보여줄 무덤은 없다.[/somber] [emph]서둘러야 한다.[/emph]',
    deadline2:
      '[fear]마지막 경고![/fear] [somber]후원자들이 원정이 곧 회수될 것이라고 적었다.[pause] 지금 무덤을 찾지 못하면, 모든 것이 헛되었다.[/somber]',
    successor:
      "[somber]이 일지를 그것을 위해 모든 것을 바친 전임자의 손에서 이어받는다.[pause] 그의 기록이 내 길을 인도할 것이다.[/somber] [emph]탐색은 그가 멈춘 그곳에서 계속된다.[/emph]",
    treasureFound: (p: TextParams) =>
      `[excited]내 삽이 무엇인가를 세게 찔렀다![/excited] [breath]땅에서 [emph]${ko.treasures[p.treasure as keyof typeof ko.treasures].toLowerCase()}[/emph]의 비장한 매장지를 꺼냈다 — 오래전에 묻혀서 모래만 기억하던. [awe]인내하는 파는 사람에게 행운이 미소 짓는다.[/awe]`,
    ivoryFound: (p: TextParams) =>
      `[awe]코끼리 무덤.[pause] 바랜 뼈들이 좌초한 배의 늑골처럼 내 둘레에 솟아 있다.[/awe] [somber]조용한 경외심을 품고 땅에서 ${p.count === 1 ? '위대한 상아 한 쌍을' : `${p.count}쌍의 위대한 상아를`} 꺼냈다 —[pause] 내가 본 적 없는 순도의 상아.[/somber]`,
    bounty: (p: TextParams) => {
      const names = [namesFromCsv(p.villages, ko.places), namesFromCsv(p.landmarks, LANDMARKS)].filter(Boolean).join(', ')
      return `[excited]지리학회가 내 보고를 기렸다![/excited] ${p.count}건의 기록된 발견에 대해 — [emph]${names}[/emph] — 그들은 앞서 소식을 보냈다: 항구에서 [emph]전신환[/emph]으로 [emph]${p.amount} 달러[/emph]가 나를 기다린다. [pause]탐험은, 알고 보니, 자신의 보급값을 벌 수 있다.`
    },
    ferry: (p: TextParams) =>
      `${ko.places[p.from as string]}에서 ${ko.places[p.to as string]}까지의 항해를 예약했다. [pause]바다 위 ${p.days}일 — [somber]해안은 느린 파노라마처럼 흘러 지나갔고,[/somber] [excited]이번에는 드디어 마른 신발을 신고 도착했다.[/excited]`,
    valuableRevered: (p: TextParams) =>
      `마을에 들어서자마자 시선이 내 손의 [emph]${ko.treasures[p.treasure as keyof typeof ko.treasures].toLowerCase()}[/emph]로 향했다. [excited]경외의 속삭임이 골목을 따라 나를 따라갔고 —[pause] ${PEOPLES[p.people as string]}는 내가 가진 것을 숭상한다.[/excited]`,
    valuableRejected: (p: TextParams) =>
      `[fear]그것을 함반으로 드러낸 것은 실수였다![/fear] ${PEOPLES[p.people as string]}는 내 손의 [emph]${ko.treasures[p.treasure as keyof typeof ko.treasures].toLowerCase()}[/emph]에게서 흉조처럼 움츠러들었다. [somber]문이 닫혔다;[pause] 어머니들은 아이들을 안으로 데리고 들어갔다.[/somber]`,
    friendPledge: (p: TextParams) =>
      `[awe]${PEOPLES[p.people as string]}의 족장이 일어서서 두 손을 내 어깨 위에 얹었다.[/awe] 모인 마을 앞에서 그는 나를 자기 백성의 [emph]존경받는 친구[/emph]라 명했다. [excited]"우리의 마을이 서 있는 어디서든, 우리 백성은 그대를 지켜줄 것이다."[/excited] 그가 약속했다. [breath][somber]나는 깊이 고개를 숙였다.[pause] 그런 선물은 금보다 무겁다.[/somber]`,
    friendRescue: (p: TextParams) => {
      const animal = ko.animals[p.animal as keyof typeof ko.animals]
      const hurt = p.result === 'light' ? ' [somber]나는 가벼운 상처만 입었다.[/somber]' : ' [excited]나는 상처 없이 빠져나왔다.[/excited]'
      return `[fear]${animal}에게 습격을 당했다![/fear] [excited]한 무리의 ${PEOPLES[p.people as string]}가 즉시 달려와 그 짐승을 몰아냈다.[/excited]${hurt} [pause][somber]나는 내 목숨을 이 사람들에게 빚지고 있다.[/somber]`
    },
    friendRescueRobbers: (p: TextParams) =>
      `[fear]강도가 내 길을 막았다 —[/fear] [excited]그러나 ${PEOPLES[p.people as string]}의 사내가 창을 들고 밀림에서 나타나자, 산적들은 놀란 새처럼 흩어졌다.[/excited] [somber]족장의 약속은 어떤 소총보다 값지다.[/somber]`,
    friendAid: (p: TextParams) =>
      `[weary]더 멀리 갈 수 없었다;[pause] 눈앞의 땅이 흔들렸다.[/weary] [somber]그때 손들이 나를 들어 올렸다 —[/somber] [excited]${PEOPLES[p.people as string]}의 사람들이 나를 발견한 것이다.[/excited] 물과 음식, 쓴 약을 가져왔고, 내 힘이 돌아올 때까지 곁에 머물렀다. [pause][awe]내가 살아 있는 것은 그들의 벗이기 때문이다.[/awe]`,
    friendSupplies: (p: TextParams) =>
      `${PEOPLES[p.people as string]}의 마을에서 나는 가족처럼 맞아들여졌다: [excited]내 짐을 식량으로 채우고 약을 내 손에 쥐어 주었으며,[/excited] 아무도 값에 대해 들으려 하지 않았다. [pause][somber]이 지역의 우정만큼 안전한 소유는 없다.[/somber]`,
    robberyCommitted: (p: TextParams) =>
      `[somber]나는 돌이킬 수 없는 일을 저질렀다.[/somber] [fear]소총을 들어 ${PEOPLES[p.people as string]}의 오두막을 비우고 마을에서 도망쳤다.[/fear] [breath][weary]탈취: ${p.money} 달러, 교역품 ${p.gifts}점, 식량 ${p.food}일분.[pause] 내 뒤에서는 비명, 그리고 그 비명보다 더 참혹한 침묵.[pause] 이 지역의 어떤 오두막도 나를 다시 받아들이지 않을 것이다.[/weary]`,
    campLooted:
      '[somber]캠프가 너덜너덜 헤집힌 채 발견되었다 —[pause] 기둥은 넘어지고, 땅은 낯선 발자국으로 뒤집혔다.[/somber] [weary]내가 두고 온 것은 모두 사라졌다.[/weary] [fear]이 야생에서, 짊어지거나 지키지 않는 것은 안전하지 않다.[/fear]',
  },
}

// Import project images
import stoovImg from "../../assets/bda78b7a67d657c4a4b78b9bb41b49f386b2b5b0.png";
import messeisangImg from "../../assets/64c1fa10db696fb46b44cdeb60350c1d933c6106.png";
import locallinkImg from "../../assets/6b3719e3ad756a18db670818d9f9ec38067e1d1d.png";

// STOOV project detail images
import stoovImg1 from "../../assets/15c69b62efc0e955449d4f3e74e2e900afe684eb.png";
import stoovImg2 from "../../assets/ddc32a7afd721169d7bc458e9e76e9225e6bd6f0.png";
import stoovImg3 from "../../assets/48aeea1af11c298b42b874c14f4e0d2b02080e45.png";
import stoovImg4 from "../../assets/b1c579840d8aeb7427538d1ba94d5ac62c27c31e.png";
import stoovImg5 from "../../assets/1d230276e6ab7b21773d9a6702fe26f9ef4f1be7.png";
import stoovImg6 from "../../assets/7f67ebc434ffd61993b9a164ab0e64568c9aa45b.png";
import stoovImg8 from "../../assets/8f12dd41b8e0caf8d491ae73866801e057135e16.png";
import stoovImg9 from "../../assets/eaa8c72d8fe4a393f7467dbf2acb1d30f2df0594.png";
import stoovImg10 from "../../assets/6350da9949bed4c365b960e252c65bbbaf61cf39.png";
import stoovImg11 from "../../assets/0c90efa24e0a261050d1b9e8502030d0cf3f8069.png";

// Messeisang project detail images
import messeisangImg1 from "../../assets/17eae9d38e914bc633ca798988ceb22aaebbc6c0.png";
import messeisangImg2 from "../../assets/533e1c8328c0d35a586369902cb9c6ec72fd32c8.png";
import messeisangImg3 from "../../assets/07a1762fc4bc3f51bed495b288c22b147f3f156a.png";
import messeisangImg4 from "../../assets/b023ac351f181ae17602c1a28685a35bf52dcc2a.png";
import messeisangImg5 from "../../assets/f390dca80bfdba81eec34abc0b9be8e1d883abf0.png";
import messeisangImg6 from "../../assets/e9e24f70122b88d6654fb21616242b8c34e0b7d7.png";
import messeisangImg7 from "../../assets/d22fc7c196578d6b1fa8b301b903bab9b0e7dae5.png";
import messeisangImg8 from "../../assets/08596e53bf714672d994309da7054c4fbe7c05ca.png";
import messeisangImg9 from "../../assets/225086c21e776e98ee5c477af317b4f2b42dbf87.png";

// LocalLink project detail images
import locallinkImg1 from "../../assets/82322f488c8dc4320b34d957c75f6c151c06e133.png";
import locallinkImg2 from "../../assets/3dfe2d2d37d632356fd4d4a1637b324b4ae58d51.png";
import locallinkImg3 from "../../assets/ca69926dc26d8a89f882491f6aa3fb490442eac1.png";
import locallinkImg4 from "../../assets/a25ebf2c0820506834c956731d25cff6d3ff9567.png";
import locallinkImg5 from "../../assets/a54a4dd32af681a6e2646af247e4c60377f46a7b.png";
import locallinkImg6 from "../../assets/64e9dfd8913762bcd2ccaa8e8bdad6f804e77f77.png";
import locallinkImg7 from "../../assets/c5e5b32a9b387a457ef7f1569e7c317af889113e.png";
import locallinkImg8 from "../../assets/551efbd12847c8f14318f1fecc2cdc1db554db0c.png";
import locallinkImg9 from "../../assets/534566d18a8171f9cb66d63b658a781ddfa97f4c.png";
import locallinkImg10 from "../../assets/7b68453f899a68e0eec46047cc45224b20bd326d.png";
import locallinkImg11 from "../../assets/607024d9336c5b48d415ce081b166ca2843985b9.png";
import locallinkImg12 from "../../assets/7b75e9887a59fb93cb160244d0fe9901faa88d61.png";

export interface Project {
  id: string;
  category: 'service' | 'uxui' | 'renewal';
  title: string;
  period: string;
  description: string;
  thumbnail: string;
  tags: string[];
  role: string;
  tools: string[];
  overview: string;
  problem: string;
  solution: string;
  result: string;
  images: string[];
  pdfUrl?: string;  // PDF 파일 링크 (선택사항)
  prototypeUrl?: string;  // 프로토타입 링크 (선택사항)
  designSystemUrl?: string;  // 디자인시스템 링크 (선택사항)
  videoUrl?: string;  // 비디오 링크 (선택사항)
}

export const projects: Project[] = [
  {
    id: 'stoov',
    category: 'service',
    title: 'STOOV',
    period: '2025.10 ~ 2026.01',
    description: '버스킹 공연 장소를 탐색하고, 예약 사이트로 바로 이동이 가능한 지도형 플랫폼',
    thumbnail: stoovImg,
    tags: ['Service Design', 'Map Platform', 'Busking', '모바일 웹'],
    role: '70% / UX 리서치 및 구조 설계, IA·플로우 차트 작성, UI 디자인 및 컴포넌트 제작, 디자인 시스템 구축, 디자인 QA 관리, UT 기획',
    tools: ['Figma', 'Ps', 'Ai', 'Notion', 'Excel', 'Perplexity', 'ChatGPT', 'Maze', 'Krea.ai'],
    overview: 'STOOV는 지도 기반으로 버스킹 공연 장소를 탐색하고, 운영시간·위치·예약 조건 등 상세 정보를 한곳에서 확인하며, 예약 사이트로 바로 이동할 수 있는 통합 플랫폼입니다.',
    problem: '버스킹 아티스트들은 공연 장소 정보가 파편화되어 있어 운영 시간, 위치 조건, 예약 필요 여부를 각각 다른 곳에서 확인해야 했습니다. 장소 탐색부터 예약까지 비체계적이고 비효율적인 과정으로 인해 시간이 많이 소요되었습니다.',
    solution: '지도 중심의 직관적인 UI로 장소를 한눈에 파악하고, 마커 클릭 시 버텀시트 팝업으로 상세 정보를 제공합니다. 운영 시간부터 위치 조건, 예약 필요 정보를 한 흐름으로 빠르게 확인할 수 있도록 설계했으며, 연락처와 지도 위치를 통해 실제 예약까지 원활하게 진행할 수 있습니다.',
    result: 'Usability Test를 통해 장소 탐색부터 선택, 예약 과정의 가설을 검증했습니다. 100% "기존 방식보다 탐색이 쉽다" 응답, 75% "꼭 사용해보고 싶다" 응답, 83% "비체계적 장소 탐색" 경험을 확인했습니다. 사용자들은 공연 장소 정보의 통합 자체를 큰 가치로 인식하며, UT 결과 기존의 파편화된 장소 탐색 및 예약 경험을 대체할 수 있는 인식 개선을 확인했습니다.',
    images: [
      stoovImg,
      stoovImg1,
      stoovImg2,
      stoovImg3,
      stoovImg4,
      stoovImg5,
      stoovImg6,
      stoovImg8,
      stoovImg9,
      stoovImg10,
      stoovImg11,
    ],
    designSystemUrl: 'https://www.figma.com/design/LpVuBa7LizDnO3FiEraXcP/%F0%9F%8E%B8-STOOV-Design-System-Library?node-id=0-1&t=6J9JS1WHDbFsu5nL-1',
    prototypeUrl: 'https://www.figma.com/proto/HciHfbMaqayfYbIFdPJVOa/STOOV-%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85?node-id=79-4327&t=ykIDW28rKHXH0Asq-1',
  },
  {
    id: 'messeisang',
    category: 'renewal',
    title: '메쎄이상 메인 홈 개선',
    period: '2026.01 ~ 02',
    description: '회사를 설명하는 공간에서 방문자의 전시 정보를 찾는 출발점으로 개선',
    thumbnail: messeisangImg,
    tags: ['UX Renewal', '개인 프로젝트 (Web design)', 'Information Architecture', 'Exhibition'],
    role: '100% / UX 리서치 및 기획 전반, 디자인 작업, 가설 및 KPI 설정',
    tools: ['Figma', 'Make', 'ChatGPT', 'Perplexity', 'Claude'],
    overview: "이 과제에서는 메쎄이상 메인 홈을 '회사를 설명하�� 페이지'가 아니라 '방문자가 전시 정보를 찾기 시작하는 출발점'으로 리뉴얼하는 것을 목표로 했습니다. 핵심은 단순한 UI 개선이 아니라, 사용자가 수행하려는 태스크를 페이지의 중심에 두는 구조적 전환입니다.",
    problem: "메쎄이상은 국내 1위 전시 주최사로 연간 다수의 전시를 운영하고 있지만, 현재 메인 홈은 기업 규모와 성과를 설명하는 브랜딩 페이지에 가까운 구조입니다. 반면 실제 방문자의 다수는 관람객과 참가사로, '전시 일정, 참여 방법, 사전 등록' 같은 전시 액션 정보를 찾기 위해 유입됩니다. 즉, 회사가 보여주고 싶은 메시지와 사용자가 수행하려는 태스크가 메인에서 충돌하고 있었고, 이 불일치가 초기 탐색 흐름을 지연시키는 핵심 원인이라고 판단했습니다.",
    solution: "홈 진입 시 방문자의 '전시 탐색 시작자'로서의 인지 시간을 단축하기 위해, 전시 중심 전시 정보와 회사 정보의 재배치를 설계했습니다. 핵심 솔루션은 다음과 같습니다. 1. 전시 관람/참가 버튼 - 전시 탐색 CTA 정의 / 전시 탐색의 공식적인 시작점을 기존 하단 배너가 아닌 상단 Hero 영역 내 '전시 관람 버튼'과 '참가/참관 버튼'으로 전환하여, 가장 먼저 안내하도록 변경했습니다. 2. 전시 입장 위치 버튼 재정의 / 전체 전시 정보를 확인할 수 있는 '전체 행사일정'을 확인하고 입력한 탐색 흐름의 시작점으로 정의하여 전시 탐색 흐름의 정보 계층을 통합했습니다. 3. 전시 리스트 슬라이드 / 호버링 시 '전시 제목/날짜/장소'를 바로 인지할 수 있도록 함으로써 메인에서부터 전시 정보를 즉시 확인할 수 있게 했습니다.",
    result: "Maze를 활용한 UT를 진행했습니다 (N=6, 관람 목적 4명/참가 목적 2명, 메인 홈 기준 태스크 수행). UT 결과, Hero 영역에서 전시 탐색을 시작하기까지 걸리는 시간이 약 6~7초에서 3초 이내로 단축되었고, 전시 탐색 CTA 클릭률은 62%에서 83%로 완만하지만 유의미한 수준으로 증가했습니다. 중요한 건 수치 자체보다, 사용자가 더 빠르게 '행동을 시작한다'는 변화입니다. 메인은 모든 사용자가 반드시 거치는 핵심 시작점이고, 홈 체제를 다루거나 사용자 행동을 가장 크게 변화시킬 수 있는 지점입니다. '회사를 보여주는 공간'이 아닌 '사용자의 행동을 도와주는 시작점'이라는 가설을 세우고, 그에 맞는 구조를 개선했습니다.",
    images: [
      messeisangImg,
      messeisangImg1,
      messeisangImg2,
      messeisangImg3,
      messeisangImg4,
      messeisangImg5,
      messeisangImg6,
      messeisangImg7,
      messeisangImg8,
      messeisangImg9,
    ],
    prototypeUrl: 'https://www.figma.com/proto/pGmGfdjDDZI7KlCVj0TJD1/%EB%A9%94%EC%8E%84%EC%9D%B4%EC%83%81-%ED%99%88-%EB%A6%AC%EB%89%B4%EC%96%BC-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?node-id=1-501&t=tQV0QgIni4v6w3Am-1',
  },
  {
    id: 'locallink',
    category: 'uxui',
    title: 'LocalLink',
    period: '2025.03 ~ 11',
    description: '소외 지역 활성화를 위한 현지인의 여행 코스 제공과 게스트의 코스 소비 서비스',
    thumbnail: locallinkImg,
    tags: ['Travel', 'Local Tourism', 'Community Platform', '모바일 앱'],
    role: '70% / UX 리서치 및 기획, 핵심 영역 설계, UI 디자인 전반, 프로토타입',
    tools: ['Figma', 'Ps', 'Ai', 'Protopie', 'ChatGPT', 'Krea.ai'],
    overview: '로컬링크는 현지인의 데이터와 시간을 바탕으로 한 소외 지역의 정보를 여행 코스로 제공하고, 스스로에게 알맞은 코스를 소비함으로써 소외된 지역의 활성화에 기여하는 서비스입니다.',
    problem: '극한의 효율주의와 생성형 AI를 통한 대량생산으로 검증되지 않은 양산형 콘텐츠가 증가했습니다. 과잉 콘텐츠로 인해 불편한 경험을 한 적이 있는 사람이 68%였고, 이를 피하기 위한 방법으로 차단 및 제한 응답이 85%에 달했습니다. 개인마다 생각하고 판단하는 경계가 다른데, 경계가 모호한 것에 불편함을 느끼는 점을 발견했습니다.',
    solution: '비슷한 경계의 같이를 가진 사람들과 어울리게 유도함으로써 사용자들에게 자신의 경계를 더욱 확장시킬 수 있는 기회를 제공합니다. 로컬 컨시어지(현지인)는 손님이 필요한 정보 및 모든 서비스를 총괄적으로 제공하는 관리인이며, 게스트는 로컬 컨시어지에 대응되는 단어로 현지인의 안내를 받아 소외 지역을 방문하는 손님입니다. 특정 지역의 현지인이 자체적 관련된 정보와 서비스를 제공하기 때문에 Local이라는 단어를 추가했습니다.',
    result: '서비스를 통해 사람과 사람간의 경계를 파악하고 이어주는 서비스를 기획했습니다. 현지인과 여행객의 니즈를 모두 충족시키며, 소외 지역을 배경으로 사람들이 연결되며 지역 활성화를 도모할 수 있는 Social Innovation 서비스를 완성했습니다.',
    images: [
      locallinkImg,
      locallinkImg1,
      locallinkImg2,
      locallinkImg3,
      locallinkImg4,
      locallinkImg5,
      locallinkImg6,
      locallinkImg7,
      locallinkImg8,
      locallinkImg9,
      locallinkImg10,
      locallinkImg11,
      locallinkImg12,
    ],
    videoUrl: 'https://youtu.be/ZQV03sSPcF0?si=YyVDkvDiywQfQdjQ',
    prototypeUrl: 'https://cloud.protopie.io/p/c167fabdc95f35146e96a8ad?ui=true&scaleToFit=true&enableHotspotHints=true&cursorType=touch&mockup=true&bgColor=%23F5F5F5&bgImage=undefined&playSpeed=1',
  },
];
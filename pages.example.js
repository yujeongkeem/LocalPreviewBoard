// pages.js — 선택사항. Local Preview Board 와 같은 폴더에 두면 자동으로 읽힙니다.
// 파일명을 pages.js 로 바꾸고, 아래 pages 맵을 프로젝트에 맞게 채우세요.
// 이 파일에 없는 .html 은 자동 발견되어 파일명 그대로 표시되고,
// 그룹은 최상위 폴더명으로 자동 지정됩니다 (예: venue/venue-home.html -> "venue" 그룹).
window.PAGES_CONFIG = {
  // 사이드바에서 그룹이 나열되는 순서. 여기 없는 그룹은 그 뒤에 알파벳순으로 붙습니다.
  groupOrder: ["웨딩홀 (VEN) ★우선", "웨딩플레이스 (PTN) ★우선"],

  // key: 이 파일(local-preview-board.html) 기준 상대경로 (스캔된 경로 그대로)
  // value: { label: 표시할 이름, group: 소속 그룹 }
  pages: {
    "venue/venue-home.html": { label: "VEN-001-01 웨딩홀 홈", group: "웨딩홀 (VEN) ★우선" },
    "venue/venue-home-filter.html": { label: "VEN-001-02 웨딩홀 필터 검색", group: "웨딩홀 (VEN) ★우선" },
    "place/place-home.html": { label: "PTN-001 웨딩 플레이스 홈", group: "웨딩플레이스 (PTN) ★우선" },
  },
};

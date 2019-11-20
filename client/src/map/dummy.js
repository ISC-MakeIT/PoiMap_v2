const CATEGORY = [
  {
    name: 'ペットボトル',
    id: 'sort-PETbottle',
    img: 'PlasticBottle-icon.svg',
    flg: 0b0001
  },
  {
    name: '缶・ビン',
    id: 'sort-bottleCan',
    img: 'AluminumGlass-icon.svg',
    flg: 0b0010
  },
  {
    name: '燃えないゴミ',
    id: 'sort-NonBurn',
    img: 'NonBurnableGarbage-icon.svg',
    flg: 0b0100
  },
  {
    name: '燃えるゴミ',
    id: 'sort-CanBurn',
    img: 'BurnableGarbage-icon.svg',
    flg: 0b1000
  }
];

const MARKER_INFO = [
  {
    id: '1',
    types: '1000',
    lat: 35.465786,
    lng: 139.622313,
    name: '横浜駅'
  },
  {
    id: '2',
    types: '1010',
    lat: 35.471027,
    lng: 139.627114,
    name: '神奈川駅'
  },
  {
    id: '3',
    types: '1100',
    lat: 35.459559,
    lng: 139.616207,
    name: '平沼橋駅'
  },
  {
    id: '4',
    types: '0010',
    lat: 35.453406,
    lng: 139.608495,
    name: '西横浜駅'
  },
  {
    id: '5',
    types: '0011',
    lat: 35.45665,
    lng: 139.619537,
    name: '戸部駅'
  }
];

export { CATEGORY, MARKER_INFO };

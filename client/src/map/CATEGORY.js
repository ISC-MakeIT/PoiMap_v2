const CATEGORY = [
  {
    name: 'ペットボトル',
    id: 'sort-PETbottle',
    img: 'selectPlasticBottle-icon.svg',
    flg: 0b0001
  },
  {
    name: '缶・ビン',
    id: 'sort-bottleCan',
    img: 'selectluminumGlass-icon.svg',
    flg: 0b0010
  },
  {
    name: '燃えないゴミ',
    id: 'sort-NonBurn',
    img: 'selectNonBurnableGarbage-icon.svg',
    flg: 0b0100
  },
  {
    name: '燃えるゴミ',
    id: 'sort-CanBurn',
    img: 'selectBurnableGarbage-icon.svg',
    flg: 0b1000
  }
];

export default CATEGORY;

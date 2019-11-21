import MARKER_INFO from './MARKER_INFO';
import CATEGORY from './CATEGORY';

const createDetailpage = (j, mapSection) => {
  const detailPage = document.createElement('section');
  detailPage.id = detailPage;
  mapSection.appendChild(detailPage);
  const garbageName = document.createElement('p');
  garbageName.innerHTML = MARKER_INFO[j].name;
  detailPage.appendChild(garbageName);
  const garbageCategorys = document.createElement('ul');
  detailPage.appendChild(garbageCategorys);
  CATEGORY.map(
    item => {
      if (MARKER_INFO[j].types & item.flg >= 1) {
        const gabargeType = document.createElement('li');
        gabargeType.src = item.img;
        garbageCategorys.appendChild(gabargeType);
      }
    })
}
export default createDetailpage;

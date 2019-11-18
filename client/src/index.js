import Map from './map/map';
import { CATEGORY, MARKER_INFO } from './map/dummy';

const TARGET = document.querySelector('#navigation-page-link');
TARGET.onclick = () => {
  new Map(CATEGORY, MARKER_INFO).init();
};

const createMapHeader = () => {
  const header = document.createElement('header');
  const backHomeIcon = document.createElement('img');
  backHomeIcon.src = '../../svg/back.svg';
  const h1 = document.createElement('h1');
  h1.innerText = '現在位置';
  header.appendChild(backHomeIcon);
  header.appendChild(h1);
}
export default createMapHeader;

import trashBoxLabel from './CATEGORY';

const filterGarbageType = (filterFlg,mapSection) => {
  const nav = document.createElement('nav');
  nav.id = 'filter-nav';
  const ul = document.createElement('ul');
  trashBoxLabel.map(i => {
    const li = document.createElement('li');
    li.id = i.id;
    li.addEventListener('click', () => {
      filterFlg ^= i.flg;
    });
    const sortName = document.createElement('p');
    sortName.id = `${i.Id}-txt`;
    sortName.innerText = i.Name;
    const sortIcon = document.createElement('img');
    sortIcon.id = `${i.Id}-img`;
    sortName.appendChild(sortIcon);
    li.appendChild(sortName);
    ul.appendChild(li);
    return trashBoxLabel;
  });
  nav.appendChild(ul);
  mapSection.append(nav);
}

export default filterGarbageType;

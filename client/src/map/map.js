class Map {
  constructor(markerInfo) {
    this.markerInfo = markerInfo;
    this.target = document.querySelector('#navigation-page-link');
    this.root = document.createElement('section');
    this.root.id = '';
    this.map;
    this.onMarker = markerInfo.slice();
    this.filterFlg = 0b0000;
    this.category = [
      // 変更の余地ありそう
      {
        Name: 'ペットボトル',
        Id: 'sort-PETbottle',
        Img: '../../svg/selectPlasticBottle-icon.svg',
        Flg: 0b0001
      },
      {
        Name: '缶・ビン',
        Id: 'sort-bottleCan',
        Img: '../../svg/selectPlasticBottle-icon.svg',
        Flg: 0b0010
      },
      {
        Name: '燃えないゴミ',
        Id: 'sort-NonBurn',
        Img: '../../svg/selectPlasticBottle-icon.svg',
        Flg: 0b0100
      },
      {
        Name: '燃えるゴミ',
        Id: 'sort-CanBurn',
        Img: '../../svg/selectPlasticBottle-icon.svg',
        Flg: 0b1000
      }
    ];
  }

  init() {
    if (!navigator.geolocation) {
      alert('このブラウザーは対応していません');
      return;
    }
    const mapSection = document.createElement('section');
    mapSection.id = 'map';

    const success = pos => {
      const nowLat = pos.coords.latitude;
      const nowLng = pos.coords.longitude;
      const nowLatLng = new google.maps.LatLng(nowLat, nowLng);
      const mapOptions = {
        zoom: 15,
        center: nowLatLng,
        mapTypeId: 'roadmap',
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_BOTTOM
        }
      };
      this.map = new google.maps.Map(mapSection, mapOptions);
      // filterを作成
      const nav = document.createElement('nav');
      nav.id = 'filter-nav';
      const ul = document.createElement('ul');
      this.category.map(i => {
        const li = document.createElement('li');
        li.id = i.Id;
        li.addEventListener('click', () => {
          this.filterFlg ^= i.Flg;
        });
        const sortName = document.createElement('p');
        sortName.id = `${i.Id}-txt`;
        sortName.innerText = i.Name;
        const sortIcon = document.createElement('img');
        sortIcon.id = `${i.Id}-img`;
        sortName.appendChild(imsortIcon);
        li.appendChild(sortName);
        ul.appendChild(li);
      });
      nav.appendChild(ul);
      mapSection.append(nav);
    };
    const error = error => {
      section.innerHTML = '<p>GoogleMapを表示できません</p> ';
      console.error(error);
    };
    const header = document.createElement('header');
    const backHomeIcon = document.createElement('img');
    backHomeIcon.src = '../../svg/back.svg';
    const h1 = document.createElement('h1');
    h1.innerText = '現在位置';
    header.appendChild(backHomeIcon);
    header.appendChild(h1);

    navigator.geolocation.getCurrentPosition(success, error);
    this.target.appendChild(section);

    this.map.addListener('click', e => {
      this.getClickMarker(e.latLng)
    })

    const addMarker = docment.createElement('div');
    const addMarkerText = document.createElement('p');
    addMarkerText.innerHTML = '新しくゴミ箱を追加しますか？';
    addMarker.appendChild(addMarkerText);

    const addMarkerYes = document.createElement('button');
    const addMarkerNo = document.createElement('button');

    addMarker.appendChild(addMarkerYes);
    addMarker.appendChild(addMarkerNo);

    addMarkerYes.addEventListener('click', () => {
      this.createPostForm();
    })

    addMarkerNo, addEventListener('click', () => {
      this.removeMarker();
    })
  }

  displayMarker() {
    this.onMarker.map(i => {
      const marker = new google.maps.Marker({
        position: { lat: i.lat, lng: i.lng },
        map: this.map
      });
      marker.setMap(this.map);
    });
  }

  removeMarker() {
    this.onMarker.map(i => {
      const marker = new google.maps.Marker({
        position: { lat: i.lat, lng: i.lng },
        map: this.map
      });
      marker.setMap(null);
    });
  }

  filterMarker() {
    this.removeMarker();
    const tmp = this.markerInfo.filter(item => item.types & this.filterFlg);
    this.onMarker = null;
    this.onMarker = tmp.slice();
    this.displayMarker();
  }

  getClickMarker(latLng) {
    const marker = new google.maps.Marker({
      position: latLng,
      map: this.map
    });
  }

  createPostForm() {
    const postForm = document.createElement('main');
    const postName = document.createElement('p');
    const postCategorys = document.createElement('li');
    postForm.appendChild(postName);
    postForm.appendChild(postCategorys);
  }
}

export default Map;

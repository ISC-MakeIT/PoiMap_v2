class Map {
  constructor(markerInfo, trashBoxLabel) {
    this.markerInfo = markerInfo;
    this.target = document.querySelector('#navigation-page-link');
    this.root = document.createElement('section');
    this.root.id = '';
    this.map;
    this.onMarker = markerInfo.slice();
    this.filterFlg = 0b0000;
    this.trashBoxLabel = trashBoxLabel;
  }

  init() {
    if (!navigator.geolocation) {
      alert('このブラウザーは対応していません');
      return;
    }
    const mapSection = document.createElement('section');
    mapSection.id = 'map';

    const request_success = pos => {
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
      this.trashBoxLabel.map(i => {
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
    const request_error = error => {
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

    navigator.geolocation.getCurrentPosition(request_success, request_error);
    this.target.appendChild(section);

    this.map.addEventListener('click', e => {
      this.getClickMarker(e.latLng);

      // 投稿場所の確認バーを生成（divは変更余地あり）
      const addMarker = docment.createElement('div');
      mapSection.appendChild(addMarker);
      const addMarkerText = document.createElement('p');
      addMarkerText.innerHTML = '新しくゴミ箱を追加しますか？';
      addMarker.appendChild(addMarkerText);

      // 返答ボタン生成
      const addMarkerYes = document.createElement('button');
      const addMarkerNo = document.createElement('button');
      addMarker.appendChild(addMarkerYes);
      addMarker.appendChild(addMarkerNo);

      // 「はい」が押されたとき
      addMarkerYes.addEventListener('click', () => {
        this.createPostForm();
      });

      // 「いいえ」が押されたとき
      addMarkerNo.addEventListener('click', () => {
        this.removeClickMarker(e.latLng);
        mapSection.removeChild(addMarker);
      });

      postButton.addEventListener('click', () => {
        this.removePostForm();
        // ザーバーに座標を送る（予定）
        const postLatLng = e.latLng;
      });
    });
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
    marker.setup(this.map);
  }

  removeClickMarker(latLng) {
    const marker = new google.map.Marker({
      position: latLng,
      map: this.map
    });
    marker.setup(null);
  }

  createPostForm() {
    const postForm = document.createElement('main');
    postForm.id = 'postForm';
    const postName = document.createElement('imput');
    postName.type = 'text';
    const postCategorys = document.createElement('li');
    const postImg = document.createElement('img');
    const postButton = document.createElement('submit');
    postButton.type = 'submit';
    postButton.innerHTML = '投稿';
    mapSection.appendChild(postForm);
    postForm.appendChild(postName);
    postForm.appendChild(postCategorys);
    postForm.appendChild(postImg);
    postForm.appendChild(postButton);
  }

  removePostForm() {
    const postForm = document.getElementById('postForm');
    mapSection.removeChild(postForm);
  }
}

export default Map;

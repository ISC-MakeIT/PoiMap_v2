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

    // マップをクリックして座標を取得
    this.map.addListener('click', e => {

      // 取得した座標にピンを生成
      this.getClickMarker(e.latLng);

      // 投稿場所の確認バーを生成（divは変更余地あり）
      const addMarker = docment.createElement('div');
      mapSection.appendChild(addMarker);

      // 確認文生成
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
      addMarkerNo.
        addEventListener('click', () => {
          this.removeClickMarker(e.latLng);
          mapSection.removeChild(addMarker);
        });

      // 「投稿」が押されたとき
      postButton.addEventListener('click', () => {
        // 要素を削除
        this.removePostForm();
        // ザーバーに座標を送る
        const postLatLng = e.latLng;
      })
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

  // クリックした座標にピンを設置
  getClickMarker(latLng) {
    const marker = new google.maps.Marker({
      position: latLng,
      map: this.map
    });
    marker.setup(this.map);
  }

  // クリックした座標に設置したピンを削除
  removeClickMarker(latLng) {
    const marker = new google.map.Marker({
      position: latLng,
      map: this.map
    })
    marker.setup(null);
  }

  // 投稿ページを生成
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

  // 投稿フォームを削除
  removePostForm() {
    const postForm = document.getElementById('postForm');
    mapSection.removeChild(postForm);
  }
}

export default Map;

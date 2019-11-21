import  MARKER_INFO from './MARKER_INFO';
import createConfirmationBar from './createConfirmationBar';
import createPostForm from './createPostForm';
import createDetailPage from './createDetailpage';

const createMapContents = (map, mapSection) => {

  mapSection.addEventListener('click', e => {
    getClickMarker(e.latLng,map);

    // 投稿場所の確認バーを生成
    createConfirmationBar(mapSection);

    // postButton.addEventListener('click', () => {
    //   const idNum = MARKER_INFO.length;
    //   const postLat = e.lat;
    //   const postLng = e.lng;
    //   removePostForm();
    //   // サーバーに座標を送る
    //   //まだデプロイしていないのでローカルホスト
    //   // fetch(localhost:,
    //   //   method: 'POST',
    //   //   headers: {
    //   //     'Content-Type': 'application/json'
    //   // },
    //   //   body: JSON.stringify({
    //   //     'id': idNum,
    //   //     'lat': postLat,
    //   //     'lng': postLng,
    //   //     'name': postName.innerHTML
    //   //   })
    //   // )
    // });

    // 詳細ページ生成
    for (let i = 0; i < MARKER_INFO.length; i++) {
      MARKER_INFO[i].onClick = createDetailPage(i,mapSection);
    }
  });

  const getClickMarker = (latLng,map) => {
    const marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
    marker.setMap(map);
  }

  const removeClickMarker= (latLng)=> {
    const marker = new google.map.Marker({
      position: latLng,
      map: map
    });
    marker.setMap(null);
  }
}
export default createMapContents;

class Map {
  constructor(marker) {
    this.marker = marker;
    this.target = document.getElementById('map');
  }

  init() {
    if (!navigator.geolocation) {
      alert('このブラウザーは対応していません');
      return;
    }
    const success = pos => {
      const nowLat = pos.coords.latitude;
      const nowLng = pos.coords.longitude;
      const nowLatLng = new google.maps.LatLng(nowLat, nowLng);
      const mapOptions = {
        zoom: 15,
        center: MyLatLng,
        mapTypeId: 'roadmap',
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_BOTTOM
        }
      };
    };
    const error = error => {
      console.log(error);
    };
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

export default Map;

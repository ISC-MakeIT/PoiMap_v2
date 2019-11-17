class Map {
  constructor(markerInfo) {
    this.markerInfo = markerInfo;
    this.target = document.getElementById('map');
    this.map;
    this.onMarker = markerInfo;
    this.filterFlg = 0b0000;
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
        center: nowLatLng,
        mapTypeId: 'roadmap',
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_BOTTOM
        }
      };
      this.map = new google.maps.Map(this.target, mapOptions);
    };
    const error = error => {
      console.log(error);
    };
    navigator.geolocation.getCurrentPosition(success, error);
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
}

export default Map;

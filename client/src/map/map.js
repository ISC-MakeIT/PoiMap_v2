import CATEGORY from "./CATEGORY";
import MARKER_INFO from './MARKER_INFO';
import createMapHeader from "./createMapHeader";
// import createPostForm from './createPostForm';
// import createConfirmationBar from './createConfirmationBar';
// import createDetailPage from './createDetailpage';
import filterGarbageType from "./filterGarbageType";
import createMapContents from "./createMapContents";

class Map {
  constructor(markerInfo) {
    this.markerInfo = markerInfo;
    this.target = document.querySelector("#navigation-page-link");
    this.root = document.createElement("section");
    this.root.id = "";
    this.map;
    this.onMarker = MARKER_INFO.slice();
    this.filterFlg = 0b0000;
    this.trashBoxLabel = CATEGORY;
  }

  init() {
    if (!navigator.geolocation) {
      alert("このブラウザーは対応していません");
      return;
    }
    const mapSection = document.createElement("section");
    mapSection.id = "map";
    const request_success = pos => {
      const nowLat = pos.coords.latitude;
      const nowLng = pos.coords.longitude;
      const nowLatLng = new google.maps.LatLng(nowLat, nowLng);
      const mapOptions = {
        zoom: 15,
        center: nowLatLng,
        mapTypeId: "roadmap",
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_BOTTOM
        }
      };
      this.map = new google.maps.Map(mapSection, mapOptions);
      // filterを作成

      filterGarbageType(this.filterFlg,mapSection);
    };
    const request_error = error => {
      section.innerHTML = "<p>GoogleMapを表示できません</p> ";
      console.error(error);
    };
    createMapHeader();

    navigator.geolocation.getCurrentPosition(request_success, request_error);
    this.target.appendChild(mapSection);

    createMapContents(this.map, mapSection);
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

  removePostForm() {
    const postForm = document.getElementById("postForm");
    mapSection.removeChild(postForm);
  }
}

export default Map;

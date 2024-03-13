// Instructions to every other class
// on how they can be an argument to 'addMarker'
//this mean you set the type to location
//if what you pass have same structuer of location it be work
export interface mappable {
  location: {
    lat: number;
    lng: number;
  };
}
export class Map {
  private googleMaps: google.maps.Map;
  constructor(divId: string, zoom: number) {
    this.googleMaps = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom,
        center: { lat: 1, lng: 20 },
      }
    );
  }
  getZoom() {
    return this.googleMaps.getZoom();
  }
  getCenter() {
    return this.googleMaps.getCenter();
  }
  getDiv() {
    return this.googleMaps.getDiv();
  }
  addMarker(mappable: mappable, content: string | null) {
    const marker = new google.maps.Marker({
      map: this.googleMaps,
      position: { lat: mappable.location.lat, lng: mappable.location.lng },
    });
    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content,
      });

      infoWindow.open(this.googleMaps, marker);
    });
  }
}

export class Place {
  constructor(title, imageURI, address, location) {
    this.title = title;
    this.imageURI = imageURI;
    this.address = address;
    this.location = location;
    // this.address = location.address;
    // this.location = { lat: location.lat, lng: location.lng };

    this.id = new Date().toString() + Math.random().toString();
  }
}

/// <reference types="@types/google.maps" />
import { Company } from "./Company";
import { Map } from "./Map";
import { User } from "./User";

// const map = new google.maps.Map(mapDiv, {
//   zoom: 5,
//   center: { lat: new Usre().location.lat, lng: new Usre().location.lng },
// });
// console.log(map.getTilt()?.toString());
// const lat = new Usre().location.lat;
// const lng = new Usre().location.lng;
const user = new User();
const company = new Company();
const map = new Map("map", 1);
map.addMarker(user, "hi user");
map.addMarker(company, "this is your company");
console.log(map.getZoom());

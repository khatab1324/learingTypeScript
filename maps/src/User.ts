import { faker } from "@faker-js/faker";
import { mappable } from "./Map";
export class User implements mappable {
  //this will make sure that User class have the same structure as mappable
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }; //we need to initialize the location object before we can use it
    //don't do this this.location.lat = parseFloat(faker.address.latitude());
    //because it will throw an error
  }
}

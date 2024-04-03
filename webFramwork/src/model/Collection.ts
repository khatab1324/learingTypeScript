import axios, { AxiosPromise, AxiosResponse } from "axios";
import { Eventing } from "./Eventing";
import { url } from "..";

export class Collection<T, Dprop> {
  modles: T[] = [];
  events: Eventing = new Eventing();
  constructor(public BuildingElement) {}
  get trigger() {
    return this.events.trigger;
  }
  get on() {
    return this.events.on;
  }
  fetchAll(): void {
    axios.get(url).then((response: AxiosResponse) => {
      response.data.forEach((value: Dprop) => {
        const element = this.BuildingElement(value);
        this.modles.push(element);
      });
      this.trigger("change");
    });
  }
}

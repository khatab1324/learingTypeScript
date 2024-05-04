import axios, { AxiosResponse } from "axios";
import { Model } from "./Model";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { SyncApi } from "./SyncApi";
import { url } from "..";
export interface UserProp {
  id?: number;
  name?: string;
  age?: number;
  city?: string;
}
export class User extends Model<UserProp> {
  static buildUser(attrs: UserProp): User {
    return new User(
      new Attributes<UserProp>(attrs),
      new Eventing(),
      new SyncApi<UserProp>(url)
    );
  }
  setRandomAge() {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
  setName(name: string) {
    this.set({ name });
  }
}

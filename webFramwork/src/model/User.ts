import axios, { AxiosResponse } from "axios";
import { Model } from "./Model";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { SyncApi } from "./SyncApi";
import { url } from "..";
import { Collection } from "./Collection";

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
  static buildUserCollection(): Collection<User, UserProp> {
    return new Collection<User, UserProp>(User.buildUser);
  }
}

import axios, { AxiosResponse } from "axios";
import { Model } from "./Model";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { SyncApi } from "./SyncApi";

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
      new SyncApi<UserProp>("http://localhost:3000/users")
    );
  }
}

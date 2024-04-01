<<<<<<< HEAD
import { Eventing } from "./Eventing";
import { SyncApi } from "./SyncApi";
import { Attributes } from "./Attributes";
import { AxiosResponse } from "axios";
import { Model } from "./Model";
=======
import axios, { AxiosResponse } from "axios";
>>>>>>> 5c19ece26f52b715c5459284e939009ae0940cc0

export interface UserProp {
  id?: number;
  name?: string;
  age?: number;
  city?: string;
}

<<<<<<< HEAD
export class User extends Model<UserProp> {
  static buildUser(attrs: UserProp): User {
    return new User(
      new Attributes<UserProp>(attrs),
      new Eventing(),
      new SyncApi<UserProp>("http://localhost:3000/users")
    );
=======
export class User {
  constructor(private data: UserProp) {}
  get(username: string): number | string {
    return this.data[username];
  }

  set(updateData: UserProp): void {
    // this.data = updateData;//search can we do this
    Object.assign(this.data, updateData);
  }
  getCurrentData() {
    return this.data;
  }

  async fetch() {
    await axios
      .get(`http://localhost:3000/users/${this.get("id")}`)
      .then((response: AxiosResponse) => {
        this.set(response.data);
      });
  }

  save() {
    const id = this.get("id");
    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      axios.post("http://localhost:3000/users/", this.data);
    }
>>>>>>> 5c19ece26f52b715c5459284e939009ae0940cc0
  }
}

import axios, { AxiosResponse } from "axios";
import { User, UserProp } from "./User";

export class UsreApi {
  public userData: UserProp = {};
  constructor(private url: string) {}
  async fetchUsername(username: string) {
    const users: UserProp[] = await axios
      .get(this.url.concat(`/users`))
      .then((response: AxiosResponse) => {
        return response.data;
      });
    const user = users.filter((user) => {
      if (user.name === username) return user;
    });
    if (user) {
      this.userData = user[0];
      return user[0];
    }
    return "user not found";
  }

  async fetchAll() {
    const x = await axios.get(this.url.concat(`/users`));
    Object.assign(this.userData, x.data);
  }
  get() {
    return this.userData;
  }
  save(userData: User) {
    axios.post(this.url.concat(`/users`), userData.getCurrentData());
  }
}

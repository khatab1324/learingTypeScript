import axios, { AxiosResponse } from "axios";
import { UserProp } from "./User";
export class UsreApi {
  public userData: UserProp;
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
    const users = await axios.get(this.url.concat(`/users`));
    return users;
  }
  save(userData: UserProp) {
    axios.post(this.url).then((response: AxiosResponse) => {});
  }
}

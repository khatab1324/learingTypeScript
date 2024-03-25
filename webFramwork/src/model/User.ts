import axios, { AxiosResponse } from "axios";

export interface UserProp {
  id?: number;
  name?: string;
  age?: number;
  city?: string;
}

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
  }
}

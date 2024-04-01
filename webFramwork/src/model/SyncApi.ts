import axios, { AxiosPromise, AxiosResponse } from "axios";
interface HasId {
  id?: number;
}
export class SyncApi<T extends HasId> {
  // public data: HasId = { id: 1 };
  constructor(private url: string) {}
  // async fetchUsername(username: string) {
  //   const users: T[] = await axios
  //     .get(this.url)
  //     .then((response: AxiosResponse) => {
  //       return response.data;
  //     });
  //   const user = users.filter((user) => {
  //     if (user.name === username) return user;
  //   });
  //   if (user) {
  //     this.data = user[0];
  //     return user[0];
  //   }
  //   return "user not found";
  // }

  async fetchAll(): AxiosPromise {
    return axios.get(this.url);
  }

  async fetch(id: number): AxiosPromise<T> {
    return axios.get(`${this.url}/${id}`);
  }

  save(data: T): AxiosPromise {
    const id = data.id;
    //the type of id is number | undefined that's because we run tsc --init and in that file there is "strict": true
    //but we will not use it so we will remove it
    if (!id) return axios.post(this.url, data);
    else {
      return axios.put(`${this.url}/${id}`, data);
    }
  }
}

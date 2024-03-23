import axios, { AxiosResponse } from "axios";

export interface UserProp {
  id?: number;
  name?: string;
  age?: number;
  city?: string;
}
type Callback = () => void;
export class User {
  events: { [key: string]: Callback[] } = {};
  //i put [] to let js know this is key
  constructor(private data: UserProp) {}
  get(username: string): number | string {
    return this.data[username];
  }

  set(updateData: UserProp): void {
    // this.data = updateData;//search can we do this
    Object.assign(this.data, updateData);
  }

  on(eventName: string, callback: Callback) {
    //what we looking is on will be and object that will have key and the value is callback function like this
    //events:{change:[()=>{do somthing},()=>{do somthing else}],hover:[],move:[()=>{do somthing}]}
    //the [] we have callback function and we will use them
    let handleEvent = this.events[eventName] || [];
    handleEvent.push(callback);
    this.events[eventName] = handleEvent;
  }

  trigger(eventName: string) {
    let handler = this.events[eventName];
    if (!handler) {
      return;
    }
    handler.forEach((callback) => {
      callback();
    });
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

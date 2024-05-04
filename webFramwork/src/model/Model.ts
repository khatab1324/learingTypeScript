import { AxiosPromise, AxiosResponse } from "axios";
type Callback = () => void;
interface ModelAttributes<T> {
  get<K extends keyof T>(key: K): T[K];
  set(updateData: T): void;
  getAll(): T;
}
interface Events {
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}
interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
  fetchAll(): AxiosPromise;
}
export interface HasId {
  id?: number;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}
  //steven use this hard code i say he did't see eventing will change
  //but i don't know i am not comfortible to use hard code
  //steven give me 3 option 1) to pass the event in constructor beside data 2)the same thing but make constructor just for proprity like classes 3)hard code
  //TODO: think in way that you will not use hard coding and will not take lines of code to config it with every user
  //TODO: stephon have problem that when he refercne to this.events.get in the get() that in attributes it will swap this with user but for me
  // * i find the answer becuase we have the same names like events it the same in attributes and user that mean it will use the same storge but try use another neme like eventesssss it will cause error
  //it work fine that in lectuer 179 and he but arrow function
  get on() {
    return this.events.on;
    //* here i call the refrence not the function
  }
  get trigger() {
    return this.events.trigger;
  }
  get get() {
    return this.attributes.get; //this just the refrence
  }
  set(updateData: T) {
    this.attributes.set(updateData);
    this.events.trigger("change");
  }
  fetch(): void {
    const id = this.get("id");

    if (typeof id !== "number") {
      throw new Error("Cannot fetch without an id");
    }

    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }
  fetchAll(): any {
    this.sync.fetchAll().then((response: AxiosResponse): void => {
      // this.set(response.data);
      console.log(response.data);
    });
  }
  save() {
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse) => {
        this.trigger("save");
      })
      .catch((err) => {
        this.trigger("err");
      });
  }
}

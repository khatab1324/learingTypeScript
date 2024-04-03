export class Attributes<T extends object> {
  constructor(private data: T) {}
  get = <K extends keyof T>(key: K): T[K] => {
    //this expression is a type guard that checks if the key is a key of the data object
    // if it is not, it will throw an error
    //that mean it work like this : get('name') will return string and get('age') will return number
    //K extends keyof T mean K can be any key of T
    //T[K] mean the value of key K in T
    //if we have T = {name:string,age:number} and K = 'name' then T[K] = string
    // *console.log(this);//we use array to make (this) refer to Attriputes
    //that mean if we use refrence to get we will get the refrence of the function not the function itself

    return this.data[key];
  };
  set(updateData: T): void {
    // this.data = updateData;//search can we do this
    Object.assign(this.data, updateData);
  }
  getAll() {
    return this.data;
  }
}

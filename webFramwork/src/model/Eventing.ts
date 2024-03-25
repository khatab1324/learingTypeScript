type Callback = () => void;
export class Eventing {
  events: { [key: string]: Callback[] } = {};
  //i put [] to let js know this is key

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
}

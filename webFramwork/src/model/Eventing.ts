type Callback = () => void;
export class Eventing {
  events: { [key: string]: Callback[] } = {};
  //i put [] to let js know this is key

<<<<<<< HEAD
  on = (eventName: string, callback: Callback) => {
=======
  on(eventName: string, callback: Callback) {
>>>>>>> 5c19ece26f52b715c5459284e939009ae0940cc0
    //what we looking is on will be and object that will have key and the value is callback function like this
    //events:{change:[()=>{do somthing},()=>{do somthing else}],hover:[],move:[()=>{do somthing}]}
    //the [] we have callback function and we will use them
    let handleEvent = this.events[eventName] || [];
    handleEvent.push(callback);
    this.events[eventName] = handleEvent;
<<<<<<< HEAD
  };

  trigger = (eventName: string) => {
=======
  }

  trigger(eventName: string) {
>>>>>>> 5c19ece26f52b715c5459284e939009ae0940cc0
    let handler = this.events[eventName];
    if (!handler) {
      return;
    }
    handler.forEach((callback) => {
      callback();
    });
<<<<<<< HEAD
  };
=======
  }
>>>>>>> 5c19ece26f52b715c5459284e939009ae0940cc0
}

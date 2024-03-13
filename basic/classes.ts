class Vehicles {
  // color:string
  //   constructor(color: string) {
  //     this.color=colro
  // }
  //this is the same thing
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicles("orange");
console.log(vehicle.color);

// class Car extends Vehicle {
//  private drive(): void {
//    console.log('vroom');
//  }
//  startDrivingProcess(): void {
//    this.drive();
//    this.honk();
//  }
// }

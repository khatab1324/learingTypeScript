class Car {
  color = "red";

  get CarColor(): string {
    return `the car color is ${this.color}`;
  }
  @testDecorators
  WhatIsCar(): void {
    console.log("foxVagin");
  }
}

function testDecorators(target: any, key: string): void {
  console.log("Target", target);
  console.log("key", key);
}

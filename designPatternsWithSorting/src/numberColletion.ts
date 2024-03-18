import { Sorter } from "./sortable";

export class NumberCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }
  swap(leftIndex: number, rightIndex: number): void {
    [this.data[leftIndex], this.data[rightIndex]] = [
      this.data[rightIndex],
      this.data[leftIndex],
    ];
  }
  get length() {
    return this.data.length;
  }
  //get allow you to call this function like this collection.length without ()
  //but the function should not have parameter
}

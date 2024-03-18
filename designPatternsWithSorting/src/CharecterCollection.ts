import { Sorter } from "./index";

export class CharectorCollection extends Sorter {
  arrString: string[];
  constructor(public str: string) {
    super();
    this.arrString = str.split("").filter((str) => str !== " ");
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.arrString[leftIndex] > this.arrString[rightIndex];
  }
  swap(leftIndex: number, rightIndex: number): void {
    [this.arrString[leftIndex], this.arrString[rightIndex]] = [
      this.arrString[rightIndex],
      this.arrString[leftIndex],
    ];

    this.str = this.arrString.join("");
  }

  get length() {
    return this.arrString.length;
  }
}

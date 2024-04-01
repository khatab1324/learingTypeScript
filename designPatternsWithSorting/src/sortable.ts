export abstract class Sorter {
  //we use abstract class to make sure that the class that extends this class should have the following method and property
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;
  //if error class CharectorCollection extends index_1.Sorter { ^^^^^^
  //TypeError: Class extends value undefined is not a constructor or null at Object.<anonymous>
  //to solve it you should add abstract keyword to the class
  //or
  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}

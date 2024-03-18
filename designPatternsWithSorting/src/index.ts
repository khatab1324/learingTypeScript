import { CharectorCollection } from "./CharecterCollection";
import { NumberCollection } from "./numberColletion";
import { SinglyLinkedList } from "./singlyLinkedList";
interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

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

// const numberCollection = new NumberCollection([1, 4, 2, -100, 22]);
// const sorter = new Sorter(numberCollection);
// sorter.sort();
// console.log(numberCollection.data);

//now there is no need to create sorter object because we make the sorter class abstract
//so we can call the sort method directly from the object
//and the object should have the following method and property

const numberCollection = new NumberCollection([1, 4, 2, -100, 22]);
numberCollection.sort();
console.log(numberCollection.data);

const charectorCollection = new CharectorCollection("fdssdf  sdfADFa");
charectorCollection.sort();
console.log(charectorCollection);

const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(1);
singlyLinkedList.push(500);
singlyLinkedList.push(3);
singlyLinkedList.push(50);
console.log(singlyLinkedList.indexAt(3));
console.log(singlyLinkedList);

singlyLinkedList.sort();

singlyLinkedList.print();

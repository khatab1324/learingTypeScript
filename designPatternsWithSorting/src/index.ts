import { CharectorCollection } from "./CharecterCollection";
import { NumberCollection } from "./numberColletion";
import { SinglyLinkedList } from "./singlyLinkedList";

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
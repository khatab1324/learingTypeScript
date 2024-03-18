"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharecterCollection_1 = require("./CharecterCollection");
const numberColletion_1 = require("./numberColletion");
const singlyLinkedList_1 = require("./singlyLinkedList");
// const numberCollection = new NumberCollection([1, 4, 2, -100, 22]);
// const sorter = new Sorter(numberCollection);
// sorter.sort();
// console.log(numberCollection.data);
//now there is no need to create sorter object because we make the sorter class abstract
//so we can call the sort method directly from the object
//and the object should have the following method and property
const numberCollection = new numberColletion_1.NumberCollection([1, 4, 2, -100, 22]);
numberCollection.sort();
console.log(numberCollection.data);
const charectorCollection = new CharecterCollection_1.CharectorCollection("fdssdf  sdfADFa");
charectorCollection.sort();
console.log(charectorCollection);
const singlyLinkedList = new singlyLinkedList_1.SinglyLinkedList();
singlyLinkedList.push(1);
singlyLinkedList.push(500);
singlyLinkedList.push(3);
singlyLinkedList.push(50);
console.log(singlyLinkedList.indexAt(3));
console.log(singlyLinkedList);
singlyLinkedList.sort();
singlyLinkedList.print();

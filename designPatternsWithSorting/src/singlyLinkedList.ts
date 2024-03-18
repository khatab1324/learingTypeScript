import { Sorter } from "./index";

class LNode {
  value: number;
  next: null | LNode;
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}
export class SinglyLinkedList extends Sorter {
  head: null | LNode;
  tail: null | LNode;
  length: number;
  constructor() {
    super();
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value: number) {
    let curreten = new LNode(value);
    if (!this.head) {
      this.head = curreten;
      this.tail = curreten;
    } else {
      if (this.tail) {
        //this to remove error that in ts
        //the error is what if the this.tail undefine
        this.tail.next = curreten;
        this.tail = curreten;
      }
    }
    this.length++;
  }
  indexAt(index: number) {
    if (!this.head) {
      throw new Error("there is no node");
    }
    let counter = 0;
    let node: LNode | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }

    throw new Error("Index out of bounds");
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error("List is empty");
    }
    return this.indexAt(leftIndex).value > this.indexAt(rightIndex).value;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.indexAt(leftIndex);
    const rightNode = this.indexAt(rightIndex);
    [leftNode.value, rightNode.value] = [rightNode.value, leftNode.value];
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: LNode | null = this.head;
    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }
}

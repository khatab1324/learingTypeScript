"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SinglyLinkedList = void 0;
const sortable_1 = require("./sortable");
class LNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class SinglyLinkedList extends sortable_1.Sorter {
    constructor() {
        super();
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value) {
        let curreten = new LNode(value);
        if (!this.head) {
            this.head = curreten;
            this.tail = curreten;
        }
        else {
            if (this.tail) {
                //this to remove error that in ts
                //the error is what if the this.tail undefine
                this.tail.next = curreten;
                this.tail = curreten;
            }
        }
        this.length++;
    }
    indexAt(index) {
        if (!this.head) {
            throw new Error("there is no node");
        }
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error("Index out of bounds");
    }
    compare(leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error("List is empty");
        }
        return this.indexAt(leftIndex).value > this.indexAt(rightIndex).value;
    }
    swap(leftIndex, rightIndex) {
        const leftNode = this.indexAt(leftIndex);
        const rightNode = this.indexAt(rightIndex);
        [leftNode.value, rightNode.value] = [rightNode.value, leftNode.value];
    }
    print() {
        if (!this.head) {
            return;
        }
        let node = this.head;
        while (node) {
            console.log(node.value);
            node = node.next;
        }
    }
}
exports.SinglyLinkedList = SinglyLinkedList;

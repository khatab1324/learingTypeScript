"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharectorCollection = void 0;
const sortable_1 = require("./sortable");
class CharectorCollection extends sortable_1.Sorter {
    constructor(str) {
        super();
        this.str = str;
        this.arrString = str.split("").filter((str) => str !== " ");
    }
    compare(leftIndex, rightIndex) {
        return this.arrString[leftIndex] > this.arrString[rightIndex];
    }
    swap(leftIndex, rightIndex) {
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
exports.CharectorCollection = CharectorCollection;

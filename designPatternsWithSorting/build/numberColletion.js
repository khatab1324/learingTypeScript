"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberCollection = void 0;
const sortable_1 = require("./sortable");
class NumberCollection extends sortable_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        [this.data[leftIndex], this.data[rightIndex]] = [
            this.data[rightIndex],
            this.data[leftIndex],
        ];
    }
    get length() {
        return this.data.length;
    }
}
exports.NumberCollection = NumberCollection;

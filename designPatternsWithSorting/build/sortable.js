"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    //if error class CharectorCollection extends index_1.Sorter { ^^^^^^
    //TypeError: Class extends value undefined is not a constructor or null at Object.<anonymous>
    //to solve it you should add abstract keyword to the class
    //or
    sort() {
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
exports.Sorter = Sorter;

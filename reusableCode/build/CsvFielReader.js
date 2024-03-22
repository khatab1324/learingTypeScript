"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const node_fs_1 = require("node:fs");
class CsvFileReader {
    //it not strign[][] because it will be array have MatchDate
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    read() {
        this.data = (0, node_fs_1.readFileSync)(this.filename, { encoding: "utf-8" } //we tell what we expect to get back
        )
            .split("\n")
            .map((str) => str.split(","));
    }
}
exports.CsvFileReader = CsvFileReader;
//we use type assertion when we know more about a value than TypeScript does
//we use type assertion when we want to override TypeScript's judgment
//we tell the TypeScript the row[5] is one of the value of the enum MatchResult

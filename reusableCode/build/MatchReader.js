"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const ParsToDate_1 = require("./ParsToDate");
//the tuple is an array that type of value that should be in the order when use the tuple
class MatchReader {
    constructor(reader) {
        this.reader = reader;
        this.matches = [];
    }
    load() {
        this.reader.read();
        this.matches = this.reader.data.map((row) => {
            return [
                (0, ParsToDate_1.ParseToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                //type assertion
                row[6],
            ];
        });
    }
}
exports.MatchReader = MatchReader;

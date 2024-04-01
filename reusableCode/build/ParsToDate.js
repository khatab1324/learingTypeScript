"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseToDate = void 0;
function ParseToDate(strDate) {
    const parseData = strDate.split("/").map((value) => parseInt(value));
    return new Date(parseData[2], parseData[1] - 1, parseData[0]);
}
exports.ParseToDate = ParseToDate;

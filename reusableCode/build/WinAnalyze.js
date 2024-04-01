"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinAnalyzer = void 0;
const MatchResult_1 = require("./MatchResult");
class WinAnalyzer {
    run(matches) {
        let manUnitedWins = 0;
        for (let match of matches) {
            if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin) {
                manUnitedWins++;
            }
            else if (match[2] === "Man United" &&
                match[5] === MatchResult_1.MatchResult.AwayWin) {
                manUnitedWins++;
            }
        }
        return `time win is ${manUnitedWins}`;
    }
}
exports.WinAnalyzer = WinAnalyzer;

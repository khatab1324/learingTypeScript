"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFielReader_1 = require("./CsvFielReader");
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const WinAnalyze_1 = require("./WinAnalyze");
const HtmlReport_1 = require("./reportPrint/HtmlReport");
// const readMatches = new CsvFileReader("football.csv");
//you can not use CsvFileReader because it have abstract
const csvFielReader = new CsvFielReader_1.CsvFileReader("football.csv");
const readMatches = new MatchReader_1.MatchReader(csvFielReader);
readMatches.load();
// let manUnitedWins = 0;
// for (let match of readMatches.matches) {
//   if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
//     manUnitedWins++;
//   } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
//     manUnitedWins++;
//   }
// }
const winAnalyzer = new WinAnalyze_1.WinAnalyzer();
// const consoleReport = new ConsoleReport();
const htmlReport = new HtmlReport_1.HtmlReport();
const summary = new Summary_1.Summary(readMatches.matches, winAnalyzer, htmlReport);
summary.buildAndPrint();
// console.log(`Man United won ${manUnitedWins} games`);

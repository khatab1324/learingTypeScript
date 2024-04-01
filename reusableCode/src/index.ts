//we run the command  npm i @types/node to install the node types
// npm i @types/node
//every we want to use node standard library we have to use this command
import { ConsoleReport } from "./reportPrint/consoleReport";
import { CsvFileReader } from "./CsvFielReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { WinAnalyzer } from "./WinAnalyze";
import { HtmlReport } from "./reportPrint/HtmlReport";

// const readMatches = new CsvFileReader("football.csv");
//you can not use CsvFileReader because it have abstract
const csvFielReader = new CsvFileReader("football.csv");
const readMatches = new MatchReader(csvFielReader);
readMatches.load();

// let manUnitedWins = 0;
// for (let match of readMatches.matches) {
//   if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
//     manUnitedWins++;
//   } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
//     manUnitedWins++;
//   }
// }
const winAnalyzer = new WinAnalyzer();
// const consoleReport = new ConsoleReport();
const htmlReport = new HtmlReport();
const summary = new Summary(readMatches.matches, winAnalyzer, htmlReport);
summary.buildAndPrint();

// console.log(`Man United won ${manUnitedWins} games`);

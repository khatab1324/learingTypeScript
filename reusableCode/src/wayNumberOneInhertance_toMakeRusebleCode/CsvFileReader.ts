// import { readFileSync } from "node:fs";
// import { MatchResult } from "./MatchResult";

// //we will use tuple to represent a row of data
// type MatchData = [Date, string, string, number, number, MatchResult, string];
// //the tuple is an array that type of value that should be in the order when use the tuple

// export abstract class CsvFileReader<T> {
//   //<T> is a generic type
//   //you can think of it as a function argument, but for types in a class or function
//   //we will pass the type of the data that we want to get back
//   //that mean pass the type as arguments
//   data: T[] = [];

//   //it not strign[][] because it will be array have MatchDate
//   constructor(public filename: string) {}
//   abstract mapRow(row: string[]): T;
//   read(): void {
//     this.data = readFileSync(
//       this.filename,
//       { encoding: "utf-8" } //we tell what we expect to get back
//     )
//       .split("\n")
//       .map((str: string): string[] => str.split(","))
//       .map(this.mapRow);
//   }
// }
// //we use type assertion when we know more about a value than TypeScript does
// //we use type assertion when we want to override TypeScript's judgment
// //we tell the TypeScript the row[5] is one of the value of the enum MatchResult

import { readFileSync } from "node:fs";

export class CsvFileReader {
  data: string[][] = [];
  //it not strign[][] because it will be array have MatchDate
  constructor(public filename: string) {}
  read(): void {
    this.data = readFileSync(
      this.filename,
      { encoding: "utf-8" } //we tell what we expect to get back
    )
      .split("\n")
      .map((str): string[] => str.split(","));
  }
}
//we use type assertion when we know more about a value than TypeScript does
//we use type assertion when we want to override TypeScript's judgment
//we tell the TypeScript the row[5] is one of the value of the enum MatchResult

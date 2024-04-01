import { MatchResult } from "./MatchResult";
import { ParseToDate } from "./ParsToDate";
interface MatchDataReader {
  read(): void;
  data: string[][];
}
//we will use tuple to represent a row of data
type MatchData = [Date, string, string, number, number, MatchResult, string];
//the tuple is an array that type of value that should be in the order when use the tuple

export class MatchReader {
  matches: MatchData[] = [];
  constructor(public reader: MatchDataReader) {}
  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        ParseToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        //type assertion
        row[6],
      ];
    });
  }
}

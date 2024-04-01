import { MatchResult } from "./MatchResult";

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class WinAnalyzer {
  run(matches: MatchData[]): string {
    let manUnitedWins = 0;
    for (let match of matches) {
      if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
      } else if (
        match[2] === "Man United" &&
        match[5] === MatchResult.AwayWin
      ) {
        manUnitedWins++;
      }
    }
    return `time win is ${manUnitedWins}`;
  }
}

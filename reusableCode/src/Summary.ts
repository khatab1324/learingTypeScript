import { MatchResult } from "./MatchResult";

type MatchData = [Date, string, string, number, number, MatchResult, string];
export interface Analyzer {
  run(matches: MatchData[]): void;
}
export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(
    public matches: MatchData[],
    public analyzer: Analyzer,
    public outputTarget: OutputTarget
  ) {}
  buildAndPrint() {
    // this.analyzer.run(this.matches);
    this.outputTarget.print(`${this.analyzer.run(this.matches)}`);
  }
}

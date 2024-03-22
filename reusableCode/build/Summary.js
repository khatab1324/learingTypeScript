"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
class Summary {
    constructor(matches, analyzer, outputTarget) {
        this.matches = matches;
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    buildAndPrint() {
        // this.analyzer.run(this.matches);
        this.outputTarget.print(`${this.analyzer.run(this.matches)}`);
    }
}
exports.Summary = Summary;

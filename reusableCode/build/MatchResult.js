"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchResult = void 0;
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (exports.MatchResult = MatchResult = {}));
//enum is a type that we create to store some closely related values
//when we use enum ?
//when we have a small fixed set of values that are all closely related and known at compile time
//that mean if you see enum the value very related to each other
//we also use enum when the value are not going to change
//we use enum when we want to signal to other engineers that this is a collection of very closely related values
//at the end if your data small and not change use enum

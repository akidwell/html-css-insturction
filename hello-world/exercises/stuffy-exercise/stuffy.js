"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stuffy = /** @class */ (function () {
    function Stuffy(id1, c, l, a, s) {
        if (id1 === void 0) { id1 = 0; }
        if (c === void 0) { c = "na"; }
        if (l === void 0) { l = 0; }
        if (a === void 0) { a = "na"; }
        if (s === void 0) { s = "na"; }
        this.id = id1;
        this.color = c;
        this.limbs = l;
        this.animal = a;
        this.size = s;
    }
    Stuffy.prototype.about = function () {
        return this.color + "\t" + this.limbs + "\t" + this.animal + "\t" + "\t" + this.size;
    };
    return Stuffy;
}());
exports.Stuffy = Stuffy;

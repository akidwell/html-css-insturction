"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stuffy = /** @class */ (function () {
    function Stuffy(c, l, a, s) {
        this.color = c;
        this.limbs = l;
        this.animal = a;
        this.size = s;
    }
    Stuffy.prototype.about = function () {
        return this.color + "\t" + this.limbs + "\t" + this.animal + "\t" + this.size;
    };
    return Stuffy;
}());
exports.Stuffy = Stuffy;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Friend = /** @class */ (function () {
    function Friend(fn, a, e, bf) {
        this.firstName = fn;
        this.age = a;
        this.email = e;
        this.bestFriend = bf;
    }
    Friend.prototype.about = function () {
        return this.firstName + "\t" + this.age + "\t" + this.email + "\t" + this.bestFriend;
    };
    return Friend;
}());
exports.Friend = Friend;

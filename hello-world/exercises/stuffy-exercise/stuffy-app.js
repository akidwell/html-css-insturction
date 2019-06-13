"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stuffy_1 = require("./stuffy");
var stuffies = [new stuffy_1.Stuffy("blue", 4, "whale", "x-large"),
    new stuffy_1.Stuffy("purple", 6, "spider", "large"),
    new stuffy_1.Stuffy("yellow", 4, "giraffe", "small"),
    new stuffy_1.Stuffy("green", 3, "frog", "small"),
    new stuffy_1.Stuffy("pink", 4, "ostrich", "medium")];
console.log("enhanced for loop:");
console.log("color  limbs    animal    size ");
for (var _i = 0, stuffies_1 = stuffies; _i < stuffies_1.length; _i++) {
    var s = stuffies_1[_i];
    console.log(s.about());
}
console.log("original for loop:");
console.log("color  limbs    animal    size ");
for (var i = 0; i < stuffies.length; i++) {
    console.log(stuffies[i].about());
}
console.log("Getting a stuffy by index 2:");
console.log(stuffies[2].about());
console.log("adding new stuffy to beginning of array (added white tiger):");
stuffies.unshift(new stuffy_1.Stuffy("white", 4, "tiger", "small"));
console.log(stuffies);
console.log("Deleting item 6(index 5) from stuffies (pink ostrich):");
stuffies.splice(5, 1);
console.log(stuffies);

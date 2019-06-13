"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var friend_1 = require("./friend");
var friends = [new friend_1.Friend("Maria", 30, "m@gmail.com", true),
    new friend_1.Friend("David", 31, "d@hotmail.com", true),
    new friend_1.Friend("Lindsay", 27, "l@yahoo.com", true),
    new friend_1.Friend("Summer", 25, "s@gaig.com", true),
    new friend_1.Friend("Felisha", 36, "f@aol.com", true)];
console.log("name    Age     Email           Best ");
for (var i = 0; i < friends.length; i++) {
    console.log(friends[i].about());
}

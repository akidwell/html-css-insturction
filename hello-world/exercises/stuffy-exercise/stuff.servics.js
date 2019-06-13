"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stuffy_1 = require("./stuffy");
var StuffyService = /** @class */ (function () {
    function StuffyService() {
        this.stuffies = [];
        this.nextId = 1;
    }
    //functions don't need function keyword in a class
    StuffyService.prototype.initalizeList = function () {
        var s1 = new stuffy_1.Stuffy(1, "blue", 4, "whale", "x-large");
        var s2 = new stuffy_1.Stuffy(2, "purple", 6, "spider", "large");
        var s3 = new stuffy_1.Stuffy(3, "yellow", 4, "giraffe", "small");
        var s4 = new stuffy_1.Stuffy(4, "green", 3, "frog", "small");
        var s5 = new stuffy_1.Stuffy(5, "pink", 4, "ostrich", "medium");
        //need the this key word
        this.stuffies = [s1, s2, s3, s4, s5];
    };
    StuffyService.prototype.listStuffies = function () {
        console.log("color  limbs    animal    size ");
        this.stuffies.forEach(function (s) {
            console.log(s.about());
        });
    };
    // console.log("enhanced for loop:");
    // console.log("color  limbs    animal    size ");   
    // for(let s of stuffies) {
    //     console.log(s.about());
    // }
    // console.log("original for loop:")
    // console.log("color  limbs    animal    size ");  
    // for(let i = 0; i<stuffies.length; i++) {
    //     console.log(stuffies[i].about());
    // }
    StuffyService.prototype.getStuffyById = function (id) {
        var stuffy = new stuffy_1.Stuffy;
        this.stuffies.forEach(function (s) {
            if (s.id == id) {
                stuffy = s;
            }
        });
        if (stuffy.id == 0) {
            console.log("No stuffy found for id " + id);
        }
        else {
            console.log("Found your stuffy: " + stuffy.about());
        }
    };
    StuffyService.prototype.addStuffy = function (newStuffy) {
        this.stuffies.push(newStuffy);
        // adds item at a specific index -> not necessary    
        // stuffies.splice(2, 0, newStuffy);
        // stuffies.forEach(s => {
        // console.log(s.about());
        // });
    };
    StuffyService.prototype.removeById = function (id) {
        var _this = this;
        console.log("remove a stuffy...");
        this.stuffies.forEach(function (s) {
            if (s.id == id) {
                var index = _this.stuffies.indexOf(s);
                _this.stuffies.splice(index, 1);
            }
        });
    };
    return StuffyService;
}());
exports.StuffyService = StuffyService;

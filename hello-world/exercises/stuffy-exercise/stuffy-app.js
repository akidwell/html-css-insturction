"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stuffy_1 = require("./stuffy");
var stuff_servics_1 = require("./stuff.servics");
var StuffyApp = /** @class */ (function () {
    function StuffyApp(stuffySvc) {
        this.stuffySvc = stuffySvc;
    }
    return StuffyApp;
}());
exports.StuffyApp = StuffyApp;
var stuffyApp = new StuffyApp(new stuff_servics_1.StuffyService());
//initalize list of stuffies
// let stuffies: Stuffy [] = [];
//call the initalize list function
stuffyApp.stuffySvc.initalizeList();
//display the list of stuffies
console.log("displaying list of stuffies");
stuffyApp.stuffySvc.listStuffies();
//get and display stuffy by id
console.log("get stuffy by id and display");
var id = 7;
stuffyApp.stuffySvc.getStuffyById(id);
//add a stuffy
console.log("Add a stuffy");
var newStuffy = new stuffy_1.Stuffy(8, "test", 4, "test", "x-small");
stuffyApp.stuffySvc.addStuffy(newStuffy);
stuffyApp.stuffySvc.listStuffies();
// deleting a stuffy by id
console.log("remove stuffy");
id = 2;
stuffyApp.stuffySvc.removeById(id);
stuffyApp.stuffySvc.listStuffies();

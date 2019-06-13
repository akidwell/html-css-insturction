import {Stuffy} from "./stuffy";
import {StuffyService} from "./stuff.servics";

export class StuffyApp {
    stuffySvc: StuffyService;

    constructor(stuffySvc : StuffyService) {
        this.stuffySvc = stuffySvc;
    }
}

let stuffyApp = new StuffyApp(new StuffyService());
//initalize list of stuffies
// let stuffies: Stuffy [] = [];
//call the initalize list function
stuffyApp.stuffySvc.initalizeList();

//display the list of stuffies
console.log("displaying list of stuffies");
stuffyApp.stuffySvc.listStuffies();

//get and display stuffy by id
console.log("get stuffy by id and display");
let id: number = 7;
stuffyApp.stuffySvc.getStuffyById(id);

//add a stuffy
console.log("Add a stuffy");
let newStuffy: Stuffy = new Stuffy(8,"test", 4, "test", "x-small");
stuffyApp.stuffySvc.addStuffy(newStuffy);
stuffyApp.stuffySvc.listStuffies();

// deleting a stuffy by id
console.log("remove stuffy");
id = 2;
stuffyApp.stuffySvc.removeById(id);
stuffyApp.stuffySvc.listStuffies();
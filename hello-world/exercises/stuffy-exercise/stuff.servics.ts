import {Stuffy} from "./stuffy";

export class StuffyService {
    stuffies: Stuffy[] = [];
    nextId: number = 1;

    //functions don't need function keyword in a class
 initalizeList() {
        let s1: Stuffy = new Stuffy(1,"blue", 4, "whale", "x-large");
        let s2: Stuffy = new Stuffy(2,"purple", 6, "spider", "large");
        let s3: Stuffy = new Stuffy(3,"yellow", 4, "giraffe", "small");
        let s4: Stuffy = new Stuffy(4,"green", 3, "frog", "small");
        let s5: Stuffy = new Stuffy(5,"pink", 4, "ostrich", "medium");
    //need the this key word
        this.stuffies = [s1,s2,s3,s4,s5];

    }
     listStuffies() {
        console.log("color  limbs    animal    size "); 
        this.stuffies.forEach(s => {
            console.log(s.about());
        });
    }
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

         getStuffyById(id : number) {
        let stuffy: Stuffy = new Stuffy;
        this.stuffies.forEach(s => {
        if (s.id == id) {
            stuffy = s;
        }
        });
        if (stuffy.id==0) {
        console.log("No stuffy found for id "+id)
        } else {
        console.log("Found your stuffy: " + stuffy.about()); 
    }
}

     addStuffy(newStuffy : Stuffy) {
        this.stuffies.push(newStuffy);
    // adds item at a specific index -> not necessary    
    // stuffies.splice(2, 0, newStuffy);
    // stuffies.forEach(s => {
    // console.log(s.about());
    // });

}

 removeById (id: number) {
    console.log("remove a stuffy...");
    this.stuffies.forEach(s => {
        if (s.id==id) {
            let index: number = this.stuffies.indexOf(s);
            this.stuffies.splice(index, 1);
            
        }
     });

    }
    
    
}

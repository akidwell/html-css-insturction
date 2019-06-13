import {Stuffy} from "./stuffy";


let stuffies: Stuffy[] = [new Stuffy("blue", 4, "whale", "x-large"),
                        new Stuffy("purple", 6, "spider", "large"),
                        new Stuffy("yellow", 4, "giraffe", "small"),
                        new Stuffy("green", 3, "frog", "small"),
                        new Stuffy("pink", 4, "ostrich", "medium") ]

                    console.log("enhanced for loop:");
                    console.log("color  limbs    animal    size ");   
                    for(let s of stuffies) {
                        console.log(s.about());
                    
                    }
                   
                    console.log("original for loop:")
                    console.log("color  limbs    animal    size ");  
                    for(let i = 0; i<stuffies.length; i++) {
                        console.log(stuffies[i].about());
                    }
                    console.log("Getting a stuffy by index 2:")
                    console.log(stuffies[2].about());
                    
                    console.log("adding new stuffy to beginning of array (added white tiger):")
                    stuffies.unshift(new Stuffy("white", 4,"tiger","small"));
                    console.log(stuffies);

                    console.log("Deleting item 6(index 5) from stuffies (pink ostrich):")
                    stuffies.splice(5, 1);
                    console.log(stuffies);
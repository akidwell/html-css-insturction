import {Friend} from "./friend";

let friends:Friend[] = [new Friend("Maria", 30, "m@gmail.com", true),
                        new Friend("David", 31, "d@hotmail.com", true),
                        new Friend("Lindsay", 27, "l@yahoo.com", true),
                        new Friend("Summer", 25, "s@gaig.com", true),
                        new Friend("Felisha", 36, "f@aol.com", true)];

                        console.log("name    Age     Email           Best ");
                        for (let i = 0; i < friends.length; i++) {
                            console.log(friends[i].about());
                        }


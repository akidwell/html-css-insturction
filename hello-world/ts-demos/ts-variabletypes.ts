let a = 1;
let b: number = 4;
console.log(b);
let c: number = 6;
console.log(a + b + c);

let sum = a + b + c;

let str: string = `the value of sum is 
    ${sum}`;

console.log(str);

let success: boolean = false;
console.log(success);

let nbrs: Number[] = [2, 3, 4, 5, 6];
console.log(nbrs);

let letters: string[] = ["itchy", "scratchy", "Marge", "Lisa"];
console.log(letters);
console.log("first elemnt in array =" + letters[0]);


enum color { Red, blue, green };
console.log(color.blue);

let d: any = 123;
d = "abc";

function total(n1: number, n2: number): number {
    return (n1 + n2);
}

console.log("total is" + total(b, c));

function aFunction() {
    if (true) {
        var e = 0;
        let f = 1;
    }
    console.log(e);
    // console.log(f); not allowed here becuase of block scope
}

class Square {
    side: number;

    constructor(s: number) {
        this.side = s;
    }
    area(): number { return this.side * this.side; }
}

let sqr: Square = new Square(4);
console.log("area of square=" + sqr.area());


class Customer {
private _name: String;

constructor(n: string){
    this._name = n;
}
get name () {
    return this._name;
}
set name (inName : String) {
    this._name= inName;

}
}

let cust: Customer = new Customer("Fred Flintstone");
console.log("customer name " + cust.name);


function go(a: number = 1, b?: boolean) {
    console.log("a=" + a, "b =" + b);
}
go(7,true);
go(5);
go();



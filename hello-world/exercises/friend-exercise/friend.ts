export class Friend {
    firstName: string;
    age: number;
    email: string;
    bestFriend: boolean;

constructor(fn: string, a: number, e: string, bf: boolean) {
    this.firstName = fn;
    this.age= a;
    this.email= e;
    this.bestFriend= bf;
}

about(): string {
    return this.firstName+"\t" + this.age+"\t"  + this.email+"\t" +this.bestFriend;
}

}
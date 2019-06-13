export class Stuffy {
    color: string;
    limbs: number;
    animal: string;
    size: string;

constructor(c: string, l: number, a: string, s: string) {
    this.color = c;
    this.limbs= l;
    this.animal= a;
    this.size = s;
}

about(): string {
    return this.color+"\t" + this.limbs+"\t"  + this.animal+"\t" +this.size;
}

}
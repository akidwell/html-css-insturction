export class Stuffy {
    id: number;
    color: string;
    limbs: number;
    animal: string;
    size: string;

constructor(id1: number = 0, c: string = "na", l: number = 0, a: string = "na", s: string = "na") {
    this.id = id1;
    this.color = c;
    this.limbs= l;
    this.animal= a;
    this.size = s;
}

about(): string {
    return this.color+"\t" + this.limbs+"\t"  + this.animal+"\t"+"\t" +this.size;
}

}
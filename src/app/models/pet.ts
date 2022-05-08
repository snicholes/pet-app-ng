import { Status } from "./status";

export class Pet {
    constructor(
        public id:number,
        public name:string,
        public age:number,
        public species:string,
        public description:string,
        public status:Status
        ) { }
}

/*
export class Pet {
    id:number;
    name:string;
    age:number;
    species:string;
    description:string;
    status:string;
    constructor (id:number,name:string,age:number,species:string,description:string,status:string) {
        this.id = id;
        this.name=name;
        this.age=age;
        this.species=species;
        this.description=description;
        this.status=status;
    }
}
*/

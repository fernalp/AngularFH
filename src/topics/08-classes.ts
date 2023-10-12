
//Forma Larga de Definir Clases en Typescript
export class PersonL {
    public name?: string;
    private address?: string;

    constructor(name: string, address?: string) {
        this.name = name;
        this.address = address ?? "New York";
    }
}

// Forma corta de Definir la misma clases de arriba
export class Person {

    constructor(
        public name: string,
        private address: string = "New York"
    ) { }
}

// Este concepto de extender de otra clase se le llama herencia
export class HeroH extends Person {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,

    ) {
        super(realName, "New York");
    }

}
export class HeroC {

    // public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {
    }

}


const ferna = new Person("Fernando");
const superman = new HeroH("SuperMan", 45, "Clarc Ken");
const ironman = new HeroC("Tony", 45, "Clarc Ken", ferna);

console.log(ferna);
console.log(superman);
console.log(ironman);
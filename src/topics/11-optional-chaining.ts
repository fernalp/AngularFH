export interface Passenger {
    name: string;
    children?: string[]
}

const passenger1: Passenger = {
    name: "Fernando"
}

const passenger2: Passenger = {
    name: "Maria",
    children: ["Jose"]  // Optional property
}

const printChildren = (passenger: Passenger) => {
    // Este es el optional chaining
    const howManyChildren = passenger.children?.length || 0;

    // La contra parte del optional chaining es el non null chaining operator
    // Que le dice a typescript confía en mi que retornará un valor
    // const howManyChildren = passenger.children!.length;
    console.log(passenger.name, howManyChildren)
}

printChildren(passenger2);
printChildren(passenger1);
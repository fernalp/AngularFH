
export function whatsMyType<T>(argument: T): T {

    return argument;
}

const amIString = whatsMyType<string>("Hola Mundo");
const amINumber = whatsMyType(100);
const amIArray = whatsMyType<number[]>([1, 2, 3]);


console.log(amIArray.join("_"));
console.log(amINumber.toFixed());
console.log(amIString.split(" "));


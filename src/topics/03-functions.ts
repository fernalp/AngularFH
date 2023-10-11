
function addNumbers(a: number, b: number): number {
    return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}

const result = addNumbers(4, 5);
const result2 = addNumbersArrow(4, 5);
const multiplyResult: number = multiply(1);

console.log({ result });
console.log({ result2 });
console.log({ multiplyResult });

interface Character {
    name: string;
    hp: number;
    showHp: () => void
}

const healCharacter = (character: Character, amount: number) => {

    character.hp += amount;

}

const strider: Character = {
    name: "Strider",
    hp: 30,
    showHp() {
        console.log(`Puntos de Vida ${this.hp}`);
    }, // This is not required in typescript but it's good practice to have this method defined so that the interface can be used as
}

strider.showHp();
healCharacter(strider, 10);
strider.showHp();
healCharacter(strider, 20);
strider.showHp();



export { };
// Declaración de Array
const skills: string[] = ["Bash", "Counter", "Healing"];
console.log(skills);

// Una Interface Equivale a 0 Líneas de Código en la Transpilación a Javascript
// Una Interface ayuda a tener mas legibilidad en el código
interface Character {
    name: string;
    hp: number,
    skills: string[];
    hometown?: string;
}

const strider: Character = {
    name: 'Strider',
    hp: 120,
    skills: ['bash'], // Aquí se puede agregar o quitar elementos del array sin problemas.
    hometown: 'The Rocky Mountains'
}

console.table(strider);

export { };
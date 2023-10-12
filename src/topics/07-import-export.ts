import { Product, taxCalculation } from "./06-function-destructuring.ts";


const shoppingCart: Product[] = [
    { description: 'Apple', price: 1.25 },
    { description: 'Orange', price: 0.95 },
    { description: 'Banana', price: 0.75 },
];

const tax = 0.15

const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax
})

console.log('Total: ', total);
console.log('Total Tax: ', taxTotal);
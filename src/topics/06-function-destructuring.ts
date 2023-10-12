
export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: "Nokia A1",
    price: 150.0
}

const tablet: Product = {
    description: "Samsung Galaxy Tab S4",
    price: 300.0,
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

export function taxCalculation(options: TaxCalculationOptions): [number, number] {

    const { tax, products } = options;

    let total = 0;

    products.forEach(
        ({ price }) => (total += price)
    )

    return [total, total * tax]

}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, taxTotal] = taxCalculation({
    tax,
    products: shoppingCart
});

console.log('Total: ', total);
console.log('Total tax: ', taxTotal);


export { };
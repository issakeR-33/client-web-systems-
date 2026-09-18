import promptSync = require("prompt-sync");
const prompt = promptSync();

const sizePrices: Record<string, number> = {
    "маленький": 10,
    "великий": 25,
};

const toppingPrices: Record<string, number> = {
    "шоколад": 5,
    "карамель": 6,
    "ягоди": 10,
};

const marshmallowPrice = 5;

function calculateIceCreamPrice(
    size: string,
    toppings: string[],
    hasMarshmallow: boolean
): number {
    let total = sizePrices[size] ?? 0;

    for (const topping of toppings) {
        total += toppingPrices[topping] ?? 0;
    }

    if (hasMarshmallow) {
        total += marshmallowPrice;
    }

    return total;
}

console.log("розміри: маленький (10 грн), великий (25 грн)");
const size: string = prompt("Оберіть розмір: ").toLowerCase().trim();

console.log("начинки: шоколад (+5), карамель (+6), ягоди (+10)");
const toppingsInput: string = prompt("введіть начинки через кому (мінімум одна): ");
const toppings: string[] = toppingsInput
    .split(",")
    .map((t) => t.toLowerCase().trim());

const marshmallowInput: string = prompt("додати маршмелоу? (так/ні): ").toLowerCase().trim();
const hasMarshmallow: boolean = marshmallowInput === "так";

const totalPrice: number = calculateIceCreamPrice(size, toppings, hasMarshmallow);

console.log(`\nвартість вашого морозива: ${totalPrice} грн`);
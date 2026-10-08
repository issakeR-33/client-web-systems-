import promptSync = require("prompt-sync");

const prompt = promptSync();

type Size = "small" | "large";
type Topping = "chocolate" | "caramel" | "berries";

const sizePrices: Record<Size, number> = {
    small: 10,
    large: 25,
};

const toppingPrices: Record<Topping, number> = {
    chocolate: 5,
    caramel: 6,
    berries: 10,
};

const MARSHMALLOW_PRICE: number = 5;

function isSize(value: string): value is Size {
    return value in sizePrices;
}

function isTopping(value: string): value is Topping {
    return value in toppingPrices;
}

function calculatePrice(size: Size, toppings: Topping[], marshmallow: boolean): number {
    let price: number = sizePrices[size];

    for (const topping of toppings) {
        price += toppingPrices[topping];
    }

    if (marshmallow) {
        price += MARSHMALLOW_PRICE;
    }

    return price;
}

function askSize(): Size {
    while (true) {
        const answer: string = prompt("Розмір (small - 10 грн, large - 25 грн): ").trim().toLowerCase();

        if (isSize(answer)) {
            return answer;
        }

        console.log("Невірний розмір. Введіть 'small' або 'large'.");
    }
}

function askToppings(): Topping[] {
    const toppings: Topping[] = [];

    while (true) {
        const answer: string = prompt(
            "Наповнювач (chocolate +5, caramel +6, berries +10; 'exit' - завершити): "
        ).trim().toLowerCase();

        if (answer === "exit") {
            if (toppings.length === 0) {
                console.log("Потрібно обрати хоча б один наповнювач.");
                continue;
            }
            return toppings;
        }

        if (isTopping(answer)) {
            toppings.push(answer);
        } else {
            console.log("Невірний наповнювач. Введіть 'chocolate', 'caramel' або 'berries'.");
        }
    }
}

function askMarshmallow(): boolean {
    const answer: string = prompt("Додати маршмелоу (+5 грн)? (yes/no): ").trim().toLowerCase();
    return answer === "yes" || answer === "y";
}

const size: Size = askSize();
const toppings: Topping[] = askToppings();
const marshmallow: boolean = askMarshmallow();

console.log(`Загальна вартість морозива: ${calculatePrice(size, toppings, marshmallow)} грн`);

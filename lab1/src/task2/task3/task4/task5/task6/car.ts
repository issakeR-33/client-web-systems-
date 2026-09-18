abstract class Car {
    public brand: string;
    protected year: number;
    private vin: string;

    constructor(brand: string, year: number, vin: string) {
        this.brand = brand;
        this.year = year;
        this.vin = vin;
    }

    protected getVin(): string {
        return this.vin;
    }

    abstract describe(): string;
}

class Audi extends Car {
    private model: string;

    constructor(year: number, vin: string, model: string) {
        super("Audi", year, vin);
        this.model = model;
    }

    describe(): string {
        return `${this.brand} ${this.model}, рік випуску: ${this.year}, VIN: ${this.getVin()}`;
    }
}

class BMW extends Car {
    private series: string;

    constructor(year: number, vin: string, series: string) {
        super("BMW", year, vin);
        this.series = series;
    }

    describe(): string {
        return `${this.brand} ${this.series}, рік випуску: ${this.year}, VIN: ${this.getVin()}`;
    }
}

class Ford extends Car {
    private modification: string;

    constructor(year: number, vin: string, modification: string) {
        super("Ford", year, vin);
        this.modification = modification;
    }

    describe(): string {
        return `${this.brand} ${this.modification}, рік випуску: ${this.year}, VIN: ${this.getVin()}`;
    }
}

const car1 = new Audi(2020, "TY123456", "A4");
const car2 = new Audi(2022, "TY654321", "Q5");

const car3 = new BMW(2019, "BM111222", "3 Series");
const car4 = new BMW(2023, "BM333444", "X5");

const car5 = new Ford(2018, "FD555666", "Focus");
const car6 = new Ford(2021, "FD777888", "Mustang");

const allCars: Car[] = [car1, car2, car3, car4, car5, car6];

allCars.forEach((car) => {
    console.log(car.describe());
});
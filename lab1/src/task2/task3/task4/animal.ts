interface Animal {
    name: string;
    legsCount?: number;
    canFly?: boolean;
    canSwim?: boolean;
    move(): string;
}

class Cat implements Animal {
    name: string;
    legsCount: number = 4;

    constructor(name: string) {
        this.name = name;
    }

    move(): string {
        return `${this.name} біжить на чотирьох лапах.`;
    }
}

class Bird implements Animal {
    name: string;
    canFly: boolean = true;

    constructor(name: string) {
        this.name = name;
    }

    move(): string {
        return `${this.name} летить у небі.`;
    }
}

class Fish implements Animal {
    name: string;
    canSwim: boolean = true;

    constructor(name: string) {
        this.name = name;
    }

    move(): string {
        return `${this.name} пливе у воді.`;
    }
}

const animals: Animal[] = [
    new Cat("тігрюля"),
    new Bird("кай"),
    new Fish("карасік"),
];

animals.forEach((animal) => {
    console.log(animal.move());
});
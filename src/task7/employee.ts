interface Payable {
    pay(): void;
}

abstract class Employee {
    protected name: string;
    protected age: number;
    protected salary: number;

    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    abstract getAnnualBonus(): number;
}

class Developer extends Employee implements Payable {
    getAnnualBonus(): number {
        return this.salary * 0.10;
    }

    pay(): void {
        console.log(
            `Виплата розробнику ${this.name}: зарплата ${this.salary} грн + бонус ${this.getAnnualBonus()} грн`
        );
    }
}

class Manager extends Employee implements Payable {
    getAnnualBonus(): number {
        return this.salary * 0.20;
    }

    pay(): void {
        console.log(
            `Виплата менеджеру ${this.name}: зарплата ${this.salary} грн + бонус ${this.getAnnualBonus()} грн`
        );
    }
}

const employees: (Employee & Payable)[] = [
    new Developer("Анастасія", 18, 45000),
    new Developer("Катерина", 19, 50000),
    new Manager("Михайло", 19, 40000),
];

let totalBonus: number = 0;

for (const employee of employees) {
    totalBonus += employee.getAnnualBonus();
    employee.pay();
}

console.log(`\nЗагальна річна сума бонусів: ${totalBonus} грн`);

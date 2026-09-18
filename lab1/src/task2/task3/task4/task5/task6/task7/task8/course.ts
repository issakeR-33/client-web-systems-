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
    constructor(name: string, age: number, salary: number) {
        super(name, age, salary);
    }

    getAnnualBonus(): number {
        return this.salary * 0.10;
    }

    pay(): void {
        console.log(
            `виплата розробнику ${this.name}: зарплата ${this.salary} грн + бонус ${this.getAnnualBonus()} грн`
        );
    }
}

class Manager extends Employee implements Payable {
    constructor(name: string, age: number, salary: number) {
        super(name, age, salary);
    }

    getAnnualBonus(): number {
        return this.salary * 0.20;
    }

    pay(): void {
        console.log(
            `виплата менеджеру ${this.name}: зарплата ${this.salary} грн + бонус ${this.getAnnualBonus()} грн`
        );
    }
}

const employees: Employee[] = [
    new Developer("Анастасія", 18, 45000),
    new Developer("Катерина", 19, 50000),
    new Manager("Михайло", 19, 40000),
];

let totalBonus = 0;

for (const employee of employees) {
    totalBonus += employee.getAnnualBonus();

    if (employee instanceof Developer || employee instanceof Manager) {
        employee.pay();
    }
}

console.log(`\nзагальна річна сума бонусів: ${totalBonus} грн`);
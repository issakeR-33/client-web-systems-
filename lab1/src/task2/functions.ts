function greetUser(name: string, age: number = 19): string {
    return `Привіт, ${name}! Тобі ${age} років.`;
}

console.log(greetUser("Іван", 19));

console.log(greetUser("c1tyx", 20));
function greet(name: string, times: number = 1): string {
    return `Привіт, ${name}! `.repeat(times).trim();
}

console.log(greet("TypeScript"));
console.log(greet("TypeScript", 3));

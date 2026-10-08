interface LibraryItem {
    name: string;
    author: string;
    borrow(): void;
}

class Book implements LibraryItem {
    name: string;
    author: string;
    private pages: number;

    constructor(name: string, author: string, pages: number) {
        this.name = name;
        this.author = author;
        this.pages = pages;
    }

    borrow(): void {
        console.log(`Видано книгу: ${this.name}, ${this.author}, ${this.pages} стор.`);
    }
}

class Magazine implements LibraryItem {
    name: string;
    author: string;
    private issueDate: string;

    constructor(name: string, author: string, issueDate: string) {
        this.name = name;
        this.author = author;
        this.issueDate = issueDate;
    }

    borrow(): void {
        console.log(`Видано журнал: ${this.name}, ${this.author}, випуск від ${this.issueDate}`);
    }
}

class DVD implements LibraryItem {
    name: string;
    author: string;
    private duration: number;

    constructor(name: string, author: string, duration: number) {
        this.name = name;
        this.author = author;
        this.duration = duration;
    }

    borrow(): void {
        console.log(`Видано DVD: ${this.name}, ${this.author}, тривалість ${this.duration} хв`);
    }
}

class Library {
    private items: LibraryItem[] = [];

    addItem(item: LibraryItem): void {
        this.items.push(item);
        console.log(`Додано: ${item.name} (${item.author})`);
    }

    findItem(name: string): LibraryItem | undefined {
        return this.items.find((item) => item.name === name);
    }

    listItems(): void {
        console.log("Фонд бібліотеки:");
        this.items.forEach((item) => {
            console.log(`- ${item.name} (${item.author})`);
        });
    }
}

const library = new Library();

library.addItem(new Book("The Great Gatsby", "F. Scott Fitzgerald", 180));
library.addItem(new Magazine("National Geographic", "Various Authors", "березень 2023"));
library.addItem(new DVD("Inception", "Christopher Nolan", 148));

library.listItems();

library.findItem("The Great Gatsby")?.borrow();
library.findItem("Inception")?.borrow();
console.log("Не існує:", library.findItem("Unknown"));

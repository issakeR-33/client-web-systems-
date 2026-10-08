interface Course {
    name: string;
    duration: number; // тривалість у годинах
    students: string[];
}

class OnlineCourse implements Course {
    name: string;
    duration: number;
    students: string[] = [];

    constructor(name: string, duration: number) {
        this.name = name;
        this.duration = duration;
    }

    registerStudent(student: string): void {
        if (this.hasStudent(student)) {
            console.log(`${student} вже зареєстрований на курс "${this.name}".`);
            return;
        }
        this.students.push(student);
        console.log(`${student} зареєстрований на курс "${this.name}".`);
    }

    hasStudent(student: string): boolean {
        return this.students.includes(student);
    }
}

class CourseManager {
    private courses: Course[] = [];

    addCourse(course: Course): void {
        this.courses.push(course);
        console.log(`Курс "${course.name}" додано.`);
    }

    removeCourse(name: string): boolean {
        const index = this.courses.findIndex((course) => course.name === name);
        if (index === -1) {
            console.log(`Курс "${name}" не знайдено.`);
            return false;
        }
        this.courses.splice(index, 1);
        console.log(`Курс "${name}" видалено.`);
        return true;
    }

    findCourse(name: string): Course | undefined {
        return this.courses.find((course) => course.name === name);
    }
}

const manager = new CourseManager();

const typescript = new OnlineCourse("TypeScript", 40);
const web = new OnlineCourse("Веб-системи", 60);

manager.addCourse(typescript);
manager.addCourse(web);

typescript.registerStudent("Анастасія");
typescript.registerStudent("Катерина");
typescript.registerStudent("Анастасія");

console.log("Анастасія на курсі TypeScript:", typescript.hasStudent("Анастасія"));
console.log("Михайло на курсі TypeScript:", typescript.hasStudent("Михайло"));

console.log("Знайдено:", manager.findCourse("TypeScript")?.name);
manager.removeCourse("Веб-системи");
console.log("Після видалення:", manager.findCourse("Веб-системи"));

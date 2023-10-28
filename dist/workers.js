"use strict";
class Job {
    role;
    salary;
    constructor(role, salary) {
        this.role = role;
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
    work(personName) {
        console.log(`${personName} сейчас работает как ${this.role}`);
    }
}
class Person {
    job;
    name;
    constructor(name) {
        this.name = name;
    }
    setJob(job) {
        this.job = job;
    }
    getSalary() {
        return this.job ? this.job.getSalary() : 0;
    }
    work() {
        if (this.job) {
            this.job.work(this.name);
        }
        else {
            console.log(`${this.name} не имеет работы`);
        }
    }
}
const john = new Person('John');
const alice = new Person('Alice');
const developerJob = new Job('Developer', 50000);
const designerJob = new Job('Designer', 60000);
john.setJob(developerJob);
alice.setJob(designerJob);
john.work(); // Выведет: John сейчас работает как Developer
alice.work(); // Выведет: Alice сейчас работает как designer
// Переквалификация
john.setJob(designerJob);
john.work();
alice.setJob(developerJob);
alice.work();

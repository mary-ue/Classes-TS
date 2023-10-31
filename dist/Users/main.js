"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Employees_1 = __importDefault(require("./Employees"));
const Students_1 = __importDefault(require("./Students"));
const students = new Students_1.default();
const employees = new Employees_1.default();
// Студенты
students.add({ id: 1, firstname: "John", surname: "Doe", age: 20, year: 2, specialty: "Computer Science" });
students.add({ id: 2, firstname: "Jane", surname: "Smith", age: 21, year: 3, specialty: "Physics" });
students.add({ id: 3, firstname: "Jasmine", surname: "Brown", age: 19, year: 1, specialty: "Design" });
students.add({ id: 4, firstname: "James", surname: "Taylor", age: 22, year: 4, specialty: "Computer Science" });
students.add({ id: 5, firstname: "Jordan", surname: "Wilson", age: 22, year: 3, specialty: "Physics" });
// Сотрудники
employees.add({ id: 101, firstname: "Eva", surname: "Green", age: 30, post: "Software Engineer" });
employees.add({ id: 102, firstname: "Mike", surname: "Taylor", age: 35, post: "Data Scientist" });
// remove и get
console.log(students.remove(1)); // true
console.log(students.remove(10)); // false
console.log(students.get(2)); // { id: 2, firstname: 'Jane', surname: 'Smith', age: 21, year: 3, specialty: 'Physics' }
console.log(students.get(6)); // null
// Сортировка
console.log(students.sorted()); // ↑ id
console.log(employees.sorted('desc', 'age')); // ↓ age

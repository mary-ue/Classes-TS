"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Job_1 = __importDefault(require("./Job"));
class Person {
    _job;
    _name;
    constructor(name) {
        this._name = name;
    }
    get job() {
        return this._job;
    }
    set job(newJob) {
        this._job = newJob || new Job_1.default('', 0);
    }
    get salary() {
        return this._job ? this._job.salary : 0;
    }
    set salary(newSalary) {
        if (this._job) {
            this._job.salary = newSalary;
        }
    }
    work() {
        if (this._job) {
            this._job.work(this._name);
        }
        else {
            console.log(`${this._name} не имеет работы`);
        }
    }
}
exports.default = Person;

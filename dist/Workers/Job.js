"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Job {
    _role;
    _salary;
    constructor(role, salary) {
        this._role = role;
        this._salary = salary;
    }
    get role() {
        return this._role;
    }
    set role(newRole) {
        this._role = newRole;
    }
    get salary() {
        return this._salary;
    }
    set salary(newSalary) {
        this._salary = newSalary;
    }
    work(personName) {
        console.log(`${personName} сейчас работает как ${this._role}`);
    }
}
exports.default = Job;

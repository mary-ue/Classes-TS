"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = __importDefault(require("./Users"));
class Employees extends Users_1.default {
    add(employee) {
        this.usersList[employee.id] = employee;
    }
}
exports.default = Employees;

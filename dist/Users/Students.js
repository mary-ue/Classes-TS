"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = __importDefault(require("./Users"));
class Students extends Users_1.default {
    add(student) {
        this.usersList[student.id] = student;
    }
}
exports.default = Students;

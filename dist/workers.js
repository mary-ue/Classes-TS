"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Job_1 = __importDefault(require("./Workers/Job"));
const Person_1 = __importDefault(require("./Workers/Person"));
const john = new Person_1.default('John');
const alice = new Person_1.default('Alice');
const developerJob = new Job_1.default('Developer', 50000);
const designerJob = new Job_1.default('Designer', 60000);
john.job = developerJob;
alice.job = designerJob;
john.work(); // Выведет: John сейчас работает как Developer
alice.work(); // Выведет: Alice сейчас работает как designer
// Переквалификация
john.job = designerJob;
john.work();
alice.job = developerJob;
alice.work();

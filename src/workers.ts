import Job from "./Workers/Job";
import Person from "./Workers/Person";

const john = new Person('John');
const alice = new Person('Alice');

const developerJob = new Job('Developer', 50000);
const designerJob = new Job('Designer', 60000);

john.job = developerJob;
alice.job = designerJob;

john.work(); // Выведет: John сейчас работает как Developer
alice.work(); // Выведет: Alice сейчас работает как designer

// Переквалификация
john.job = designerJob;
john.work(); 

alice.job = developerJob;
alice.work();


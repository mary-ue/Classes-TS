class Job {
  private role: string;
  private salary: number;

  constructor(role: string, salary: number) {
    this.role = role;
    this.salary = salary;
  }

  getSalary(): number {
    return this.salary;
  }

  work(personName: string): void {
    console.log(`${personName} сейчас работает как ${this.role}`);
  }
}

class Person {
  private job!: Job;
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  setJob(job: Job): void {
    this.job = job;
  }

  getSalary(): number {
    return this.job ? this.job.getSalary() : 0;
  }

  work(): void {
    if (this.job) {
      this.job.work(this.name);
    } else {
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


import Job from "./Job";

class Person {
  private _job!: Job;
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get job(): Job | undefined {
    return this._job;
  }

  set job(newJob: Job | undefined) {
    this._job = newJob || new Job('', 0);
  }

  get salary(): number {
    return this._job ? this._job.salary : 0;
  }

  set salary(newSalary: number) {
    if (this._job) {
      this._job.salary = newSalary;
    }
  }

  work(): void {
    if (this._job) {
      this._job.work(this._name);
    } else {
      console.log(`${this._name} не имеет работы`);
    }
  }
}

export default Person;

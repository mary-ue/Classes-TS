class Job {
  private _role: string;
  private _salary: number;

  constructor(role: string, salary: number) {
    this._role = role;
    this._salary = salary;
  }

  get role(): string {
    return this._role;
  }

  set role(newRole: string) {
    this._role = newRole;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(newSalary: number) {
    this._salary = newSalary;
  }

  work(personName: string): void {
    console.log(`${personName} сейчас работает как ${this._role}`);
  }
}

export default Job;

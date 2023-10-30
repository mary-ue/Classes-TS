import Users, { User } from "./Users";

interface Employee extends User {
  post: string;
}

class Employees extends Users<Employee> {
  add(employee: Employee): void {
    this.usersList[employee.id] = employee;
  }
}

export default Employees;

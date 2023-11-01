import Users, { User } from "./Users";

interface Employee extends User {
  post: string;
}

class Employees extends Users<Employee> {}

export default Employees;

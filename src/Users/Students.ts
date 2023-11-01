import Users, { User } from "./Users";

interface Student extends User {
  year: number;
  specialty: string;
}

class Students extends Users<Student> {}

export default Students;
import Users, { User } from "./Users";

interface Student extends User {
  year: number;
  specialty: string;
}

class Students extends Users<Student> {
  add(student: Student): void {
    this.usersList[student.id] = student;
  }
}

export default Students;
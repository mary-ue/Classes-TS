export interface User {
  id: number;
  firstname: string;
  surname: string;
  age: number;
}

abstract class Users<T extends User> {
  protected usersList: {[id: number]: T} = {};

  abstract add(user: T): void;

  remove(id: number): boolean {
    if (this.usersList[id]) {
      delete this.usersList[id];
      return true;
    }
    return false;
  }

  get(id: number): T | null {
    return this.usersList[id] || null;
  }

}

export default Users;

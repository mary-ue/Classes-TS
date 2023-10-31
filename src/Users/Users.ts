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

  sorted<K extends keyof T>(order: 'asc' | 'desc' = 'asc', sortBy: K = 'id' as K): T[] {
    const sortedList = Object.values(this.usersList);

    sortedList.sort((a, b) => {
      if (order === 'asc') {
        return (a[sortBy] as any) - (b[sortBy] as any);
      } else {
        return (b[sortBy] as any) - (a[sortBy] as any);
      }
    });

    return sortedList;
  }
}

export default Users;

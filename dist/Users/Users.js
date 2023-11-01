"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Users {
    usersList = {};
    add(user) {
        this.usersList[user.id] = user;
    }
    remove(id) {
        if (this.usersList[id]) {
            delete this.usersList[id];
            return true;
        }
        return false;
    }
    get(id) {
        return this.usersList[id] || null;
    }
    sorted(order = 'asc', sortBy = 'id') {
        const sortedList = Object.values(this.usersList);
        sortedList.sort((a, b) => {
            if (order === 'asc') {
                return a[sortBy] - b[sortBy];
            }
            else {
                return b[sortBy] - a[sortBy];
            }
        });
        return sortedList;
    }
}
exports.default = Users;

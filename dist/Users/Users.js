"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Users {
    usersList = {};
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
}
exports.default = Users;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractSelling {
    _product;
    _quantity;
    constructor(product, quantity) {
        this._product = product;
        this._quantity = quantity;
    }
    get product() {
        return this._product;
    }
    set product(value) {
        this._product = value;
    }
    get quantity() {
        return this._quantity;
    }
    set quantity(value) {
        this._quantity = value;
    }
}
exports.default = AbstractSelling;

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
    get price() {
        return this._product.price * this._quantity;
    }
    set price(newPrice) {
        this._product.price = newPrice;
    }
    compare(other) {
        return this.price - other.price;
    }
}
exports.default = AbstractSelling;

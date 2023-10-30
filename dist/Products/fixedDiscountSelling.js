"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractSelling_1 = __importDefault(require("./AbstractSelling"));
class FixedDiscountSelling extends AbstractSelling_1.default {
    static _DISCOUNT_PERCENT = 0.1;
    get price() {
        return this._product.price * (1 - FixedDiscountSelling._DISCOUNT_PERCENT) * this._quantity;
    }
    set price(newPrice) {
        this._product.price = newPrice;
    }
}
exports.default = FixedDiscountSelling;

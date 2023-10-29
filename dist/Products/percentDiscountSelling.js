"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstractSelling_1 = __importDefault(require("./abstractSelling"));
class PercentDiscountSelling extends abstractSelling_1.default {
    static DISCOUNT_PERCENT = 0.1;
    static DISCOUNT_QUANTITY = 3;
    getPrice() {
        if (this._quantity >= PercentDiscountSelling.DISCOUNT_QUANTITY) {
            const discountedPrice = this._product.price * (1 - PercentDiscountSelling.DISCOUNT_PERCENT);
            return discountedPrice * this._quantity;
        }
        return this._product.price * this._quantity;
    }
    compare(other) {
        return this.getPrice() - other.getPrice();
    }
}
exports.default = PercentDiscountSelling;

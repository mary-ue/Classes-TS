"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstractSelling_1 = __importDefault(require("./abstractSelling"));
class PercentDiscountSelling extends abstractSelling_1.default {
    static DISCOUNT_PERCENT = 10;
    static DISCOUNT_QUANTITY = 3;
    getPrice() {
        const discountedQuantity = Math.min(this._quantity, PercentDiscountSelling.DISCOUNT_QUANTITY);
        const regularQuantity = this._quantity - discountedQuantity;
        const discountedPrice = this._product.price * discountedQuantity * (1 - PercentDiscountSelling.DISCOUNT_PERCENT / 100);
        const regularPrice = this._product.price * regularQuantity;
        return discountedPrice + regularPrice;
    }
    compare(other) {
        return this.getPrice() - other.getPrice();
    }
}
exports.default = PercentDiscountSelling;

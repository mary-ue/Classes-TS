"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstractSelling_1 = __importDefault(require("./abstractSelling"));
class FixedDiscountSelling extends abstractSelling_1.default {
    static DISCOUNT_PERCENT = 0.1;
    ;
    getPrice() {
        return this._product.price * (1 - FixedDiscountSelling.DISCOUNT_PERCENT) * this._quantity;
    }
    compare(other) {
        return this.getPrice() - other.getPrice();
    }
}
exports.default = FixedDiscountSelling;
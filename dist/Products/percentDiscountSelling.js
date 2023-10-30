"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractSelling_1 = __importDefault(require("./AbstractSelling"));
class PercentDiscountSelling extends AbstractSelling_1.default {
    static _DISCOUNT_PERCENT = 0.1;
    static _DISCOUNT_QUANTITY = 3;
    get price() {
        if (this._quantity >= PercentDiscountSelling._DISCOUNT_QUANTITY) {
            return this._product._price * (1 - PercentDiscountSelling._DISCOUNT_PERCENT) * this._quantity;
        }
        return this._product._price * this._quantity;
        // return 1;
    }
}
exports.default = PercentDiscountSelling;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractSelling_1 = __importDefault(require("./AbstractSelling"));
const Product_1 = __importDefault(require("./Product"));
const FixedDiscountSelling_1 = __importDefault(require("./FixedDiscountSelling"));
const PercentDiscountSelling_1 = __importDefault(require("./PercentDiscountSelling"));
const products = [
    new Product_1.default('Товар 1', 100),
    new Product_1.default('Товар 2', 150),
    new Product_1.default('Товар 3', 120),
    new Product_1.default('Товар 4', 80),
];
const productsAndSelling = [
    ...products.map((product) => new FixedDiscountSelling_1.default(product, 1)),
    new PercentDiscountSelling_1.default(new Product_1.default('Товар 5', 100), 3),
    new PercentDiscountSelling_1.default(new Product_1.default('Товар 6', 1500), 5),
    new PercentDiscountSelling_1.default(new Product_1.default('Товар 7', 120), 2),
    new PercentDiscountSelling_1.default(new Product_1.default('Товар 8', 80), 4),
];
productsAndSelling.sort((a, b) => b.compare(a));
console.log('Отсортированный массив: ');
productsAndSelling.forEach((item, index) => {
    if (item instanceof Product_1.default) {
        console.log(`${index + 1}: ${item.name}, цена: $${item.price.toFixed(2)}`);
    }
    else if (item instanceof AbstractSelling_1.default) {
        console.log(`${index + 1}: ${item.product.name}, цена: $${item.price.toFixed(2)}`);
    }
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstractSelling_1 = __importDefault(require("./abstractSelling"));
const product_1 = __importDefault(require("./product"));
const fixedDiscountSelling_1 = __importDefault(require("./fixedDiscountSelling"));
const percentDiscountSelling_1 = __importDefault(require("./percentDiscountSelling"));
const products = [
    new product_1.default("Товар 1", 100),
    new product_1.default("Товар 2", 150),
    new product_1.default("Товар 3", 120),
    new product_1.default("Товар 4", 80),
];
const productsAndSelling = [
    ...products.map(product => new fixedDiscountSelling_1.default(product, 1)),
    new fixedDiscountSelling_1.default(products[0], 3),
    new percentDiscountSelling_1.default(products[1], 5),
    new fixedDiscountSelling_1.default(products[2], 2),
    new percentDiscountSelling_1.default(products[3], 4),
];
productsAndSelling.sort((a, b) => b.compare(a));
console.log("Отсортированный массив: ");
productsAndSelling.forEach((item, index) => {
    if (item instanceof product_1.default) {
        console.log(`Продукт ${index + 1}: ${item.name}, цена: $${item.price.toFixed(2)}`);
    }
    else if (item instanceof abstractSelling_1.default) {
        console.log(`Товар ${index + 1}: ${item.product.name}, цена: $${item.getPrice().toFixed(2)}`);
    }
});

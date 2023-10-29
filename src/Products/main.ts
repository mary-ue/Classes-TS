import AbstractSelling from "./abstractSelling";
import Product from "./product";
import FixedDiscountSelling from "./fixedDiscountSelling";
import PercentDiscountSelling from "./percentDiscountSelling";

const products: Product[] = [
  new Product("Товар 1", 100),
  new Product("Товар 2", 150),
  new Product("Товар 3", 120),
  new Product("Товар 4", 80),
];

const productsAndSelling: AbstractSelling[] = [
  ...products.map(product => new FixedDiscountSelling(product, 1)),
  new PercentDiscountSelling(new Product("Товар 5", 100), 3),
  new PercentDiscountSelling(new Product("Товар 6", 150), 5),
  new PercentDiscountSelling(new Product("Товар 7", 120), 2),
  new PercentDiscountSelling(new Product("Товар 8", 80), 4),
];

productsAndSelling.sort((a, b) => b.compare(a));

console.log("Отсортированный массив: ");
productsAndSelling.forEach((item, index) => {
  if (item instanceof Product) {
    console.log(`${index + 1}: ${item.name}, цена: $${item.price.toFixed(2)}`);
  } else if (item instanceof AbstractSelling) {
    console.log(`${index + 1}: ${item.product.name}, цена: $${item.getPrice().toFixed(2)}`);
  }
});

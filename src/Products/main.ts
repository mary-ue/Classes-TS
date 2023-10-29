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
  new FixedDiscountSelling(products[0], 3),
  new PercentDiscountSelling(products[1], 5),
  new FixedDiscountSelling(products[2], 2),
  new PercentDiscountSelling(products[3], 4),
];

productsAndSelling.sort((a, b) => b.compare(a));

console.log("Отсортированный массив: ");
productsAndSelling.forEach((item, index) => {
  if (item instanceof Product) {
    console.log(`Продукт ${index + 1}: ${item.name}, цена: $${item.price.toFixed(2)}`);
  } else if (item instanceof AbstractSelling) {
    console.log(`Товар ${index + 1}: ${item.product.name}, цена: $${item.getPrice().toFixed(2)}`);
  }
});

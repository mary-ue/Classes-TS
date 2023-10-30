import Product from './Product';

abstract class AbstractSelling {
  protected _product: Product;
  protected _quantity: number;

  constructor(product: Product, quantity: number) {
    this._product = product;
    this._quantity = quantity;
  }

  get product(): Product {
    return this._product;
  }

  set product(value: Product) {
    this._product = value;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }

  get price(): number {
    return this._product.price * this._quantity;
  }

  set price(newPrice: number) {
    this._product.price = newPrice;
  }

  compare(other: AbstractSelling): number {
    return this.price - other.price;
  }
}

export default AbstractSelling;

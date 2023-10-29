import Product from './product';

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

  abstract getPrice(): number;

  abstract compare(other: AbstractSelling): number;
}

export default AbstractSelling;
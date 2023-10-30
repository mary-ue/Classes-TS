import AbstractSelling from './AbstractSelling';
import Product from './Product';

class FixedDiscountSelling extends AbstractSelling {
  static readonly _DISCOUNT_PERCENT = 0.1;

  get price(): number {
    return this._product.price * (1 - FixedDiscountSelling._DISCOUNT_PERCENT) * this._quantity;
  }

  set price(newPrice: number) {
    this._product.price = newPrice;
  }

  // compare(other: AbstractSelling): number {
  //   return this.price - other.price;
  // }
}

export default FixedDiscountSelling;

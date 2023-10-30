import AbstractSelling from './AbstractSelling';
import Product from './Product';

class PercentDiscountSelling extends AbstractSelling {
  static readonly _DISCOUNT_PERCENT = 0.1;
  static readonly _DISCOUNT_QUANTITY = 3;

  get price(): number {
    if (this._quantity >= PercentDiscountSelling._DISCOUNT_QUANTITY) {
      return this._product._price * (1 - PercentDiscountSelling._DISCOUNT_PERCENT) * this._quantity;
    }
    return this._product._price * this._quantity;
    // return 1;
  }

  // compare(other: AbstractSelling): number {
  //   return this.price - other.price;
  // }
}

export default PercentDiscountSelling;

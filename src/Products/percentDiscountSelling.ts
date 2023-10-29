import AbstractSelling from './abstractSelling';
import Product from './product';

class PercentDiscountSelling extends AbstractSelling {
  private static readonly DISCOUNT_PERCENT = 0.1;
  private static readonly DISCOUNT_QUANTITY = 3;

  getPrice(): number {
    if (this._quantity >= PercentDiscountSelling.DISCOUNT_QUANTITY) {
      const discountedPrice = this._product.price * (1 - PercentDiscountSelling.DISCOUNT_PERCENT);
      return discountedPrice * this._quantity;
    }
    return this._product.price * this._quantity;
  }

  compare(other: AbstractSelling): number {
    return this.getPrice() - other.getPrice();
  }
}

export default PercentDiscountSelling;

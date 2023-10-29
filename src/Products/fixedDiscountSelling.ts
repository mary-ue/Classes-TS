import AbstractSelling from './abstractSelling';
import Product from './product';

class FixedDiscountSelling extends AbstractSelling {
  private static readonly DISCOUNT_PERCENT = 0.1;;

  getPrice(): number {
    return this._product.price * (1 - FixedDiscountSelling.DISCOUNT_PERCENT) * this._quantity;
  }

  compare(other: AbstractSelling): number {
    return this.getPrice() - other.getPrice();
  }
}

export default FixedDiscountSelling;

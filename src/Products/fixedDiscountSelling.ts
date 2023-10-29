import AbstractSelling from './abstractSelling';
import Product from './product';

class FixedDiscountSelling extends AbstractSelling {
  private static readonly DISCOUNT = 10;

  getPrice(): number {
    return (this._product.price - FixedDiscountSelling.DISCOUNT) * this._quantity;
  }

  compare(other: AbstractSelling): number {
    return this.getPrice() - other.getPrice();
  }
}

export default FixedDiscountSelling;

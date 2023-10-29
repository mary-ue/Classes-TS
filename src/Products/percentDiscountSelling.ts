import AbstractSelling from './abstractSelling';
import Product from './product';

class PercentDiscountSelling extends AbstractSelling {
  private static readonly DISCOUNT_PERCENT = 10;
  private static readonly DISCOUNT_QUANTITY = 3;

  getPrice(): number {
    const discountedQuantity = Math.min(this._quantity, PercentDiscountSelling.DISCOUNT_QUANTITY);
    const regularQuantity = this._quantity - discountedQuantity;

    const discountedPrice = this._product.price * discountedQuantity * (1 - PercentDiscountSelling.DISCOUNT_PERCENT / 100);
    const regularPrice = this._product.price * regularQuantity;

    return discountedPrice + regularPrice;
  }

  compare(other: AbstractSelling): number {
    return this.getPrice() - other.getPrice();
  }
}

export default PercentDiscountSelling;

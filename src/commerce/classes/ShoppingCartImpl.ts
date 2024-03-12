import {AbstractShoppingCart} from './AbtractShoppingCart';

export class ShoppingCartImpl extends AbstractShoppingCart {
  getTaxRate(): number {
    return 0;
  }
}

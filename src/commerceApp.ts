import {Randomizer} from './utils/Randomizer';
import {ShoppingCartImpl} from './commerce/classes/ShoppingCartImpl';

(async () => {
  try {
    const customer = Randomizer.getRandomCustomer();
    const shoppingCart = new ShoppingCartImpl(customer);
    const purchaseItem = Randomizer.getRandomPurchaseItem();
    shoppingCart.addPurchaseItem(purchaseItem);
    const confirmation = shoppingCart.checkout();
    console.log(confirmation);

    //console.log(confirmation);
  } catch (e: any) {
    console.error(e.message);
  }
})();

import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
// import '../data/cart-class.js'; // This syntax just runs all the code in a file
// import '../data/backend-practice.js'; // This syntax is used to import and run all code in the file we used to illustrate how the backend works
import { loadProducts } from '../data/products.js';

loadProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
});

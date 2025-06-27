import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
// import '../data/cart-class.js'; // This syntax just runs all the code in a file
// import '../data/backend-practice.js'; // This syntax is used to import and run all code in the file we used to illustrate how the backend works
import { loadProducts, loadProductsFetch } from '../data/products.js';

// When we create a promise, it runs the inner function immediately
// It takes a parameter called resolve which is a function
// resolve works similar to the done() function
// it lets us control when to go to the next step
// We use promises instead of just using callbacks as multiple callbacks cause a lot of nesting
// These are almost impossible to debug and severely harm the readability of code
// Promises help this by allowing us to flatten our code

/*
new Promise((resolve) => {
  loadProductsFetch();
  resolve();
}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/

async function loadPage(){
  console.log('Load Page');

  await loadProductsFetch();
  
  return 'value2';
}
loadPage().then(() => {
  console.log('next step');
})



loadProductsFetch().then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});



/* 
loadProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/


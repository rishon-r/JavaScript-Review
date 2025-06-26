import {renderOrderSummary} from '../../scripts/checkout/orderSummary.js'
import {cart, loadFromStorage } from "../../data/cart.js";
import { loadProducts, loadProductsFetch } from '../../data/products.js';

describe('TEST SUITE: renderOrderSummary()', () => {

  beforeAll((done)=> {
    loadProductsFetch().then(() => {
      done(); // done() function is provided by Jasmine, lets us control when to go to the next step
    });
  });


  beforeEach(() => { // This is called a Hook, runs some code for every test
    spyOn(localStorage, 'setItem');

    document.querySelector('.js-test-container').innerHTML =`
    <div class="js-order-summary"></div>
    <div class="js-payment-summary"></div>
    `


    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
        deliveryOptionId: '1'
      },
      {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1,
        deliveryOptionId: '2'
      }]);
    }); // this is a mock
    loadFromStorage();

    renderOrderSummary();
  });

  it('displays the cart', () => {

    const productId1="e43638ce-6aa0-4b85-b27f-e1d07eb678c6";
    const productId2="15b6fc6f-327a-4ec4-896f-486349e85a3d";
   
    expect(
      document.querySelectorAll('.js-cart-item-container').length
    ).toEqual(2);

    expect(
      document.querySelector(`.js-product-quantity-${productId1}`).innerText
    ).toContain('Quantity: 2');

    expect(
      document.querySelector(`.js-product-quantity-${productId2}`).innerText
    ).toContain('Quantity: 1');
    
    document.querySelector('.js-test-container').innerHTML =``;
  });

  it('removes a product', () => {
    
    const productId1="e43638ce-6aa0-4b85-b27f-e1d07eb678c6";
    const productId2="15b6fc6f-327a-4ec4-896f-486349e85a3d";

    document.querySelector(`.js-delete-link-${productId1}`).click();
    expect(
      document.querySelectorAll('.js-cart-item-container').length
    ).toEqual(1);
    expect(
      document.querySelector(`.js-cart-item-${productId1}`)
    ).toEqual(null);
    expect(
      document.querySelector(`.js-cart-item-${productId2}`)
    ).not.toEqual(null);
    expect(cart.length).toEqual(1);
    expect(cart[0].productId).toEqual(productId2);

    document.querySelector('.js-test-container').innerHTML = '';
  });
})
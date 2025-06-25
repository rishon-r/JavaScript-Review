// We have earlier stated that the manner of designing webpages in javascript happens in 3 steps
// First step is implemented below: SAVING THE DATA
// const products here serves as what we refer to as a data structure
// It is essentially just a means of organizing data
// In JavaScript, we use a combination of objects and arrays to create a data structure

// Note that we have removed the array creation manually here and it is instead being loaded from products.js in the data directory
// View the amazon.html file to see the first script tag loading this
// The data structure can be viewed in the products.js

// STEP 2: GENERATING THE HTML 
import {cart, addToCart} from '../data/cart.js';
import {products, loadProducts} from '../data/products.js';

loadProducts(renderProductsGrid);

function renderProductsGrid(){


  let productsHTML='';

  products.forEach(product => {
    productsHTML+= `<div class="product-container">
            <div class="product-image-container">
              <img class="product-image"
                src="${product.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
              ${product.name}
            </div>

            <div class="product-rating-container">
              <img class="product-rating-stars"
                src="${product.getStarsUrl()}">
              <div class="product-rating-count link-primary">
                ${product.rating.count}
              </div>
            </div>

            <div class="product-price">
              ${product.getPrice()}
            </div>

            <div class="product-quantity-container">
              <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            ${product.extraInfoHTML()}
            <div class="product-spacer"></div>

            <div class="added-to-cart">
              <img src="images/icons/checkmark.png">
              Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
              Add to Cart
            </button>
          </div>`      
  });

  document.querySelector('.js-products-grid').innerHTML= productsHTML; // This will render the required HTML

  // STEP 3: Make the website interactive
  // So far, all the add to cart buttons do not function and are instead just dummy placeholders
  // We now want to make them functional or interactive

  const addCartButtons= document.querySelectorAll('.js-add-to-cart')



  function updateCartQuantity(){
    let cartTotal=0;
    cart.forEach(item => {
      cartTotal+=item.quantity;
      })
      let cartQuantity= document.querySelector('.js-cart-quantity');
      cartQuantity.innerHTML=cartTotal;
  }

  addCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // To know which item corresponds to a particular button, we use the data attribute of an HTML tag
      // data attributes have to start with the data- after which we can give it any name. We use kebab case to represent it
      // The .dataset property of an HTML element allows us to access all data attributes of an HTML tag
      // Note that the data attribute name will get converted from kebab case to camel case

      const productId = button.dataset.productId;
      addToCart(productId);
      updateCartQuantity();

    });
  });

}
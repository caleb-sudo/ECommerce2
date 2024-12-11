const products = [
  { name: "Quantum Supremacy", price: 15.99, id: 1, quantity: 1, },
  { name: "On The Origin Of Time", price: 15.99, id: 2, quantity: 1, },
  { name: "Origins", price: 15.99, id: 3, quantity: 1, },
  { name: "Astrophysics for people in a hurry", price: 15.99, id: 4, quantity: 1, },
  { name: "An astronaut's guide to life", price: 10.00, id: 5, quantity: 1, },
  { name: "The Grand Design", price: 9.00, id: 6, quantity: 1,},
  { name: "Letters from an Astrophysicist", price: 25.00, id: 7, quantity: 1, },
  { name: "Brief Answers, Big Questions, Collection", price: 45.00, id: 8, quantity: 1, },
  { name: "The C Programming Language", price: 15.99, id: 9, quantity: 1, },
  { name: "The Three Body Problem Trilogy", price: 50.00, id: 10, quantity: 1, },
  { name: "Supernova Era", price: 15.99, id: 11, quantity: 1, },
  { name: "Ball Lightning", price: 15.99, id: 12, quantity: 1, },
  { name: "To Hold Up The Sky", price: 15.99, id: 13, quantity: 1, },
  { name: "The Wandering Earth", price: 15.99, id: 14, quantity: 1, },
  { name: "The Redemtion Of Time", price: 20.00, id: 15, quantity: 1, },
  { name: "Bowl Of Heaven & Shipstar", price: 15.00, id: 16, quantity: 1, },
  { name: "Glourious", price: 15.99, id: 17, quantity: 1, },
];

const productsHTML = products.map(
  (product) => `<div class="product-card">
        <h2 class="product-name">${product.name}</h2>
        <strong>$${product.price}</strong>
        <button class="product-btn" id=${product.id}>Add to Cart</button>
    </div>`
);
const result = document.querySelector(".result");
result.innerHTML = productsHTML.join("");

let cart = [];

function addToCart(products, id){
  const product = products.find((product) => product.id === id);
  const cartProduct = cart.find((product) => product.id === id);
  if (cartProduct != undefined && product.id == cartProduct.id) {
    incrItem(id);
  } else {
    cart.unshift(product);
  }
  updateCart();
  getTotal(cart);
};


function getTotal(cart) {
  let { totalItem, cartTotal } = cart.reduce(
    (total, cartItem) => {
      total.cartTotal += cartItem.price * cartItem.quantity;
      total.totalItem += cartItem.quantity;
      return total;
    },
    { totalItem: 0, cartTotal: 0 }
  );
  const totalItemsHTML = document.querySelector(".noOfItems");
  totalItemsHTML.innerHTML = `${totalItem} items`;
  const totalAmountHTML = document.querySelector(".total");
  totalAmountHTML.innerHTML = `$${cartTotal}`;
}

getTotal(cart);

let num = document.querySelectorAll(".product-btn").length;
for (let i = 0; i < num; i++) {
  document
    .querySelectorAll(".product-btn")
  [i].addEventListener("click", function (e) {
    addToCart(products, parseInt(e.target.id));
  });
}

function updateCart() {
  const cartHTML = cart.map(
    (item) => `<div class="cart-item">
            <h3>${item.name}</h3>
            <div class="cart-detail"><div class="mid">
                <button onclick={decrItem(${item.id})}>-</button>
                <p>${item.quantity}</p>
                <button onclick={incrItem(${item.id})}>+</button>
            </div>
            <p>$${item.price}</p>
            <button onclick={deleteItem(${item.id})} class="cart-product" id=${item.id}>D</button></div>
           </div>`
  );

  const cartItems = document.querySelector(".cart-items");
  cartItems.innerHTML = cartHTML.join("");
}

function deleteItem(id) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart[i].quantity = 1;
      cart.splice(i, 1);
    }
  }
  updateCart();
  getTotal(cart);
}

function decrItem(id) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id == id && cart[i].quantity > 1) {
      cart[i].quantity -= 1;
    }
  }
  updateCart();
  getTotal(cart);
}

function incrItem(id) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i] && cart[i].id == id) {
      cart[i].quantity += 1;
    }
  }
  updateCart();
  getTotal(cart);
}

updateCart();

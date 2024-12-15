const ul = document.querySelector('ul');
var numofItems = document.getElementById("numOfItems");
var total = document.getElementById("totalCost");
var cost = 0;

for (var i = 0; i < localStorage.length; i++) {
  var price;
  var key = localStorage.key(i);
  var val = localStorage.getItem(key);
  const li = document.createElement('li');

  switch (key) {
    case "Quantum Supremacy":
      case "On The Origin of Time":
        case "Astrophysics for people in a hurry":
          case "Bowl of Heaven & Shipstar":
            case "Glorious":
              case "To Sleep in a Sea Of Stars":
                price = 15;
                cost += price;
                break;

    case "Origins":
      case "An Astronaut's Guide to Life":
        price = 10;
        cost += price;
        break;

    case "The Grand Design":
      price = 9;
      cost += price;
      break;
    
    case "Letters From an Astrophysicsist":
      case "You Are Here: Around the World in 92 Minutes":
        case "The Apollo Murders":
          price = 25;
          cost += price;
          break;
    
    case "The Three Body Problem Trilogy":
      price = 60;
      cost += price;
      break;

    case "Breif Answers, Big Questions":
      price = 40;
      cost += price;
      break;
    
    case "The C Programming Language":
      case "Molecules: The Elements and the Architecture of Everything":
        case "Supernove Era":
          case "Ball Lightning":
            case "To Hold Up The Sky":
              case "The Wandering Earth":
                case "The Redemtion of Time":
                  price = 20;
                  cost += price;
                  break;
  }

  li.classList.add("cart-item");

  li.textContent = key;
  ul.appendChild(li);

  const itemCost = document.createElement('p');
  itemCost.textContent = "$" + price + ".00";
  li.appendChild(itemCost);

  const quantChanger = document.createElement('div');
  li.appendChild(quantChanger);

  const minus = document.createElement('button');
  minus.textContent = "-";
  minus.addEventListener("click", minusVal);
  quantChanger.appendChild(minus);

  const quant = document.createElement('p');
  quant.textContent = val;
  quantChanger.appendChild(quant);

  const plus = document.createElement('button');
  plus.textContent = "+";
  quantChanger.appendChild(plus);

  const del = document.createElement('button');
  del.textContent = "delete";
  del.addEventListener("click", deleteItem);
  li.appendChild(del);
}

const minusBtns = document.getElementsByClassName("minus");
minusBtns.forEach(minusBtn => {
  minus.addEventListener("click", (e) => {
    const minusindex = Array.from(minusBtns).indexOf(e.target);
    location.setItem(minusindex, val--);
    location.reload();
  });
});

const plusBtns = document.getElementsByClassName("plus");
plusBtns.forEach(plusBtn => {
    plus.addEventListener("click", (e) => {
      const plusindex = Array.from(plusBtns).indexOf(e.target);
      localStorage.setItem(plusindex, val++);
      location.reload();
    });
});

const deleteBtns = document.getElementsByClassName("deleteBtn");
deleteBtns.forEach(deleteBtn => {
  del.addEventListener("click", (e) => {
    const delIndex = Array.from(deleteBtns).indexOf(e.target);
    localStorage.removeItem(delIndex);
    location.reload();
  });
});

function clearCart() {
  localStorage.clear();
  location.reload();
}

numofItems.textContent = localStorage.length + " items";
total.textContent = "$" + cost;

const checkOut = document.getElementsByClassName("buy-btn");
checkOut.addEventListener("click", checkOutClicked);

function checkOutClicked() {
  document.getElementById("checkOutForm").style.display = "block";
}

function checkOutCanceled() {
  document.getElementById("checkOutForm").style.display = "none";
}
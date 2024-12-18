function reload() {
  location.reload();
}

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
                price *= val;
                cost += price;
                break;

    case "Origins":
      case "An Astronaut's Guide to Life":
        price = 10;
        price *= val;
        cost += price;
        break;

    case "The Grand Design":
      price = 9;
      price *= val;
      cost += price;
      break;
    
    case "Letters From an Astrophysicsist":
      case "You Are Here: Around the World in 92 Minutes":
        case "The Apollo Murders":
          price = 25;
          price *= val;
          cost += price;
          break;
    
    case "The Three Body Problem Trilogy":
      price = 60;
      price *= val;
      cost += price;
      break;

    case "Breif Answers, Big Questions":
      price = 40;
      price *= val;
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
                  price *= val;
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
  minus.id = "minusBtn" + i;
  minus.style.cursor = "pointer";
  minus.addEventListener("click", minusVal);
  quantChanger.appendChild(minus);

  const quant = document.createElement('p');
  quant.textContent = val;
  quantChanger.appendChild(quant);

  const plus = document.createElement('button');
  plus.textContent = "+";
  plus.id = "plusBtn" + i;
  plus.style.cursor = "pointer";
  plus.addEventListener("click", plusVal);
  quantChanger.appendChild(plus);

  const del = document.createElement('button');
  del.textContent = "delete";
  del.style.cursor = "pointer";
  del.addEventListener("click", deleteItem);
  li.appendChild(del);
}

function minusVal() {
  for (var i = 0; i < localStorage.length; i++) {
    localStorage.setItem(key, val--);
  }
  reload();
}

function plusVal() {
  for (var i = 0; i < localStorage.length; i++) {
    localStorage.setItem(key, val++);
  }
  reload();
}

function deleteItem() {
  for (var i = 0; i < localStorage.length; i++) {
    localStorage.removeItem(key);
  }
  reload();
}

function clearCart() {
  localStorage.clear();
  reload();
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

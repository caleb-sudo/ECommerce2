const arr = localStorage.valueOf();

const ul = document.querySelector('ul');
var numofItems = document.getElementById("numOfItems");
var total = document.getElementById("totalCost");
var cost = 0;

for (var i = 0; i < localStorage.length; i++) {
  var key = localStorage.key(i);
  const li = document.createElement('li');

  li.classList.add("cart-item");

  li.textContent = key + "\f01b";
  ul.appendChild(li);

  const items = document.getElementsByClassName("cart-item");

  

  switch (key) {
    case "Quantum Supremacy":
      case "On The Origin of Time":
        case "Astrophysics for people in a hurry":
          case "Bowl of Heaven & Shipstar":
            case "Glorious":
              case "To Sleep in a Sea Of Stars":
                cost += 15;
                break;

    case "Origins":
      case "An Astronaut's Guide to Life":
        cost += 10;
        break;

    case "The Grand Design":
      cost += 9;
      break;
    
    case "Letters From an Astrophysicsist":
      case "You Are Here: Around the World in 92 Minutes":
        case "The Apollo Murders":
          cost += 25;
          break;
    
    case "The Three Body Problem Trilogy":
      cost += 60;
      break;

    case "Breif Answers, Big Questions":
      cost += 40;
      break;
    
    case "The C Programming Language":
      case "Molecules: The Elements and the Architecture of Everything":
        case "Supernove Era":
          case "Ball Lightning":
            case "To Hold Up The Sky":
              case "The Wandering Earth":
                case "The Redemtion of Time":
                  cost += 20;
                  break;
  }
}

numofItems.textContent = localStorage.length + " items";
total.textContent = "$" + cost;
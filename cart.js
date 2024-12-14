const arr = localStorage.valueOf();

const ul = document.querySelector('ul');
var numofItems = document.getElementById("numOfItems");
var total = document.getElementById("totalCost");
var cost = 0;

for (var i = 0; i < localStorage.length; i++) {
  const li = document.createElement('li');
  var key = localStorage.key(i);
  li.textContent = key;
  li.style.display = 'flex';
  ul.appendChild(li);

  switch (key) {
    case "Quantum Supremacy":
      case "On The Origin of Time":
        case "Astrophysics for people in a hurry":
          case "Bowl of Heaven & Shipstar":
            case "Glorious":
              case "To Sleep in a Sea Of Stars":
                cost += 15;
                break;
  }
}

numofItems.textContent = localStorage.length + " items";
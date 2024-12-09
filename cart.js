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

function showCart() {
  if (CheckBrowser()) {
    var key = "";
    var list = "<tr><th>Item</th><th>Value</th></tr>\n";
    var i = 0;
    for (i = 0; i <= localStorage.length-1; i++) {
      key = localStorage.key(i);
      list += "<tr><td>" + key + "</td>\n<td>" + localStorage.getItem(key) + "</td></tr>\n";
    }
    if (list == "<tr><th>Item</th><th>Value</th></tr>\n") {
        list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
    }
    document.getElementById('list').innerHTML = list;
  } else {
    alert('Cannot save shopping list as your browser does not support HTML 5');
  }
}

function CheckBrowser() {
	if ('localStorage' in window && window['localStorage'] !== null) {
		return true;
	} else {
			return false;
	}
}
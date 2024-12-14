const ul = document.querySelector('ul');
var numofItems = document.getElementById("numOfItems");

for (var i = 0; i < localStorage.length; i++) {
  const li = document.createElement('li');
  var key = localStorage.key(i);
  li.textContent = key;
  li.style.display = 'flex';
  ul.appendChild(li);
}

numofItems.textContent = localStorage.length + " items";
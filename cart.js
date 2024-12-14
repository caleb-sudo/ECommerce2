const ul = document.querySelector('ul');

for (var i = 0; i < localStorage.length - 1; i++) {
  const li = document.createElement('li');
  var key = localStorage.key(i);
  li.textContent = key;
  ul.appendChild(li);
}
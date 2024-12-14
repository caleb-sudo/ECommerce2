const ul = document.querySelector('ul');

for (var i = 0; i < localStorage.length; i++) {
  const li = document.createElement('li');
   key = localStorage.key(i);
  li.textContent = key;
  ul.appendChild(li);
}
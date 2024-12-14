const data = [ 
  "Quantum Supremacy", 
  "On The Origin Of Time", 
  "Neil DeGrasse Tyson", 
  "Astrophysics for people in a hurry", 
  "An astronaut's guide to life", 
  "The Grand Design", 
  "Letters from an Astrophysicist", 
  "Brief Answers, Big Questions, Collection", 
  "The C Programming Language", 
  "The Three Body Problem Trilogy", 
  "Supernova Era", 
  "Ball Lightning", 
  "To Hold Up The Sky", 
  "The Wandering Earth", 
  "The Redemtion Of Time", 
  "Bowl Of Heaven & Shipstar", 
  "Glourious", 
  "You Are Here: Around the World in 92 Minutes", 
  "Molecules: The Elements and the Architecture of Everything", 
  "The Apollo Murders", 
  "To Sleep in a Sea Of Stars",
];

const ul = docuement.querySelector('ul')

for (var i = 0; i < localStorage.length; i++) {
  let itemsArray = localStorage.getItem(data[i]) ? JSON.parse(localStorage.getItem(data[i])) : [];
}

itemsArray.forEach(addTask);
function addTask(text){
  const li = document.createElement('li')
  li.textContent = text;
  ul.appendChild(li);
}
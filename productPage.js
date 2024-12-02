const int products = 16;

function Product(name, price, author, theme, fiction, Nonfiction) {
  this.name = name;
  this.price = price;
  this.author = author;
  this.theme = theme;
  this.fiction = fiction;
  this.Nonfiction = Nonfiction;
}

for (const int index = 0; index < products; index++) {
  switch(index) {
    case 0:
      const product = new Product("Quantum Supremacy", 15.99, "Michio Kaku", "astrophysics", false, true);
      break;

    case 1:
      const product = new Product("On The Origin Of Time", 15.99, "Stephen Hawking", "astrophysics", false, true);
      break;

    case 2:
      const product = new Product("Origins", 10.00, "Neil DeGrasse Tyson", "astrophysics", false, true);
      break;

    case 3:
      const product = new Product("Astrophysics for people in a hurry", 15.99, "Neil DeGrasse Tyson", "astrophysics", false, true);
      break;

    case 4:
      const product = new Product("An astronaut's guide to life", 10.00, "Chris Hadfield", "Space", false, true);
      break;

    case 5:
      const product = new Product("", 10.00, "", "", false, true);
      break;

    case 6:
      break;

    case 7:
      break;

    case 8:
      break;

    case 9:
      break;

    case 10:
      break;

    case 11:
      break;

    case 12:
      break;

    case 13:
      break;

    case 14:
      break;

    case 15:
      break;

    case 16:
      break;
  }
}

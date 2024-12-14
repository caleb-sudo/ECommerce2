const booksData = [
    { 
        id: 1,
        name: "Quantum Supremacy",
        price: 15.00,
        img: "resources/book1(1).jpg",
        genre: "Non-Fiction",
        topic: "Science",
    },
    { 
        id: 2,
        name: "On The Origin Of Time",
        price: 15.00,
        img: "resources/book2(1).jpg",
        genre: "Non-Fiction",
        topic: "Science",
    },
    {
        id: 3,
        name: "Origins",
        price: 15.00,
        img: "resources/book3(1).jpg",
        genre: "Non-Fiction",
        topic: "Science",
    },
    {
        id: 4,
        name: "Astrophysics for people in a hurry",
        price: 15.00,
        img: "resources/book4(1).jpg",
        genre: "Non-Fiction",
        topic: "Science",
    },
    {
        id: 5,
        name: "An astronaut's guide to life",
        price: 10.00,
        img: "resources/book5(1).jpg",
        genre: "Non-Fiction",
        topic: "Space",
    },
    {
        id: 6,
        name: "The Grand Design",
        price: 9.00,
        img: "resources/book6(1).jpg",
        genre: "Non-Fiction",
        topic: "Science",
    },
    {
        id: 7,
        name: "Letters from an Astrophysicist",
        price: 25.00,
        img: "resources/book7(1).jpg",
        genre: "Non-Fiction",
        topic: "Science",
    },
    {
        id: 8,
        name: "Brief Answers, Big Questions, Collection",
        price: 45.00,
        img: "resources/book8(1).jpg",
        genre: "Non-Fiction",
        topic: "Science",
    },
    {
        id: 9,
        name: "The C Programming Language",
        price: 15.00,
        img: "resources/book9(1).jpg",
        genre: "Non-Fiction",
        topic: "Computer Science",
    },
    {
        id: 10,
        name: "The Three Body Problem Trilogy", 
        price: 50.00, 
        img: "resources/book10(1).jpg",
        genre: "Fiction",
        topic: "Uncertainty",
    },
    {
        id: 11,
        name: "Supernova Era", 
        price: 15.00, 
        img: "resources/book11(1).jpg",
        genre: "Fiction",
        topic: "Uncertainty",
    },
    {
        id: 12,
        name: "Ball Lightning", 
        price: 15.00, 
        img: "resources/book12(1).jpg",
        genre: "Fiction",
        topic: "Uncertainty",
    },
    {
        id: 13,
        name: "To Hold Up The Sky", 
        price: 15.00,
        img: "resources/book13(1).jpg",
        genre: "Fiction",
        topic: "Short Stories",
    },
    {
        id: 14,
        name: "The Wandering Earth", 
        price: 15.00,
        img: "resources/book14(1).jpg",
        genre: "Fiction",
        topic: "Short Stories",
    },
    {
        id: 15,
        name: "The Redemtion Of Time", 
        price: 20.00, 
        img: "resources/book15(1).jpg",
        genre: "Fiction",
        topic: "Uncertainty",
    },
    {
        id: 16,
        name: "Bowl Of Heaven & Shipstar", 
        price: 15.00, 
        img: "resources/book16(1).jpg",
        genre: "Fiction",
        topic: "Space",
    },
    {
        id: 17,
        name: "Glourious", 
        price: 15.00,
        img: "resources/book17(1).jpg",
        genre: "Fiction",
        topic: "Space",
    },
];

const productsContainer = document.querySelector(".products");
const categoryList = document.querySelector(".category-list");

function displayProducts(products) {
    if (products.length > 0) {
        const product_details = products.map((product) => `
            <div class="product">
                <div class="img">
                    <img src="${product.img}" alt="${product.name}" />
                </div>
                <div class="product-details">
                    <span class="name">${product.name}</span>
                    <span class="amt">Rs.${product.price}</span>
                </div>
                <button onclick="localStorage.setItem('${product.name}', 1);alert('${product.name} has been added to your cart');">
                    Add to Cart
                </button>
            </div>
        `).join("");
  
      productsContainer.innerHTML = product_details;
    } else {
      productsContainer.innerHTML = "<h3>No Products Available</h3>";
    }
}

displayProducts(booksData);
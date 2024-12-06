const books = [
  //non-fiction
  ["Quantum Supremacy", 15.99, "Michio Kaku", "Science", "NonFiction", ""],
  ["On The Origin Of Time", 15.99, "Stephen Hawking", "Science", "NonFiction", ""],
  ["Origins", 10.00, "Neil DeGrasse Tyson", "Science", "NonFiction", ""],
  ["Astrophysics for people in a hurry", 15.99, "Neil DeGrasse Tyson", "Science", "NonFiction", ""],
  ["An astronaut's guide to life", 10.00, "Chris Hadfield", "Science", "NonFiction", ""],
  ["The Grand Design", 18.00, "Stephen Hawking", "Science", "NonFiction", ""],
  ["Letters from an Astrophysicist", 25.00, "Neil DeGrasse Tyson", "Science", "NonFiction", ""],
  ["Brief Answers, Big Questions, Collection", 50.00, "Stephen Hawking", "Science", "NonFiction", ""],
  ["The C Programming Language", 15.00, "Brian W. Kernighan & Dennis M. Ritchie", "Computer Science", "NonFiction", ""],

  //fiction
  ["The Three Body Problem Trilogy", 50.00, "Cixin Liu", "Science Fiction", "Fiction", ""],
  ["Supernova Era", 15.00, "Cixin Liu", "Science Fiction", "Fiction", ""],
  ["Ball Lightning", 15.00, "Cixin Liu", "Science Fiction", "Fiction", ""],
  ["To Hold Up The Sky", 15.00, "Cixin Liu", "Short Story, Science Fiction", "Fiction", ""],
  ["The Wandering Earth", 15.00, "Cixin Liu", "Short Story, Science Fiction", "Fiction", ""],
  ["The Redemtion Of Time", 20.00, "Baoshu", "Science Fiction", "Fiction", ""],
  ["Bowl Of Heaven & Shipstar", 30.00, "Gregory Benford & Larry Niven", "Science Fiction", "Fiction", ""],
  ["Glourious", 15.00, "Gregory Benford & Larry Niven", "Science Fiction", "Fiction", ""],
]

var page = -1;

function search() {
    var input = document.getElementById("Search");
    var filter = input.value.toUpperCase();
    var span = document.getElementsByClass("title");
    var auther = documnent.getElementsByClass("auther");
    for (var i = 0; i < span.length; i++) {
        var a = span[i].getElementsByTagName("a")[0];
        var b = auther[i].getElementsByTagName("a")[0];
        var ab = a.innerHTML.toUpperCase(filter);
        var bc = b.innerHTML.toUpperCase(filter);
        if (ab > -1 || bc > -1) {
            span[i].style.display = "";
        } else {
            span[i].style.display = "none";
        }
    }
}

function CatagoryCheckBox() {
    var NonFictCheckBox = document.getElementById("Non-Fiction");
    var FictCheckBox = document.getElementById("Fiction");
    var filter1[][] = NonFictCheckBox.value;
    var filter2[][] = FictCheckBox.value;
    var ul = document.getElementById("searchMenu");
    var li = ul.getElementByTagName("li");
    for (var i = 0; i < books.length; i++) {
        let a = books[i][4];
    }
}

function checkTopic() {
  var topics = document.getElementsByName("Topics");
  for (var i = 0; i < topics.length; i++) {
    if (topics[i].checked) {
      var th = document.getElementsByClass(topics[i].value);
      var a = document.getElementsByTagName(th);
      if (a.getElementsByClass(topics[i].value) == topics[i].value) {
        th[i].style.display = "";
      } else {
        th[i].style.display = "none";
      }
    }
  }
}

function addTexts() {
  var title = document.getElementById("bookTitle");
  var auther = docuement.getElementById("bookAuther");
  var price = document.getElementById("bookPrice");
  var desc = document.getElementById("bookDescription");
  for (var i = 0; i < books.length; i++) {
    title.innerHTML = books[0][page];
    author.innerHTML = books[2][page];
    price.innerHTML = books[1][page];
    desc.innerHTML = books[5][page];
  }
}

function Increase() {
  var pict = document.getElementById("mainPict");
  
}

function addToCart() {
  var btn = document.getElementsByClass("cartBtn");
  
}

function page0() {
  page = 0;
  location.href = "productPage.html";
  addTexts();
}
function page1() {
  page = 1;
  location.href = "productPage.html";
  addTexts();
}
function page2() {
  page = 2;
  location.href = "productPage.html";
  addTexts();
}
function page3() {
  page = 3;
  location.href = "productPage.html";
  addTexts();
}
function page4() {
  page = 4;
  location.href = "productPage.html";
  addTexts();
}
function page5() {
  page = 5;
  location.href = "productPage.html";
  addTexts();
}
function page6() {
  page = 6;
  location.href = "productPage.html";
  addTexts();
}
function page7() {
  page = 7;
  location.href = "productPage.html";
  addTexts();
}
function page8() {
  page = 8;
  location.href = "productPage.html";
  addTexts();
}
function page9() {
  page = 9;
  location.href = "productPage.html";
  addTexts();
}
function page10() {
  page = 10;
  location.href = "productPage.html";
  addTexts();
}
function page11() {
  page = 11;
  location.href = "productPage.html";
  addTexts();
}
function page12() {
  page = 12;
  location.href = "productPage.html";
  addTexts();
}
function page13() {
  page = 13;
  location.href = "productPage.html";
  addTexts();
}
function page14() {
  page = 14;
  location.href = "productPage.html";
  addTexts();
}
function page15() {
  page = 15;
  location.href = "productPage.html";
  addTexts();
}
function page16() {
  page = 16;
  location.href = "productPage.html";
  addTexts();
}

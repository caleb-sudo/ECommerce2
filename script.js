const books = [
  //non-fiction
  ["Quantum Supremacy", "15.99", "Michio Kaku", "Science", "NonFiction", ""],
  ["On The Origin Of Time", "15.99", "Thomas Hertog", "Science", "NonFiction", ""],
  ["Origins", "10.00", "Neil DeGrasse Tyson & Donald Goldsmith", "Science", "NonFiction", ""],
  ["Astrophysics for people in a hurry", "15.99", "Neil DeGrasse Tyson", "Science", "NonFiction", ""],
  ["An astronaut's guide to life", "10.00", "Chris Hadfield", "Science", "NonFiction", ""],
  ["The Grand Design", "18.00", "Stephen Hawking", "Science", "NonFiction", ""],
  ["Letters from an Astrophysicist", "25.00", "Neil DeGrasse Tyson", "Science", "NonFiction", ""],
  ["Brief Answers, Big Questions, Collection", "<span style='color:red;'><s>60.00</s><br>25% off</span>45.00", "Stephen Hawking", "Science", "NonFiction", ""],
  ["The C Programming Language", "15.99", "Brian W. Kernighan & Dennis M. Ritchie", "Computer Science", "NonFiction", ""],

  //fiction
  ["The Three Body Problem Trilogy", "50.00", "Cixin Liu", "Science Fiction", "Fiction", ""],
  ["Supernova Era", "15.99", "Cixin Liu", "Science Fiction", "Fiction", ""],
  ["Ball Lightning", "15.99", "Cixin Liu", "Science Fiction", "Fiction", ""],
  ["To Hold Up The Sky", "15.99", "Cixin Liu", "Short Story, Science Fiction", "Fiction", ""],
  ["The Wandering Earth", "15.99", "Cixin Liu", "Short Story, Science Fiction", "Fiction", ""],
  ["The Redemtion Of Time", "20.00", "Baoshu", "Science Fiction", "Fiction", ""],
  ["Bowl Of Heaven & Shipstar", "30.00", "Gregory Benford & Larry Niven", "Science Fiction", "Fiction", ""],
  ["Glourious", "15.99", "Gregory Benford & Larry Niven", "Science Fiction", "Fiction", ""],
]

var page = -1;
document.getElementById("bookTitle").innerHTML = books[7][page] + "<br>" + books[7][page];
document.getElementById("bookAuther").innerHTML = "By: " + books[7][page];
document.getElementById("bookDescription").innerHTML = books[7][page];

function search() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("Search");
  filter = input.value.toUpperCase();
  ul = document.getElementById("searchMenu");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}

function CatagoryCheckBox() {
    var NonFictCheckBox = document.getElementById("Non-Fiction");
    var FictCheckBox = document.getElementById("Fiction");
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
  
  var pictsCanvas = document.getElementById("pictCanavas");
  var pict1 = document.getElementById("pict1");
  var pict2 = document.getElementById("pict2");
  var pict3 = document.getElementById("pict3");
  var pict4 = document.getElementById("pict4");
  for (var i = 0; i < books.length; i++) {
    title.innerHTML = books[0][1];
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

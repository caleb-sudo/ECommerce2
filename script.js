const books = [
  //non-fiction
  ["Quantum Supremacy", "15.99", "Michio Kaku", "Science", "NonFiction", "", "resources/book1(1).jpg", "resources/book1(2).jpg", "resources/book1(3).jpg", "resources/book1(4).jpg"],
  ["On The Origin Of Time", "15.99", "Thomas Hertog", "Science", "NonFiction", "", "resources/book1(1).jpg", "resources/book1(2).jpg", "resources/book1(3).jpg", "resources/book1(4).jpg"],
  ["Origins", "10.00", "Neil DeGrasse Tyson & Donald Goldsmith", "Science", "NonFiction", "", "resources/book1(1).jpg", "resources/book1(2).jpg", "resources/book1(3).jpg", "resources/book1(4).jpg"],
  ["Astrophysics for people in a hurry", "15.99", "Neil DeGrasse Tyson", "Science", "NonFiction", "", "resources/book1(1).jpg", "resources/book1(2).jpg", "resources/book1(3).jpg", "resources/book1(4).jpg"],
  ["An astronaut's guide to life", "10.00", "Chris Hadfield", "Science", "NonFiction", "", "resources/book1(1).jpg", "resources/book1(2).jpg", "resources/book1(3).jpg", "resources/book1(4).jpg"],
  ["The Grand Design", "18.00", "Stephen Hawking", "Science", "NonFiction", "", "resources/book1(1).jpg", "resources/book1(2).jpg", "resources/book1(3).jpg", "resources/book1(4).jpg"],
  ["Letters from an Astrophysicist", "25.00", "Neil DeGrasse Tyson", "Science", "NonFiction", "", "resources/book1(1).jpg", "resources/book1(2).jpg", "resources/book1(3).jpg", "resources/book1(4).jpg"],
  ["Brief Answers, Big Questions, Collection", "<span style='color:red;'><s>60.00</s><br>25% off</span>45.00", "Stephen Hawking", "Science", "NonFiction", "", "resources/book1(1).jpg", "resources/book1(2).jpg", "resources/book1(3).jpg", "resources/book1(4).jpg"],
  ["The C Programming Language", "15.99", "Brian W. Kernighan & Dennis M. Ritchie", "Computer Science", "NonFiction", "", "resources/book1(1).jpg", "resources/book1(2).jpg", "resources/book1(3).jpg", "resources/book1(4).jpg"],

  //fiction
  ["The Three Body Problem Trilogy", "50.00", "Cixin Liu", "Science Fiction", "Fiction", "", "resources/book1(1).jpg", "resources/book1(2).jpg", "resources/book1(3).jpg", "resources/book1(4).jpg"],
  ["Supernova Era", "15.99", "Cixin Liu", "Science Fiction", "Fiction", "", "resources/book1(1).jpg", "resources/book1(2).jpg", "resources/book1(3).jpg", "resources/book1(4).jpg"],
  ["Ball Lightning", "15.99", "Cixin Liu", "Science Fiction", "Fiction", "", "resources/book1(1).jpg", "resources/book1(2).jpg", "resources/book1(3).jpg", "resources/book1(4).jpg"],
  ["To Hold Up The Sky", "15.99", "Cixin Liu", "Short Story, Science Fiction", "Fiction", "", "resources/book1(1).jpg", "resources/book1(2).jpg", "resources/book1(3).jpg", "resources/book1(4).jpg"],
  ["The Wandering Earth", "15.99", "Cixin Liu", "Short Story, Science Fiction", "Fiction", "", "resources/book1(1).jpg", "resources/book1(2).jpg", "resources/book1(3).jpg", "resources/book1(4).jpg"],
  ["The Redemtion Of Time", "20.00", "Baoshu", "Science Fiction", "Fiction", "", "resources/book1(1).jpg", "resources/book1(2).jpg", "resources/book1(3).jpg", "resources/book1(4).jpg"],
  ["Bowl Of Heaven & Shipstar", "30.00", "Gregory Benford & Larry Niven", "Science Fiction", "Fiction", "", "resources/book1(1).jpg", "resources/book1(2).jpg", "resources/book1(3).jpg", "resources/book1(4).jpg"],
  ["Glourious", "15.99", "Gregory Benford & Larry Niven", "Science Fiction", "Fiction", "", "resources/book1(1).jpg", "resources/book1(2).jpg", "resources/book1(3).jpg", "resources/book1(4).jpg"],
]

var page = -1;
document.getElementById("bookTitle").innerHTML = books[7][page] + "<br>" + books[7][page];
document.getElementById("bookAuther").innerHTML = "By: " + books[7][page];
document.getElementById("bookDescription").innerHTML = books[7][page];
document.getElementById("pict1").src = books[7][6];

function search() {
  var input = document.getElementById("Search");
  var filter = input.value.toUpperCase();
  var ul = document.getElementById("searchMenu");
  var li = ul.getElementsByTagName("li");
  for (var i = 0; i < li.length; i++) {
      var a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "none";
      } else {
          li[i].style.display = "";
      }
  }
}

function filterAuthor() {
  var input = document.getElementsByClass("rad");
  var sect = document.getElementsByClass("booksSect");
  var table = sect.getElementsByClass("booksTable");
  var row = table.getElementsByClass("booksRow");
  var th = row.getElementsByTagName("th");
  for (var i = 0; i < th.length; i++) {
    var span = th.getElementsByClass("auther");
    if (span.innerHTML.toUpperCase().indexOf(input.innerHTML) > -1) {
      th[i].style.display = "";
    } else th[i].style.display = "none";
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

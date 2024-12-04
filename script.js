const books = [
  //non-fiction
  ["Quantum Supremacy", 15.99, "Michio Kaku", "Science", "NonFiction"],
  ["On The Origin Of Time", 15.99, "Stephen Hawking", "Science", "NonFiction"],
  ["Origins", 10.00, "Neil DeGrasse Tyson", "Science", "NonFiction"],
  ["Astrophysics for people in a hurry", 15.99, "Neil DeGrasse Tyson", "Science", "NonFiction"],
  ["An astronaut's guide to life", 10.00, "Chris Hadfield", "Science", "NonFiction"],
  ["The Grand Design", 18.00, "Stephen Hawking", "Science", "NonFiction"],
  ["Letters from an Astrophysicist", 25.00, "Neil DeGrasse Tyson", "Science", "NonFiction"],
  ["Brief Answers, Big Questions, Collection", 50.00, "Stephen Hawking", "Science", "NonFiction"],
  ["The C Programming Language", 15.00, "Brian W. Kernighan & Dennis M. Ritchie", "Computer Science", "NonFiction"],

  //fiction
  ["The Three Body Problem Trilogy", 50.00, "Cixin Liu", "Science Fiction", "Fiction"],
  ["Supernova Era", 15.00, "Cixin Liu", "Science Fiction", "Fiction"],
  ["Ball Lightning", 15.00, "Cixin Liu", "Science Fiction", "Fiction"],
  ["To Hold Up The Sky", 15.00, "Cixin Liu", "Short Story, Science Fiction", "Fiction"],
  ["The Wandering Earth", 15.00, "Cixin Liu", "Short Story, Science Fiction", "Fiction"],
  ["The Redemtion Of Time", 20.00, "Baoshu", "Science Fiction", "Fiction"],
  ["Bowl Of Heaven & Shipstar", 30.00, "Gregory Benford & Larry Niven", "Science Fiction", "Fiction"],
  ["Glourious", 15.00, "Gregory Benford & Larry Niven", "Science Fiction", "Fiction"],
]

function search() {
    var input = document.getElementById("Search");
    var filter = input.value.toUpperCase();
    var span = document.getElementsByTagName("span").getElementsByClassName("title");
    for (var i = 0; i < span.length; i++) {
        var a = span[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
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

function Increase() {
  var pict = document.getElementById("mainPict");
  
}

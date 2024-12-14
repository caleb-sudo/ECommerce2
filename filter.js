var genre = document.getElementsByClassName("genre");
var topics = document.getElementsByClassName("topic");
var authors = document.getElementsByClassName("author");

filterFict("Fiction");

function filterFict(c) {
    for (var i = 0; i < genre.length; i++) {
        if (c === "Fiction") {
            genre[i].classList.remove("displayNone");
        } else genre[i].classList.add("displayNone");
    }
}

function filterNew_Deals(c) {

}

function filterTopics(c) {

}

function filterAuthors(c) {

}
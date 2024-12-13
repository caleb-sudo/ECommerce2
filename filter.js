var table = document.getElementById("booksTable");
var tr = table.getElementsByTagName("tr");

var nonfict = document.getElementById("Non-Fiction").checked;
var fict = document.getElementById("Fiction").checked;

var deals = document.getElementById("Deals").checked;

var allTopics = document.getElementById("AllTopics").checked;
var sci = document.getElementById("Science").checked;
var cs = document.getElementById("Computer-Science").checked;
var space = document.getElementById("Space").checked;
var ss = document.getElementById("ShortStories").checked;

var all = document.getElementById("All").checked;
var mic = document.getElementById("Michio").checked;
var tho = document.getElementById("Thomas").checked;
var nei = document.getElementById("Neil").checked;
var don = document.getElementById("don").checked;
var chr = document.getElementById("Chris").checked;
var ste = document.getElementById("Stephen").checked;
var leo = document.getElementById("Leonard").checked;
var bdr = document.getElementById("BR").checked;
var cix = document.getElementById("Cixin").checked;
var bao = document.getElementById("Baoshu").checked;
var gl = document.getElementById("GL").checked;

for (var i = 0; i < tr.length; i++) {
    for (var j = 0; j < 3; j++) {
        var th = tr[i][j].getElementsByTagName("th")[0][0];
        if (th) {
            var genre = th.getElementsByClassName("genre").textContent;
            var topic = th.getElementsByClassName("topic").textContent;
            if (nonfict) {
                if (genre.toUpperCase().indexOf("Non-Fiction") > -1) {
                    tr[i][j].style.display = "";
                } else tr[i][j].style.display = "none";
            }
            if (fict) {
                if (genre.toUpperCase().indexOf("Fiction") > -1) {
                    tr[i][j].style.display = "";
                } else tr[i][j].style.display = "none";
            }
            if (allTopics) {
                tr[i][j].style.display = "";
            }
        }
    }
}
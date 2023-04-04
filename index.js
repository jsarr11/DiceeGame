var no1 = Math.floor(((Math.random()) * 6) + 1);
var no2 = Math.floor(((Math.random()) * 6) + 1);

var player1Image = "images/dice" + no1 + ".png";
var player2Image = "images/dice" + no2 + ".png";

document.querySelector(".img1").setAttribute("src", player1Image);
document.querySelector(".img2").setAttribute("src", player2Image);

if (no1 > no2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!!!";
} else if (no1 < no2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!!!";
} else {
    document.querySelector("h1").innerHTML = "Both equal this time...!";
}


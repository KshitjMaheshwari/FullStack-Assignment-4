var counter = 0;
var x = document.getElementById("text");


function fun()
{
    counter++;
    x.innerHTML = counter;
}

function fun1() {
    counter--;
    if (counter <= 0) {
        counter = 0;
    }
    if (counter === 0) {
        document.getElementById("minus").style.borderColor = "lightgrey";
    }
    x.innerHTML = counter;
}

function mouseHover(active) {
    active.style.borderColor = "black";
}

function mouseHoverMinus(active) {
    if (counter <= 0) {
        active.style.borderColor = "lightgrey";
    } else {
        active.style.borderColor = "black";
    }
}

function mouseOut(y) {
    y.style.borderColor = "lightgrey";
}
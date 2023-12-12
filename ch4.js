console.log("js initialised")
let firstval;
let secval;
let resval;

function capture(firstval,secval) {
    var firstval = document.getElementById("FirstValue").value
    firstval = Number(firstval)
    var secval = document.getElementById("SecValue").value
    firstval = Number(secval)
}

document.getElementById("PlusButton").onclick = function() {
    capture(firstval,secval)
    var resval = Number(firstval + secval);
    var resval = document.getElementById("ResultValue").innerHTML = resval;
}

document.getElementById("MinusButton").onclick = function() {
    capture(firstval,secval)
    var resval = Number(firstval - secval);
    var resval = document.getElementById("ResultValue").innerHTML = resval;
}

document.getElementById("MultiButton").onclick = function() {
    capture(firstval,secval)
    var resval = Number(firstval * secval);
    var resval = document.getElementById("ResultValue").innerHTML = resval;
}

document.getElementById("DivideButton").onclick = function() {
    capture(firstval,secval)
    if (secval != 0) {
        var resval = Number(firstval / secval);
        var resval = document.getElementById("ResultValue").innerHTML = resval;} else {window.alert("I cannot divide by zero!")}
}
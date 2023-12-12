console.log("js initialised")
let firstval;
let secval;
let resval;

document.getElementById("PlusButton").onclick = function() {
    var resval = firstval + secval;
    var resval = document.getElementById("ResultValue").innerHTML = String(resval);
}

document.getElementById("MinusButton").onclick = function() {
    var resval = firstval - secval;
    var resval = document.getElementById("ResultValue").innerHTML = resval;
}

document.getElementById("MultiButton").onclick = function() {
    var resval = firstval * secval;
    var resval = document.getElementById("ResultValue").innerHTML = resval;
}

document.getElementById("DivideButton").onclick = function() {
    if (secval != 0) {
        var resval = firstval / secval;
        var resval = document.getElementById("ResultValue").innerHTML = resval;} else {window.alert("I cannot divide by zero!")}
}
console.log("js initialised")
let firstval;
let secval;
let resval;

function capture() {
    var firstval = document.getElementById("FirstValue").value
    firstval = Number(firstval)
    var secval = document.getElementById("SecValue").value
    firstval = Number(secval)
    console.log("Captured: ",firstval,",",secval)
}

document.getElementById("PlusButton").onclick = function() {
    capture()
    var resval = Number(firstval + secval);
    var resval = document.getElementById("ResultValue").innerHTML = resval;
}

document.getElementById("MinusButton").onclick = function() {
    capture()
    var resval = Number(firstval - secval);
    var resval = document.getElementById("ResultValue").innerHTML = resval;
}

document.getElementById("MultiButton").onclick = function() {
    capture()
    var resval = Number(firstval * secval);
    var resval = document.getElementById("ResultValue").innerHTML = resval;
}

document.getElementById("DivideButton").onclick = function() {
    capture()
    if (secval != 0) {
        var resval = Number(firstval / secval);
        var resval = document.getElementById("ResultValue").innerHTML = resval;} else {window.alert("I cannot divide by zero!")}
}
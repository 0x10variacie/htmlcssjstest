console.log("js initialised");

let firstval;
let secval;
let resval;

document.getElementById("PlusButton").onclick = function() {
    capture();
    var resval = Number(firstval + secval);
    document.getElementById("ResultValue").innerHTML = resval;
};

document.getElementById("MinusButton").onclick = function() {
    capture();
    var resval = Number(firstval - secval);
    document.getElementById("ResultValue").innerHTML = resval;
};

document.getElementById("MultiButton").onclick = function() {
    capture();
    var resval = Number(firstval * secval);
    document.getElementById("ResultValue").innerHTML = resval;
};

document.getElementById("DivideButton").onclick = function() {
    capture();
    if (secval !== 0) {
        var resval = Number(firstval / secval);
        document.getElementById("ResultValue").innerHTML = resval;
    } else {
        window.alert("I cannot divide by zero!");
    }
};

function capture() {
    firstval = document.getElementById("FirstValue").value;
    var firstval = Number(firstval);
    secval = document.getElementById("SecValue").value;
    var secval = Number(secval);
    console.log("Captured: ", firstval, ",", secval);
}
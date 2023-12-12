console.log("js initialised");

let firstval;
let secval;
let resval;

function capture() {
    firstval = document.getElementById("FirstValue").value;
    firstval = Number(firstval);
    secval = document.getElementById("SecValue").value;
    secval = Number(secval);
    console.log("Captured: ", firstval, ",", secval);
}

document.getElementById("PlusButton").onclick = function() {
    capture();
    resval = Number(firstval + secval);
    document.getElementById("ResultValue").innerHTML = resval;
};

document.getElementById("MinusButton").onclick = function() {
    capture();
    resval = Number(firstval - secval);
    document.getElementById("ResultValue").innerHTML = resval;
};

document.getElementById("MultiButton").onclick = function() {
    capture();
    resval = Number(firstval * secval);
    document.getElementById("ResultValue").innerHTML = resval;
};

document.getElementById("DivideButton").onclick = function() {
    capture();
    if (secval !== 0) {
        resval = Number(firstval / secval);
        document.getElementById("ResultValue").innerHTML = resval;
    } else {
        window.alert("I cannot divide by zero!");
    }
};

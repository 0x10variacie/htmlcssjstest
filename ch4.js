console.log("js initialised");
let firstval;
let secval;
let resval;

function capture() {
    firstval = document.getElementById("firstNumberValue").value;
    firstval = Number(firstval);
    secval = document.getElementById("secNumberValue").value;
    secval = Number(secval);
    console.log("Captured: ", firstval, ",", secval);
}

document.getElementById("PlusButton").onclick = function() {
    capture();
    resval = Number(firstval + secval);
    document.getElementById("resultValue").innerHTML = resval;
};

document.getElementById("MinusButton").onclick = function() {
    capture();
    resval = Number(firstval - secval);
    document.getElementById("resultValue").innerHTML = resval;
};

document.getElementById("MultiButton").onclick = function() {
    capture();
    resval = Number(firstval * secval);
    document.getElementById("resultValue").innerHTML = resval;
};

document.getElementById("DivideButton").onclick = function() {
    capture();
    if (secval !== 0) {
        resval = Number(firstval / secval);
        document.getElementById("resultValue").innerHTML = resval;
    } else {
        window.alert("I cannot divide by zero!");
        console.log("attempted to divide by zero")
    }
}

document.getElementById("ClearButton").onclick = function() {
   firstval = 0;
   secval = 0;
   resval = 0; }
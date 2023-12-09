let a;
let b;
let c;

document.getElementById("cCalc").onclick = function(){
    var a = document.getElementById("aTBox").value; 
    a = Number(a);
    var b = document.getElementById("bTBox").value; 
    b = Number(b);
    var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    c = Number(c);
    document.getElementById("cValue").innerHTML = "The hypotenuse is " + c;
};

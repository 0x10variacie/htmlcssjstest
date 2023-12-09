let a;
let b;
let c;

document.getElementById("cCalc").onClick = function(){
    a = document.getElementById("aTBox").value; 
    a = Number(a);
    b = document.getElementById("bTBox").value; 
    b = Number(b);
    c = Math.sqrt(Math.pow(a,2) + Math.sqrt(Math.pow(b,2)))
    c = Number(c);
    document.getElementById("cValue").innerHTML = c;
}

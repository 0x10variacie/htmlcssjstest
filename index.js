console.log("The console is operating now.");

let a;
a = 5;
console.log(a);
a = a + 5;
console.log(a);
let b;
b = "Embracement";
console.log(a, b);
let c;
c = false;
console.log(c);

document.getElementById("p1").innerHTML = "This is the script text.";

let accessname = window.prompt("Access password:");
if (accessname = "admin"){
  window.alert("Access granted!");
}
else{
  window.alert("Access denied, but I'll still let you in :)");
}

let someprompt;
document.getElementById("SomeButton").onclick = function() {
  
  someprompt = document.getElementById("SomeText").value;
  window.alert("So what... you just said '" + "'.");
  console.log("said: " + someprompt);
  document.getElementbyId("p1").innerHTML = someprompt;
}

let textvolatile;
setTimeout(5,function(){textvolatile = document.getElementById("VolatileText").innerHTML = "I swear, there was some change!"});
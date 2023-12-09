let counter = 0;
counter = Number(0);
document.getElementById("CounterButton1").onclick = function(){
    counter++;
    document.getElementById("CounterLabel").innerHTML = counter;
}
console.log("js initialized")
let AudioChosen;

document.getElementById("PlayButton").onclick = function() {
    AudioChosen = document.getElementById("PickButton").value;
    return AudioChosen
}


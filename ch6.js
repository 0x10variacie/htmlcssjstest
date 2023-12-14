console.log("js initialized")
let sfile;

document.getElementById("PlayButton").onclick = function() {
    sfile = document.getElementById("PickButton").value;
    sfile.play()
}


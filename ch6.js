console.log("js initialized")
let AudioChosen;

document.getElementById("PlayButton").onclick = function() {
    var fileInput = document.getElementById("PickButton");
    var selectedFile = fileInput.files[0];
    AudioChosen = document.getElementById("PickButton").value;
    audioChosen = URL.createObjectURL(selectedFile);
    document.getElementById("audioPlayer").src = audioChosen;
    document.getElementById("audioPlayer").style.display = "none";
}


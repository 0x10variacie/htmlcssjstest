console.log("js initialized")

var dropdown = document.getElementById("DropDown")
dropdown_Option = dropdown.options[dropdown.selectedIndex]

document.getElementById("But1").value = function () {
    console.log("button 1 clicked");
    window.alert("1");
}

document.getElementById("But2").value = function () {
    console.log("button 2 clicked");
    window.alert("2");
}

document.getElementById("But3").value = function () {
    console.log("button 3 clicked");
    window.alert("3");
}
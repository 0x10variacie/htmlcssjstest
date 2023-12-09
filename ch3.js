console.log("Script ch3.js is running")

let nameValue;
let dateValue;
const todayDate = new Date(year,month)
let ageValue;


document.getElementById("Submission").onclick = function(){
    nameValue = document.getElementById("NameBox").value 
    dateValue = document.getElementById("DateBox").value 
    ageValue = todayDate - dateValue
    ageValue = Number(ageValue)
    document.getElementById("DataSet").innerHTML = {
        "Thank you for completing the survey",
        "Name: ",nameValue,
        "Born on ",dateValue," (aged ",ageValue,")" 
}
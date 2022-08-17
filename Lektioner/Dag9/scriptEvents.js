//Anropa alla div-taggar
let divList = document.getElementsByTagName("div");
console.log(divList);

//Skriva ut en text till första Div-taggen
divList[0].innerText = "Detta är första div-taggen";

//Skriva ut en h3-tagg till den andra div-taggen
divList[1].innerHTML = "<h3>En Rubrik i andra Div-taggen</h3>";

//Den tredje Div-taggen skall hämta sitt innehåll från första Div-taggen
divList[2].innerText = divList[0].innerText;

for(let i = 0; i < divList.length; i++) {
    divList[i].style.color = "red";
    divList[i].style.textAlign = "center";
}

//Anropa specifikt Inputfält och ge den ett MaxLength Attribut
let nameInput = document.getElementById("nameInput");
nameInput.setAttribute("maxlength", "10")


//Koppla knapp till funktion med addEventListener
//Event när musen svävar över knappen
let myButton = document.getElementById("btnGetValues");
myButton.addEventListener("click", getInputs);
myButton.addEventListener("mouseover",() => {
    myButton.style.fontSize = "24px";
});

//Event när musen lämnar knappen
myButton.addEventListener("mouseout",() => {
    myButton.style.fontSize = "24px";
});



//Koppla första input fält till första div tag
document.getElementById("nameInput").addEventListener("change", () => {
document.getElementById("divOutput").innerText = document.getElementById("nameInput").value;
});



//Funktion som hämtar inputs
function getInputs () {
//Hämta samtliga input-fält
let inputList = document.getElementsByTagName("input")
let inputOfSpecifikClass = document.getElementsByClassName("inputClass")

//Skapa en array för values
let values = [];

for (let i = 0; i < inputList.length; i++) {

//Hämta värde från input-fält och spara det i Values-array.
values.push( inputList[i].value );

}

console.log(values);

//Ny for loop for inputOfSpecifikClass
for (let i = 0; i < inputOfSpecifikClass.length; i++) {
    //Ändra bakgrundsfäg för samtliga komponenter
    inputOfSpecifikClass[i].style.backgroundColor = "green";

}


}
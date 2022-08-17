//Uppgift 11
/*//Inhämta värden från Div-elementen.
let divValues = document.getElementsByTagName("div");

//For loop
for (let i = 0; i < divValues.length; i++) {
divValues[i].innerHTML = ("Skjut mig.");
}
*/

//Uppgift 12

//Tom array 
let numberValue = [];

//DoWhile-loop
function getFunction() {

do {
    let box = prompt("Skriv in ett nummer här", "Skriv in ett nummer ");
    if ( box != null && box != "" && !isNaN(box)) {
        numberValue.push(box);
    } else {
        alert("Du matade inte in ett nummer!");
    }
  
  } while(confirm("Vill du skriva in fler siffror?")) 

  document.getElementById("skrivUt").innerText = numberValue;
}






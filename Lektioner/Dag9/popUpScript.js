//Funktion för btnConfirm
function confirmUser() {
    //Skapa en If-Sats med en confirm-box
if ( confirm("Är du en Bot?") ) {
    alert("Du är en Bot!");
} else {
    alert("Du är en människa!");
}

}

//Function för att hämta ett inmatat värde från User
function getNameFromUser() {
    let name = prompt("Skriv in ditt namn!", "Skriv ditt namn här!");

    if (name == null) {
        alert("Du har inte angett ett värde");
        return;
    }

    if (name == "") {
        alert("Du angav en tom sträng")
        return;
    }

    alert(`Hejsan ${name}`);

}

//Koppla btnConfirm till confirmUser metoden
document.getElementById("btnConfirm").addEventListener("click", confirmUser);
document.getElementById("btnPrompt").addEventListener("click",getNameFromUser);
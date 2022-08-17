
//Uppgift 6 och uppgift 7
//Inhämta värden från inputfältet name
let getNames = document.getElementById("inputName")
let getNumbers = document.getElementById("inputNumber")
let outputText = document.getElementById("paraOutput")

//Funktion som ska onclick - skriva ut getName om i är mindre än värdet från numberInput.
function outputName() {
    for (let i = 0; i < getNumbers.value; i++)
        console.log(getNames.value);
}

//Funktion som också är kopplad till onclick
function greetings(name) {

    //If-sats inuti fukntionen som skriver ut texten Hejsan om getNames.value inte är lika med en tom sträng.
    if (getNames.value !== "") {
        outputText.innerText = `Hejsan ${getNames.value}`;
    } else console.log("Error")
}







const strJson = '{"firstName" : "Marcus", "lastName" : "Henriksson"}';

//Variabel för time-interval
let myInterval;

function convertJStoJSON(){
    //Skapa ett JS objekt
    let myObj = {
        firstName : "Henrik", 
        age : 33,
        townOfBirth: "Brastad"
    }

    console.log(myObj);

//Stringifiera objektet
let myJson = JSON.stringify(myObj);

console.log(msyJson);

}
function convertJSONtoJS() {
    let myObj = JSON.parse(strJson);

    console.log(myObj);

    console.log(myObj.firstName);
}

//Funktion för fetch ISS
async function fetchISS() {
    const apiURL = "https://api.wheretheiss.at/v1/satellites/25544";

    //Anropar API med metoden Fetch
    let response = await fetch(apiURL);

    //Konvertera response från JSON till JS objekt
    let myISSObj = await response.json();

    //Skriv ut obj till konsol
    console.log(myISSObj);

    //Skriv ut data till div-output
    document.getElementById("output").innerText = `Long: ${myISSObj.longitude}\nLat: ${myISSObj.latitude}`;
}

function setupInterval() {
    //Skapa ett intervall och spara en referens till intervallet i min variabel
    myInterval = setInterval(fetchISS, 2000);
}

function stopInterval () {
    //Stoppa mitt intervall
    clearInterval(myInterval);
}

//Anropa funktionen convertJStoJSON och convertJSONtoJS
//convertJStoJSON ();
convertJSONtoJS ();
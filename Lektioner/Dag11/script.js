//Utforska BOM Objektet, med keyword Window


//Deklarera ref-variabel för flikar aftonbladet
let flikar = [];


//Funktion för att hämta och skriva ut storleken
function getSize() {

//Hämta Height och Width av browser-window
let height = window.innerHeight
let width = window.innerWidth

//Skriv ut storleken av window
window.document.getElementById("output").innerText = `${width} x ${height}`;
}

//Funktion för att öppna en sida
function openPage () {
    const url = "http://www.aftonbladet.se";

    //Öppna en ny flik i webbläsaren
    //Sparar ref till fliken i array
    flikar.push(window.open(url))
}

//Funktion för att stänga en sida
function closePage() {
    //Stänga ner en flik i webbläsaren
    //window.close()

    //Stäng ner fliken som variabel flik refererar
    //flik.close();

    //For-loop för att stänga ner samtliga flikar i arrayen
    const arrLength = flikar.length

    for (let i =0; i < arrLength; i++) {
        //Hämtar första elementet i array
        let flik = flikar.shift();

        //Stänga fliken
        flik.close();
    }
    console.log(flikar);
}

//Funktion för att skriva ut url och sökväg
function getURL() {
    //Get Pathname och href
    let pathname = window.location.pathname;
    let href = window.location.href;

    //Skriv ut data till div-tag
    document.getElementById("urlOutput").innerText = `Path: ${pathname}\nHref: ${href}`;
}


//Funktion för att gå forward i historiken
function goForward() {
    window.history.forward();
}
//Anropa GetSize vid start-up
getSize();

//Anropa getURL vid start-up
getURL();
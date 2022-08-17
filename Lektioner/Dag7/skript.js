//Funktioner
function nuke () {
    document.write ("Hejsan");
}


//Funktion för att returnera 2st hälsningsmeddelanden till 2 personer
    function createGreetings() {
    //Hämta våra värden från inputfält.
    let name1 = document.getElementById("person1").value;
    let name2 = document.getElementById("person2").value;

    //Validera värden. Om de är tomma, skriv ut error-meddelande
    if (!name1 || !name2) {
        document.getElementById("nameMessageOutput").innerText = "Du måste fylla i namn i båda fälten";
        return;
    }

    //Anropa en till funktion med namnen som parameter
    //Funktionen skall returnera sammanhängande HTML med namnet.
    let output = generateMessage(name1);
    //Lägga till ett värde till ett redan befintligt värde med +=
    output  += generateMessage(name2)
    //Skriv ut resultaten till en Div tag.
    document.getElementById("nameMessageOutput").innerHTML = output;

}

//Funktion för att returnera ett HTML meddelande
function generateMessage(name) {
    return `<p> Hejsan ${name}  </p>`;
    //Returnera HTML sträng med name inkluderat
}



//Skapa en ny HTML komponent
//I detta fall en Paragraf-tag
let greetingsHTML = "<p>Detta är i en paragraf!</p>";


//Skriva ut ett hälsningsmeddelande.
document.getElementById('greetingsOutput').innerHTML = greetingsHTML;




//Funktion Rainbow
function rainbow() {
    let color = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"] ;

//String för Output
let output = "";

//När loopen når till sju så slutar den loopa.
    for (let i = 0; i < 7; i++ ) {
        //Lägg till en ny paragraf till output med rätt CSS färg.
        output  += `<p style="color: ${color[i]}">Rainbow!</p>`;
    }

    document.getElementById("rainbow").innerHTML = output;

}

//Funktion för att skriva ut en loop ett visst antal gånger
function countAntal(antal) {
    //Skapa variabel för output
    let output = ""

    for(let i = 0; i < antal; i++) {
        output += `<div>Hello World</div>`;
    }

    //Skriv ut värdet från output
    document.getElementById("numberOutput").innerHTML = output;
}

//Anropa funktionen Rainbow
rainbow();



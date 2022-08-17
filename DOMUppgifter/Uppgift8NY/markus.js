//Initiera Array för Houses
let houses = [];

//Skapa funktion för att generera ett nytt objekt.
function createObject() {
    //Hämta data från input fält
    let adress = document.getElementById("adress").value;
    let färg = document.getElementById("färg").value;
    let dörrar = document.getElementById("dörrar").value;

    //Skapa ett objekt av klassen House
    let obj = new House(adress, färg, dörrar);

    //Spara objektet i en array
    houses.push(obj);

    //Spara objektet
    console.log(houses);

    //Skriv ut listan över hus
    //showHouseList();

    //Skriv ut en tabell över hus
    showHouseTable();
}

//FUnktion för att presentera samtliga hus-objekt
function showHouseList() {
    // Skapa output variabel
    let output = "";

    // ForEach loop för array Houses
    houses.forEach((house, index) => {
        //Starta en div tag
        output += "<div>";

        //Rubrik för att separera objekt
        output += `<h4>${house.adress}</h4>`;

        //Anropa ToString i objkete 'house' och spara HTML koden i output
        output += house.toString();

        //Knapp som anropar showAdress för det specifika objektet.
        output += `<div><button onclick="showAdress(${index})">Visa adress</button></div>`;

        //Avsluta div tag
        output += "</div>";
    });

    //Skriva ut Output till div listHouse
    document.getElementById("listHouse").innerHTML = output;
}

function showAdress(indexPosition) {
    //ANropar objektets showAdress med specifikt index värde
    houses[indexPosition].showAdress();
}

function showHouseTable() {
    //Starta table-tag
    let output = "<table>";

    //Anropa GenrateRow() för att skapa header-rad
    output += generateRow(houses[0], 0, true);

    //Skapa en ForEach loop som hämtar attribut-värden från alla objekt i arrayen.
    houses.forEach((house, index) => {
        output += generateRow(house, index, false);
    });

    //Stänga table tag
    output += "</table>";

    document.getElementById("tableHouse").innerHTML = output;
}

function generateRow(obj, index, header) {

    //Starta <tr> tag
    let output = "<tr>";

    //Hämta attributnamn för översta raden
    for (let x in obj) {
        //If sats för header rad
        if (header) {
            //Hämta attribut-namn och spara i en <th> tag
            output += `<th>${x}</th>`;
        } else {
            //Hämtar värden från samtliga attribut i objektet
            output += `<td>${obj[x]}</td>`;
        }
    }

    if (!header) {
        //Skapa en knapp för att skriva ut objektet's adress
        output += `<td><button onclick="showAdress(${index});">Visa adress</button></td>`;
    }

    //Stänga <tr> taggen
    output += "</tr>";

    return output;
}
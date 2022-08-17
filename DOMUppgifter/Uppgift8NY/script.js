class Hus {

    //Constructor med tre stycken attribut
    constructor(gatuadress, färg, våningar) {
        this.gatuadress = gatuadress;
        this.färg = färg;
        this.våningar = våningar;
    }
}

function skapaHus() {
    //Tomma Arrayen där värden/objekt ska pushas in
    arrObj = [];

    //Inhämtar värden från input-elementen i HTML
    let getAdress = document.getElementById("inputAdress").value;
    let getFärg = document.getElementById("inputFärg").value;
    let getVåningar = document.getElementById("inputVåningar").value;

    //Nytt objekt ska tryckas ut när man exekverar funktionen
    let nyttHus = new Hus(getAdress, getFärg, getVåningar);

    //Pushar in det nya objektet in i arrayen
    arrObj.push(nyttHus);

    //Skriver ut det som finns i arrayen
    console.log(arrObj);

    //Skriver ut text när funktionen exekveras
    document.getElementById("tableRowOne").innerHTML = `<td>${nyttHus}</td>`;
    document.getElementById("tableRowTwo").innerHTML = "Hejsan2";
    document.getElementById("tableRowThree").innerHTML = "Hejsan3";
}




/*Bygg vidare från föregående uppgift.
Istället för att skriva ut arrayen med objekt i konsolen så skall objekten istället skrivas ut på
webbläsaren i form av en tabell. Varje rad i tabellen skall vara ett objekt från arrayen.
Översta raden i tabellen skall vara namnen på attributen i tabellen och varje rad under skall
vara ett objekt vardera.
Självklart skall tabellen vara dynamisk skapad, dvs om du lägger till fler objekt till din array,
eller om du inkluderar fler attribut till din klass, så skall dessa också skrivas ut, utan att du
ändrar din kod för att generera din tabell.
Kom ihåg, med en For In loop, med pekare x, så kan man få fram attributets namn med
variabel x, och attributets värde via objektet med index-position x.*/

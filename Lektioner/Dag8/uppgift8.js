
//Uppgift 8
//Tom array där värdena ska pushas in.
let husen = [];

//Klass Hus
class Hus {

//Konstruktor
    constructor(gatuadress, färg, nummer) {
        this.gatuadress = gatuadress;
        this.färg = färg;
        this.nummer = nummer;
    }
}

//Funktion skapaHus
function skapaHus() {

    //Deklarerar och inhämtar värden från HTML.DOC
    let gatuadress = document.getElementById("adress").value;
    let färg = document.getElementById("färg").value;
    let nummer = document.getElementById("nummer").value;

    //När funktionen kallas ska ett nytt objekt skapas med värdena från inputsen med 
    //attributerna gatuadress,färg,nummer
    let nyttObjekt = new Hus (gatuadress, färg, nummer);

    //Det nya objektet som skapas med de nya värdena pushas in i den tomma arrayen
    husen.push(nyttObjekt)

    //Loggar ut resultaten från den tomma arrayen husen.
    console.log(husen);
}

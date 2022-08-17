class Bok {

    static createdBooks = 0;
    constructor (titel, pages) {
    this.titel = titel;
    this.pages = pages;
    Bok.createdBooks ++;

    
    }
    read () {
    return `${this.titel} boken har ${this.pages}sidor`;
}
    static recommendedBook (arrayBooks) {
    let randomindex = Math.floor (Math.random()*arrayBooks.length)  
    return arrayBooks[randomindex].titel 
              
    }
}
 boken1 = new Bok ("GetingKiller1", 432)
 boken2 = new Bok ("ConfusedCoder2", 950)
 boken3 = new Bok ("DontKnowWhatImDoing", 987)
 boken4 = new Bok ("Hercule Porito", 400)

 let bokbok = [boken1, boken2, boken3, boken4];


 // Skapar en loop  => är en funktion
 bokbok.forEach((bok) => {
    console.log(`Boken "${bok.titel}" har ${bok.pages} antal sidor`)
    console.log(bok.read())
 });

    console.log(`Jag har blivit rekommenderad att läsa "${Bok.recommendedBook(bokbok)}"`);

    //Skriv ut hur många böcker som finns 
    console.log(`Det finns ${Bok.createdBooks} antal böcker`)
    






//Skapar första functionen medelvärde som returnerar restvärdet.
function medelvärde(tal1, tal2) {
    return ((tal1 + tal2) / 2)
}
console.log(medelvärde(33, 23));



//Skapar funktion för fullName som returnerar båda string-värdena sammansatta.
function fullName(fName, lName) {
    return (fName + lName);
}
console.log(fullName("Dany", "Nelson"))


function generateMessage(theNames, theAges) {

}
mittNamn = "Dany";
thePuppy = "Nelson";
age = "34";
console.log(`Medelåldern för ${mittNamn} och ${thePuppy} är ${age}`)


/*
function generateMessage() —> Funktion som anropar de ovanstående
två metoder och genererar ett meddelande bestående av fulla namnet av två
personer samt deras medel-ålder. Värden är hårdkodade från variabler, antingen
inuti denna funktion eller som parameter när denna funktion anropas.
Med dessa tre funktioner, anropa funktionen generateMessage() och skriv ut ett
meddelande till consolen.*/
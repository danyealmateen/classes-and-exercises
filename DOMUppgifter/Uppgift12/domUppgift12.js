//Uppgift 12 med Marcus genomgång.
function inputNumbers() {

//Skapa en array av nummer.
let numbers = [];


//Do-While loop.
do {

//Loop-innehållet.


//Prompt-Box där användaren matar in ett nummer.
let nummer = prompt("Mata in ett nummer!");


//Validering av nummer, kontrollera att det är ett giltigt nummer.
if (nummer != null && nummer != "" && !isNaN(nummer)) {

//Pushar in Int-version av nummer
numbers.push( parseInt(nummer) );
}else {
     alert("Du har inte matat in ett nummer");
 }


//Loop-condition.
} while ( confirm("Vill du mata in flera nummer?") ); 

//Skriv ut arrayen
document.getElementById("nummerOutput").innerText = numbers;

//Summera arrayen och skriv ut summan
let summa = 0;
numbers.forEach((number) => {
    //Lägg till värdet av number till det befintliga värdet av summa
    summa += number;
});

   //Skriv ut summa till sum
   document.getElementById("sum").innerText = `Summan av arrayen är ${summa}`;
}
/*//1.Här skapar jag funktionen och tilldelar den parametern name
//2.Deklarerar variabeln let output till att skriva ut texten Hejsan + parametern
//3.Och att funktionen ska returnera variabeln output när jag kallar på den
//ALLT detta sker inom function bracketsen
function greetings(name) {
    let output = `Hejsan ${name}`;
    return output;
}
//Deklarerar och tilldelar variablarna ett värde
let antal = 5;
let namn = "Jonathan";

//Anropa funktionen
for (let i = 0; i < antal; i++) {
    console.log(greetings(namn));
}
*/


/*function greetings(name) {
    let output = `Hejsan ${name}`;
    return output;
}

let namn = "Dany";
let antal = 5;

for (let i = 0; i < antal; i++) {
    console.log(greetings(namn))
}
*/

/*Här skapar jag funktionen och tilldelar variabeln output ett värde som är en hälsningsfras
samt ett namn som den ska skriva ut. Den ska returnera outputen i console.log */
/*
function greetings(name) {
    let output = `Hejsan ${name}`
    return output
}
/*Deklarerar två variablar, ett för namnet och ett för antal. Antalet är för forLoopen
och name är namnet som ska skrivas ut*/

/*let namn = "Dany";
let antal = 10;

for (let i = 0; i < antal; i++) {
    console.log(greetings(namn));
}
*/

/*//Aktiverar funktionen samt ett output resultat som ska ut i console.log
function greetings(name) {
    let output = `Hejsan tjockskallen ${namn}`;
    return output;
}
//Deklarerar och tilldelar två st variablar
let namn = "Dany";
let antal = 5;

for (let i = 0; i < antal; i++) {
    console.log(greetings(namn));
}
*/

/*function greetings(name) {
    let output = `Hejsan ${namn} big-ears. I am repeating myself just for fun`
    return output;
}
let namn = "Nihal";
let antal = 10;

for (let i = 0; i < 10; i++) {
    console.log(greetings(namn))
}
*/
/*
function greetings(name) {
    let output = `Hello ${namn}. You have very big ears.`
    return output;
}
let namn = "Nihöl";
let antal = 10;

for (let i = 0; i < antal; i++) {
    console.log(greetings(namn))
}
*/

/*
function greetings(name, lastname) {
    let output = `Hello ${namn} ${efternamn}! Ville bara säga att du är snygg och har en fin snopp. Hälsningar JavaScript6.`
    return output;
}
let namn = "Tobias";
let efternamn = "Ståhl";
let antal = 10;

for (let i = 0; i < antal; i++) {
    console.log(greetings(namn, efternamn));
}
*/

/*//Funktionen för åldern/medelvärdet.
function medelvärde(tal1, tal2) {
    let summa = tal1 + tal2;
    let kvot = summa / 2;
    return kvot;
}
function fullName(fName, lName) {
    return `${fName} ${lName}`;
}
*/

/*function greetings(name, lastname) {
    let output = `Hello ${namn} ${efternamn}, You are gullig.`
    return output;
}
let namn = "Danyeal";
let efternamn = "Mateen";
let antal = 7;

for (let i = 0; i < antal; i++) {
    console.log(greetings(namn, efternamn));
}
*/

/*function reusableFunction() {
    console.log("Hi World");
}
reusableFunction();
*/

function functionWithArgs(num1, num2) {
    console.log(num1, num2)
}
functionWithArgs(5, 5);
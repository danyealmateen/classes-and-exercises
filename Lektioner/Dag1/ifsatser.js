/*// Deklarera en variabel
let x = 10;
let firstName = "Marcus";
let lastName = "Hansson";
let age = 33;
//Boolean variabel
let check = true;

//If-sats, jämför x med 5
if ( x == 5 ) {
    console.log("x är lika med 5");
} else { 
    console.log("x är INTE lika med 5");

}

if ( x == 6 ) {
    console.log ( " x är lika med 6 ");
}

//Nestled if-statements
if ( firstName == "Marcus" && lastName == "Henriksson") {
    console.log("Hejsan Marcus Henriksson");
} else if (lastName == "Henriksson" || firstName == "Marcus") {
    console.log("Ditt namn är Marcus ELLER ditt efternamn är Henriksson");
}
else {
    console.log("Du är inte något vi känner.");
    check = false;
    //Check ändrar sitt värde i detta block
    //Om vi inte kommer in i detta block blir värdet oförändrat
}

//Nytt if-block
//X får INTE vara lika med 10 och age MÅSTE vara 30 eller högre

if ( x != 10 && age >= 30) {
    console.log("x är inte 10 och age är 30 eller större");
} else if (check) {
    console.log("Check är fortfarande True");
    if (x < 10 ) {
        console.log("X är större än 10");
    } else {
        console.log("X är inte större än 10");
    }
}

//Random Example med Math
//let rand = Math.random();
//console.log(rand);

if (Math.random() > 0.5) console.log("ÖVER");
else 
   console.log("UNDER");
   */

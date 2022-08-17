//Definiera en funktion som skriver ut ett meddelande i konsolen
function myFunction() {
//Skriv ut ett meddelande
console.log("Inuti Funktionen");
}

//Funktion som informerar om input är 1 eller 2
function oneOrTwo(input) {
    if (input == 1) {
        console.log("Input värdet är 1");
    } else if (input == 2) {
        console.log("Input värdet är 2");
    } else {
        console.log("INVALID INPUT");
    }
}

//Funktion som returnerar ett hälsningsmeddelande
function sayHey(name) {
    return `Hejsan ${name}`;
}

//Funktion add() som summerar 2st parametrar
//Båda parametrar har default värde
function add(tal1 = 0, tal2 = 0) {
    //Validering av inputs
    //isNaN() Text = True , Number = False
    if ( !isNaN(tal1) && !isNaN(tal2) ) {
    //Integer
        let summa = tal1 + tal2;
        return summa;
} else return 0;


    
}
//function biggestNumber () som returnerar det största numret
function biggestNumber(tal1, tal2) {
    if (tal1 > tal2) return tal1;
     else return tal2;
}

//Exempel på undefined
let car;
if (!car) {
    car = null;
    console.log("Car Undefined");
}

//Skapar 2 st funktioner som skall anropa varandra (uppgift2övning)
function myFunc1(value) {
    let x = value + 2;
    let y = myFunc2(value);

    return biggestNumber(x, y);
}

function myFunc2(value) {
    return value * 2;
}

//_-------------------------------------------------

//Anropar myFunction 10 gånger
for(let i =0; i < 10; i++) {
    myFunction ();
}

//Anropar oneOrTwo()
oneOrTwo(1);
oneOrTwo(2);

let number1 = 1;
oneOrTwo(number1);

for (let i = 0; i < 3; i++) {
    oneOrTwo(i);
}

//Anropar funktion sayHey
console.log ( sayHey("Marcus")) ;

//Anropar funktionen add()
let summa = add(3, 2);
console.log(summa);
console.log( add(5, "7") );

//Anropar funktion biggestnumber()
let biggest = biggestNumber( biggestNumber(4,8), add(10, 5));
console.log(biggest);

//Anropar funktionen add () med olika antal parametrar
console.log ( add(13,10) );

//Anropar funktionen myFunc1() med en for loop
for (let i = 0; i < 5; i++) {
    console.log( `Returvärdet av ${i} är ${myFunc1(i)}` );
}


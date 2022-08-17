function countdown(x) {
    //Exit condition
    if (x <= 0) return;

    //Går in i countdown
    document.getElementById("output1").innerHTML += `<div>Värdet av x är ${x}</div>`

    //Recursiv anrop
    countdown(x - 1);

    //Backar ut igen
    document.getElementById("output1").innerHTML += `<div>På väg ut ur funktion med x är ${x}</div>`;
}

//n är antalet rader i pyramiden
function pyramid(n) {
    //Base Condition
    if(n == 0) return 0;
    return pyramid(n - 1) + n;
}
//Factorial exempel 5! = 5*4*3*2*1 
function factorial (n) {

    //Base condition
    if(n == 1) return 1;

    return n * factorial (n - 1);

}

//countdown(10);
let antalRader = 10;
//Skriv ut resultatet av pyramid till en Div tag
document.getElementById("output1").innerHTML = `I en pyramid med ${antalRader} antal rader finns det ${pyramid(antalRader)} antal klossar`;

let factorialNumber = 1;
//Skriv ut factorial av ett tal
document.getElementById("outputFactorial").innerHTML = `Factorial av ${factorialNumber} är ${factorial(factorialNumber)}`;
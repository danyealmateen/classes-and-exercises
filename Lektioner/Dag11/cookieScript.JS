/*//Hämta befintligt värde
let getCookie = document.Cookie;

console.log(getCookie);

//Skapa ett nytt värde att spara till .cookie
let newValue = "firstName=Marcus; expires=Thu, 14 April 2022 12:00:00 UTC"

//Sparar värde till cookie
document.Cookie = newValue;

console.log(document.Cookie);
*/

document.Cookie = "";

//Funktion för att hämta värden och spara den i cookie-attribut
function saveCookie () {
    //Inhämta input fält
    let inputs = document.getElementsByTagName("input");

    //Namn har index 0 
    //Age har index 1

    let myCookie = `;Firstname =${inputs[0].value}`;
    document.Cookie += myCookie;

    myCookie = `;Age =${inputs[1].value}`
    document.Cookie += myCookie;

    console.log(document.Cookie);
}

//Funktion för att hämta och skriva ut Cookie
function getCookieInfo() {
    //Hämta cookie data
    let cookieString = document.Cookie;

    //Dela upp strängen till en array, där varje element är ett par.
    let arrCookie = cookieString.split(";");

    //console.log(arrCookie);
    let output= "";

    //ForEach-loop för att gå igenom alla par
    arrCookie.forEach( (kaka, index) =>{
        if (index != 0) {

            let arrKaka = kaka.split("=");

            output += `<div>${arrKaka[0]} har värdet ${arrKaka[1]}</div>`;
        }
    });

    //Skriver output till div
    document.getElementById("cookieOutput").innerHTML = output;
}
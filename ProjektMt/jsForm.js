let inputName = document.getElementById("inputName")
let inputNumber = document.getElementById("inputNumber")
let inputPassword = document.getElementById("inputPassword")
let errorOutput = document.getElementById("errorOutput");
let messages = document.getElementById("messages");
let form = document.getElementById("form");
let demo = document.getElementById("demo");
let submitBtn = document.getElementById("submitBtn");
let bdayBtn = document.getElementById("bdayBtn");
let arrNames = [];
let marcusData = "Marcus 33";
let personArray = [];
let paraHello = document.getElementById("paraHello");
let bdayMessages = document.getElementById("bdayMessages");

//Lyssnar efter ett click event från knappen submitBtn
submitBtn.addEventListener("click", (event) => {

    //Om inputName är en tom sträng, skriv ut "Name is required".
    if (inputName.value === '') {
        errorOutput.innerText = "Name is required";
        return false;
    }

    //Om inputNumber inte är en siffra, skriv ut texten 'Age is required'.
    if (inputNumber.value === '') {
        errorOutput.innerText = "Age is required";
        return false;
    }
    //Om inputPassword inte är Grit skickas det ut ett error meddelande
    if (inputPassword.value !== 'Grit') {
        errorOutput.innerText = 'Wrong Password';
        return false;
    } else errorOutput.innerText = 'Access Granted';

    //Pushar in värden från inputName och inputNumber
    arrNames.push(`${inputName.value} ${inputNumber.value}`)

    //Pushar in värdet Marcus som också skrivs ut varje gång / AVKOMMENTERAD!
    /*arrNames.push(marcusData);*/

    //ForEach loop som går igenom arrayen en gång, names representerar ett element i arrayen
    let output2 = "";

    arrNames.forEach(names => {

        //Lägger till hälsningsfrasen + elementet i arrayen till output += som är en tom sträng
        output2 += `Hello ${names}<br>`;
    });

    paraHello.innerHTML = output2;
    //If else sats där man skriver ut texten legal / not legal beroende på om åldern är under eller över 18
    let isLegal = false;

    if (inputNumber.value < 18) {
        isLegal = false;
        messages.innerhtml = `${inputName.value} Not Legal`;

    } else {
        isLegal = true;
        messages.innerHTML = `${inputName.value} Legal`;
    }

    class Person {
        constructor(namn, ålder, legal) {
            this.namn = namn;
            this.ålder = parseInt(ålder);
            this.legal = legal;
        }
        toString() {
            return `${this.namn} ${this.ålder} ${this.legal}`
        }
        //Metoden birthday som ska plussa ålder med 1.
        birthday() {
            this.ålder += 1
        }

        //Metod legal
        /*legal() {
            if (this.age < 18)
                this.legal = 'olaglig';
        }*/

    }
    let namn = document.getElementById("inputName").value
    let ålder = document.getElementById("inputNumber").value
    let legal = "";

    if (isLegal) {
        legal = "Legal"
    } else {
        legal = "not Legal"
    }

    //Nytt objekt som ska skapas
    let nyttObjekt = new Person(namn, ålder, legal)
    personArray.push(nyttObjekt);
    output = "";

    updatePersons();
    //Console log för att kontrollera allt
    console.log(nyttObjekt);
    console.log(arrNames);
});

//Kallar på metoden updatePersons
function updatePersons() {
    let output = "";

    for (let i = 0; i < personArray.length; i++) {
        output += `${personArray[i].toString()}<br>`
    }
    demo.innerHTML = output;
}

//Function som gör det möjligt att klicka på b-dayknappen och aktivera funktionen som plusar age med +1.
function birthday() {
    personArray.forEach(person => {
        person.birthday()
    })
    updatePersons();
}









//Funktion för att returnera samtliga attribut från objekt i en array
function getAttributes(arrObj) {
    let output = "";
    //Skriv ut samtliga attribut för alla objekt av klassen Person
    arrObj.forEach( (obj) => {
    
        //Starta en ForIn loop för person
        for(let x in obj) {
    
            //Skriv ut attribut namn och värde till output
            output += `<div>${x}: ${obj[x]}</div>`
    
        }
        //Radbrytning mellan personer
        output += "<br>";
    
    });
    //Skriv ut output
    return output;
}


//Skapa ett objekt av klasssen Person
let person1 = new Person("Maria", "Hansson", 45);

//Skapa ett till objekt av klassen Person
let person2 = new Person("Sebastian", "Karlsson", 22);

//Skapa ett objekt av klassen Anställd
let worker1 = new Anställd("Cihan", "Yasar", 38, 40000);

console.log(person1.firstName);
console.log(person1.lastName);

console.group(person1.fullName());

console.log(person2.fullName());

console.log(worker1.fullName());
console.log(worker1.work());

//_----------------------------------------------------------

let persons = [];
persons.push(person1, person2);
persons.push( new Person("Marcus", "Henriksson", 33)  );

let workers = [];
workers.push( new Anställd("Angelica", "Bertilsson", 26, 26000),
              new Anställd("Cesar", "Dhjort", 28, 27500),  
              new Anställd("Erik", "Franzén",6, 32000));

/*
//Exempel på 2 pekare till samma objekt
person1.age = 55;
console.log(persons[0].age);
*/

//person1.eyeColor = "Blue";
person1["eyeColor"] = "Green";
console.log(person1["eyeColor"]);

person1.height = 181;

persons.forEach( (person) =>  {
    console.log ( person.fullName() );
} );


//Exempel på ForIn loop där person1's attribut skrivs ut.
for (let x in person1) {
    //x = attributets namn
    //person1[x] = attributets värde
    console.log(`${x}: ${person1[x]}`);
}

//Skriver ut attributen till alla personer och alla anställda
document.write(getAttributes(persons));
document.write(getAttributes(workers));
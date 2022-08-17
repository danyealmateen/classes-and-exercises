//Skapa 2 st personer
let person1 = new Person("Marcus", 33);
let person2 = new Person("Birgitta", 35);

//Person1 och Person2 parar sig
person1.marriage(person2);

//Logga varandras partner
console.log(person1.partner);
console.log(person2.partner);

//Nå Person2's namn på 2 olika sätt
person2.setName("David");
console.log(person1.partner.getName());

//Person2 byter namn
person2.setName("David");
console.log(person1.partner.getName());

console.log(`${person1.getName()} är gift med ${person1.getPartner().getName()}`);

person1.setSocSecNumber("8585858585");

console.log( `${person1.getName()} SSN är ${person1.getSocSecNumber()}` );

console.log(person2);

//Skapa bil
let myCar1 = new Car("Volvo", "2015");
let myCar2 = new Car("Saab", "2011");
let myCar3 = new Car("Hondai Atos", "2003");

console.log( `${Car.getCount()} st bilar har skapats.`)

//Skapa en array av objekt av klassen Car

let cars = [myCar1, myCar2, myCar3];

//ForEach med utomstående array
cars.forEach((car) => {
    console.log (car.carModel);

});

//Foreach med static array
Car.cars.forEach((car) => {
    console.log (car.carModel);
});
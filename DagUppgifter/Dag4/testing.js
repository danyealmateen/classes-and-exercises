//Klassen Animals
class Animals {
    //Konstruktor
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }
    toString() {
        return `Detta djuret är en ${this.type} och heter ${this.name} är ${this.age} gammal`
    }
}
//Tre stycken nya objekt
let animalOne = new Animals("Nelson", 13, "Häst");
let animalTwo = new Animals("Nelsolina", 15, "Kossa");
let animalThree = new Animals("Dany", 33, "Björn");
//Array där alla 3 sparas
let arrAnimals = [animalOne, animalTwo, animalThree];

arrAnimals.forEach(animals => {
    console.log(arrAnimals.toString());
});


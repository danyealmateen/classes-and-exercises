//Skapar klassen Animals
class Animals {

    //Skapar konstruktorn och initierar objekt
    constructor(animalName, animalType, animalAge) {
        this.animalName = animalName;
        this.animalType = animalType;
        this.animalAge = animalAge;
    }
    //Skapar en metod som ska returnera en text-sträng med en beskrivning
    toString() {
        return `Detta djuret är en ${this.animalType} och heter ${this.animalName} och är ${this.animalAge} gammal.`
    }

}
//Nya objekt av classen Animals.
let djur1 = new Animals("Marco", "Schäfer", 5);
let djur2 = new Animals("Nelson", "Chihuahua", 10);
let djur3 = new Animals("Schnouzi", "Chigullig", 15);

//En array med classen Animals objekt
let arrAnimals = [djur1, djur2, djur3];

//For each loop som ska gå igenom arrayens alla element en gång och skriva ut det
arrAnimals.forEach((djuren) => {
    console.log(djuren.toString());
});




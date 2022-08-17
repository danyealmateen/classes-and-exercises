class Animal {
    constructor(name, age, species) {
        this.nameAnimal = name;
        this.ageAnimal = age;
        this.speciesAnimal = species;
    }
    description() {
        return `Name: ${this.nameAnimal}, Age: ${this.ageAnimal}, Species: ${this.speciesAnimal}`
    }
}

let paragraph;
paragraph = document.getElementById("prgrph");
paragraph.innerHTML = " "

let animalArray = [];
animalArray.push(new Animal("Rico", 4, "dog"),
    new Animal("Kalle", 13, "cat"),
    new Animal("Alvida", 13, "cat"));

animalArray.forEach(animal => {
    paragraph.innerHTML += animal.description() + "<br/>"
});

////////////////////////////////////

class Calculator {
    constructor(num1, num2) {
        this.number1 = num1;
        this.number2 = num2;
    };
    multiply() {
        return this.number1 * this.number2;
    }
    subtract() {
        return this.number1 - this.number2
    }
    divide() {
        return this.number1 / this.number2
    }
    add() {
        return this.number1 + this.number2
    }
};
console.log(new Calculator(3, 4).multiply())
console.log(new Calculator(3, 4).subtract())
console.log(new Calculator(3, 4).divide())
console.log(new Calculator(3, 4).add())
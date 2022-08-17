//Klass Djur
class Djur {

    //Konstrukor
    constructor(name, age, art) {
        this.name = name;
        this.age = age;
        this.art = art;
    }

    //Metod toString(), returnerar en text-beskrivning av djuret
    toString() {
        return `Detta djuret är en ${this.art} och heter ${this.name}. Den är ${this.age} år gammal.`;
    }
}

//Klass Calculator
class Calculator {

    //Addition
    add(tal1, tal2) {
        return tal1 + tal2;
    }

    //Subtraktion
    sub(tal1, tal2) {
        return tal1 - tal2;
    }

    //Multiplikation
    multi(tal1, tal2) {
        return tal1 * tal2;
    }

    //Division
    divide(tal1, tal2) {
        //Kontrollera att tal2 inte är 0
        if (tal2 == 0) return 0;
        return tal1 / tal2;
    }

    inputArray(arrObj, op) {
        //Kontroll att arrObj är en Array
        if (!this.#arrCheck(arrObj)) return;

        return this.#arrCalculate(arrObj, op);
    }

    #arrCheck(arrObj) {
        if (Array.isArray(arrObj)) return true;
        else return false;
    }

    #arrCalculate(arrObj, op) {
        //Skapar en uträkning med array och vald op
        let summa = 0;

        arrObj.forEach((number) => {

            //Switch Case
            switch (op) {
                case "+":
                    summa += number;
                    break;
                case "-":
                    summa -= number;
                    break;
                case "*":
                    summa *= number;
                    break;
                case "/":
                    summa /= number;
                    break;
            }

        });

        return summa;
    }
}

//Initera objekt av Djur
let djur1 = new Djur("Elvis", 15, "Katt");
let djur2 = new Djur("Belman", 12, "Hund");
let djur3 = new Djur("Gördis", 7, "Katt");

//Initiera en Array
let animals = [djur1];
animals.push(djur2, djur3);

//Loppa igenom Arrayen
animals.forEach((animal) => {
    //SKriv ut beskrivning
    console.log(animal.toString());
});

//Skapa objekt av calculator
let calc = new Calculator();

console.log(calc.add(3, 6));
console.log(calc.add(calc.multi(4, 6), calc.divide(20, 0)));
//Anropa add(arrObj);

//Skapa en Array med nummer
let numberArray = [6, 5, 4, 3, 2, 1];

console.log(calc.inputArray(numberArray, "+"));
console.log(calc.inputArray(numberArray, "-"));
console.log(calc.inputArray(numberArray, "*"));
console.log(calc.inputArray(numberArray, "/"));
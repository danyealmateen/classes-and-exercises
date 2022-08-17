//Klass anställd, ärver från Klassen Person
class Anställd extends Person  {

    //Konstruktor
    constructor(firstName, lastName, age, lön) {

        //Anropa konstruktorn i Bas-klassen
        super(firstName, lastName, age)
        this.lön = lön;
    }

    //Work
    work() {
        return `Nu arbetar ${this.firstName}`;
    }

}
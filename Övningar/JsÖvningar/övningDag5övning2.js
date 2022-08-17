class Person {

    constructor (firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    greetings () {
        return ` Hej jag heter ${this.firstName} ${this.lastName} och är ${this.age} gammal.`
    }
    
}   
    namn = new Person("Sven","Svensson",2)
    efternamn = new Person ("Kalle", "Kallesson", 15)
    age = new Person ("Martina", "Martinasson", 3)

    console.log(namn.greetings());
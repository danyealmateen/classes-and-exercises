//Class Person
class Person {
//Innehåll

//Konstruktor
constructor(firstName, lastName, age) {
    //Denna metod anropas alltid när ett nytt objekt skapas
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    }
    //Metod FullName()
    //Returnerar det fulla namnet
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
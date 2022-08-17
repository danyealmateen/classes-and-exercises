class Person {

    constructor (firstName, lastName, age, otherPerson) {
  //Attribut
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
 
  }
  //Metod
  greetings () {
  return `Heter ${this.firstName} ${this.lastName} är ${this.age} år gammal.`;
  }
  //Metod
  helloToYou(otherPerson) {

  //Hämta andra personens namn 
  let otherPersonFirstName = otherPerson.firstName;

  return `Hej ${otherPersonFirstName} mitt namn är ${this.firstName}`
  }
  
}
  //Instans//Objekt
  charOne = new Person ("Adam", "Adamsson", 55);
  charTwo = new Person ("Bertil", "Bertilsson", 67);
  charThree = new Person ("Cesar", "Cesarsson", 33);


  console.log(charOne.greetings());
  console.log(charOne.helloToYou(charTwo));
  console.log(charTwo.helloToYou(charOne));






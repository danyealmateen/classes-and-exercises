    //Class Person
    class Person {

        #socSecNumber;
        #name;

    //Konstruktor
    constructor(name, age) {
        this.#name = name;
        this.age = age;
        this.partner = null;
        this.#socSecNumber = "0123456789";
    }

    //Get metoder

        getSocSecNumber() {
        let output = this.#socSecNumber.substring(0,6);

        output += "****";

        return output
    }


        getName() {
        return this.#name.toUpperCase();
    }
    


    //Set metoder
        setSocSecNumber(number) {
            if (number.length != 10) return;

            if(isNaN(number)) return;

            this.#socSecNumber = number;
        }

        setName(name) {
            if (name == null) return;

            if (name == "Voldemort") return;
            this.#name = name;
        }




    //Marriage, skapar en relation med partner
    marriage(partner) {
        //Skapa en relation till 'partner'
        this.partner = partner;

        //Skapa en relation tillbaka
        this.partner.partner = this;
    }

    getPartner() {
        if (this.partner) return this.partner;
        else return "Unmarried";
    }

}
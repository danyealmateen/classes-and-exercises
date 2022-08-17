//Klass Car
class Car {

    //Static attribut
    static #count = 0;

    //Static array av objekts
    static cars = [];

    //Konstruktor
    constructor(carModel, year) {
        this.carModel = carModel;
        this.year = year;

        //Öka upp det static attribut Count med +1
        Car.#count++;

        //Inkludera det nya objektet till static cars
        Car.cars.push(this);
    }

    //Statisk metod
    static drive() {
        return "Wroooom!";
    }
    static getCount() {
        return Car.#count;
    }
}
class Petronas {
    constructor(engine, wheels, wing) {
        this.engine = engine;
        this.wheels = wheels;
        this.wing = wing;
    } 
    hamilton() {
        return `${this.engine} ${this.wheels} ${this.wing}`
    }
}
let engine = new Petronas ("V8", "Hamilton", "P1");
console.log(engine.hamilton());
//Uppgift 1

let namn = "Dany";
let antal = 5;

function greeting(namn) {
console.log(`Hejsan ${namn}`)
}
for(let i = 0; i < 5; i++) {
 greeting(namn)
}


//Uppgift 2

function medelvärde(tal1, tal2) {
return ((tal1+tal2) /2)
}
console.log(medelvärde(1, 3));

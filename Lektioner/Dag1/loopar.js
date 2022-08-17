/*//For Loop
for(let i = 0; i < 10 ; i++) {
    console.log(`${i+1}. Hejsan!`);
}
//Deklarerar en array
//let count = 1;
let colors = ["Red", "Blue", "Yellow", "Green", "Purple", "Black", "White", "Pink"];

for (let i = 0; i < colors.length + 2; i++) {
    console.log(colors[i]);
}
*/

/*//While-Loop
let x = 10;

while(x < 15) {
    x++;
    console.log("Inuti While Loop");
}
while (Math.random() < 0.9) {
   document.write("Hello World");
}
*/

/*//DoWhile-loop
do {
    console.log("InutiDoWhile-Loop. Detta meddelande visas alltid minst en gång.");
} while ((Math.random() < 0.6));
*/

/*// Exempel på Keyword Break
let count = 0;
while(true) {
    //Calculate count
 if(count == 0) {
     count = 1;
 } else {
     count *= 2;
 }
    console.log(count);
    //Check count
    if (count > 10000 ) {
        break;
    }
}


//ForEach loop

let animals = ["Dog", "Cat", "Bird", "Beaver", "Mouse", "Fox"];

animals.forEach((animal, position) => {
    //What sound does this animal mage?
    if(animal == "Dog") {
        console.log("Dog says Woof");
    } else if (animal == "Bird") {
        console.log("Bird says tweet");
    } else if (animal == "Mouse") {
        console.log("Mouse says Squeak");
    } else {
        console.log(`Dont know what sound a/an ${animal} makes, at position ${position}.`);
    }
});
*/
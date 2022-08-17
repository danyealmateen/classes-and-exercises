//Initiera en Array
let arr2D = [];
let value = 1;

//Starta upp den ytter loopen
for (let i = 0; i < 3; i++) {
    arr2D[i] = [];
    for (let j = 0; j < 10; j++) {
        arr2D[i][j] = value;
        value++;
    }
}

console.log(arr2D);

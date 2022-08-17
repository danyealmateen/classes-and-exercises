//Inhämtar inputfältet från inputName
let inputName = document.getElementById("inputName")

//Funktion som ska trycka in värdet från inputfältet-name in i arrayen varje gång man klickar på knappen
function createNames() {

    //Arrayen
    let arrNames = ["Cesar", "Adam", "Bertil", "David"]

    //Pushar in värdet från inputName in till arrayen arrNames
    arrNames.push(inputName.value)

    //Sorterar värdena i bokstavsordning
    arrNames.sort()

    arrNames.forEach(namnen => {
    });
    console.log(arrNames);
}



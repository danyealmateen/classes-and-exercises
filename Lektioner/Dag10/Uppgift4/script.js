//Uppgift 4
let myNames = ["Bertil", "Cesar", "Adam", "David"];
myNames.sort();
console.log(myNames);

/*document.getElementById("nameOne").innerText = myNames[0];
document.getElementById("nameTwo").innerText = myNames[1];
document.getElementById("nameThree").innerText = myNames[2];
document.getElementById("nameFour").innerText = myNames[3];
*/
//////////////////////////////////////////////////////////////////////////////////



//Uppgift 5
function logName() {

let getName = document.getElementById("textField").value
let output = document.getElementById("outputNames")

output.innerText = "";

myNames.forEach(namnen =>{

output.innerText += namnen;

});


myNames.push(textField.value);
console.log(myNames);

}


/*//Exempel på att skriva ut istället 

let pList = document.getElementsByTagName ("p");

for (let i = 0; i < pList.length; i++) {
    pList[i].innerText = arrNames[i];
}
*/

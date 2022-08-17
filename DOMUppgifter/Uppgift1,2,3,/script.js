//Uppgift 1
function generateMessage1() {
    output = "Hej Axel";
    return document.getElementById("output").innerHTML = output; 
}

function generateMessage2() {
    output2 = "Hej Jingles";
    return document.getElementById("output").innerHTML = output2;
}

function generateMessage3() {
    output3 = "Hej Dany";
    return document.getElementById("output").innerHTML = output3;
}

//Uppgift 2
function generateSum() {

    input1 = document.getElementById("input1").value
    input2 = document.getElementById("input2").value
    
    parseInt(input1, input2)
    return document.getElementById("output3").innerText = parseInt(input1) + parseInt(input2);

}


//Uppgift 3 
function textOrNumber() {
    //Hämta värde från inputfält
    let input = document.getElementById("textOrNumberInput").value;
    

    //Använda metoden isNaN för att se om input är text eller nummer
    if(isNaN(input)) {
      document.getElementById("textOrNumberOutput").innerText = "Det inmatade värdet är en text";
    } else {
      document.getElementById("textOrNumberOutput").innerText = "Det inmatade värdet är ett nummer";
    }

}
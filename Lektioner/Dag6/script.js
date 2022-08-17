 // Skriv ut Hello World till div Output
 document.getElementById("output").innerText = "Hello World";

 //Funktion för button-press
 function buttonPressed() {
     alert("Hello World");
     document.getElementById("output").innerText = "Du har klickat på knappen";

     //Detta är en dålig idé
     // document.write("ZugZug");
 }

 function sumTwoNumbers() {
     //Fördefinierade värden
     //let x = 6; y = 11;
     if ( !validateSumTwoNumbers()) return;

     //Hämta värden från input fält
     let x = parseInt( document.getElementById("inputNummer1").value);
     let y = parseInt( document.getElementById("inputNummer2").value);
     
     /*//Konvertera sträng till nummer
     x = parseInt(x);
     y = parseInt(y);
     */
     

     //Beräkna summa.
     let summa = x + y;

     //Skapa en sträng
     let output = `${x} + ${y} = ${summa}`;

     //Skriv ut sträng i en Div-tag
     document.getElementById("numberOutput").innerText = output;


 }

 function pasteWord () {
     //Hämta text värdet från inputfält
     let input = document.getElementById("inputText").value;

     //Mata ut värdet till Div-tag.
     document.getElementById("output").innerText = input;
 }

 function validateNumber(input) {
     //Validering av nummer fält

     //Check variabel
     let check = true;

     //if sats för att se om input är tomt.
     if (input.value == "") {
         check = false;
         document.getElementById("nummerError").innerText = "Ett av fälten är tomma";
     }

     //Efter all validering så kollar vi värdet av variabel Check
     if (check) {
        document.getElementById("nummerError").innerText = ""; 
        return true;
     } else return false;

 }

 function validateSumTwoNumbers() {
     //Skapa check variabel
     let check = true;

    //Utför validering av NummerInput1
    if ( !validateNumber(document.getElementById("inputNummer1")) ) {
        //Gör check till false
        check = false;
    }

       //Utför validering av NummerInput1
       if ( !validateNumber(document.getElementById("inputNummer2")) ) {
           //Gör check till false
           check = false;
       }
       return check;
 }
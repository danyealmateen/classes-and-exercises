//Uppgift 11 av DOM-uppgifter med Marcus
let listOfDivs = document.getElementsByTagName("div");

//For loop för att anropa varje div-tag
for (let i = 0; i < listOfDivs.length; )  {
    
    //Anropar vid varje DIV och skriver ut ett meddelande till den.
    listOfDivs[i].innerText = `Detta är div ${i} `;
}
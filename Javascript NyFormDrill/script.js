//Inhämtar värdet från inputfältet för name1 i HMTL.DOC.
let name1 = document.getElementById('name1')

//Inhämtar värdet från inputfältet för age1 i HTML.DOC.
let age1 = document.getElementById('age1')

//Inhämtar värdet från inputfältet för password1 i HTML.DOC.
let password1 = document.getElementById('password1')

//Inhämtar och skriver ut värdet från div-classen 'error' i HTML.DOC.
let error = document.getElementById('error')

//Inhämtar värden från form i HTML.DOC.
let form = document.getElementById('form')

//Inhämtar värdet från submit-knappen.
let submit = document.getElementById('submit')

let paraGraf = document.getElementById('paraGraf')

//En array som sparar värdet från name1.
let nameInput = [];

//Pushar in värdet i Valuemarcus till arrayen nameInput
valueMarcus = "Marcus", 33;
nameInput.push(valueMarcus)

/*//En tom array där error meddelanden kommer pushas in från respektive If sats.
let messages = []*/


//Ett event som lyssnar och reagerar efter vad som ska ske när man trycker på submit knappen.
form.addEventListener('submit', (e) => {

    //Hindrar hemsidan från att refresha    
    e.preventDefault()



    //Om name1 är en tom sträng dyker en alert box upp med ett felmeddelande och avslutar skriptet.
    if (name1.value === '') {
        alert('Name is required')

    }

    //Om age1 är en tom sträng dyker en alert box upp med ett felmeddelande och avslutar skriptet.
    if (age1.value === '') {
        alert('Age is required')

    }
    //Om password1 inte är 'Grit' dyker en alert box upp med ett felmeddelande och avslutar skriptet.
    if (password1.value !== 'Grit') {
        alert('Wrong password')

        //Annars pushar den ut ett meddelande 'Access Granted'' till error diven i index.HTML.
    } else {
        error.innerHTML = 'Access Granted'
        /*paraGraf.innerHTML = 'Hello'*/
    }

    //Om värdet i name1 fältet inte är en tom sträng, ska värdet pushas in i arrayen nameInput.
    if (name1.value !== '') {
        valueName = [name1.value]
        nameInput.push(valueName)
        console.log(nameInput)
    }

    paraGraf.innerHTML = "";
    //Går igenom nameInput arrayen's index och skriver ut Hello tillsammans med värdet i namnInput .
    for (let i = 0; i < nameInput.length; i++) {

        if (nameInput[i] !== '') {
            paraGraf.innerHTML += `<p>Hello ${nameInput[i]}</p>`

        }
    }

    //Hindrar hemsidan från att refresha
    e.preventDefault()
})


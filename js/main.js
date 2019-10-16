// ask name user
var inputuser = prompt("Write your name here!");

// set up gretting string
var gretting = "Hi" + inputuser;

// ask surname user
var inputuser = prompt("Write your surname here!");

// chiedo utente il nome
var inputuser = prompt("scrivi qui il tuo nome!!!");

// creao la stringa di saluto in base a nome utente
var saluto = "Ciao " + inputuser;

// chiedo età utente
var eta = prompt("quanti anni hai? inserisci un numero");

// calcolo anno di nascita
var annonascita = 2019 - eta;

// creo la stringa di output finale
var outputfin = saluto + " allora sei nato nel: " + annonascita;

//creao stringa per output anno di nascita
// var annonascita = saluto + " allora sei nato nel: " + (2019 - eta);

// document.writeln(annonascita);


// seleziono elemento html in cui fare output
var htmlElement = document.getElementById('mioid');

// // output finale su elemnto selezionato
htmlElement.innerHTML = outputfin;

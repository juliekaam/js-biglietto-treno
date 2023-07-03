/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del
 passeggero (con i prompt() in questo caso).
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali,
     per indicare centesimi sul prezzo e questo richiederà un minimo di ricerca.).
Il risultato andrà visualizzato prima in console e poi possibilmente in un apposito elemento <p> 
del mio codice HTML.*/

//acquisizione di informazione dell'utente
let numberOfkilometers = parseInt(prompt("quanti kilometri voresti percorrere?"));
let userAge = prompt("inserisci la tua età: ")

console.log("Tu vorresti percorrere:" + numberOfkilometers);
console.log("Tu hai:" + userAge);

//calcolo del prezzo totale del viaggio
const priceAtkilometer = 0.21
let ticketPrice = numberOfkilometers * priceAtkilometer;

console.log("Il tuo biglietto costa: " + ticketPrice + "€");
let totalTicketPrice;
//applicazione degli sconti
if (userAge <= 21) {

    let discount1 = (ticketPrice *20)/100;
    console.log("Avrai uno sconto di: " + discount1.toFixed(2) + "€");
    totalTicketPrice = ticketPrice - (discount1.toFixed(2));
    console.log  ("il prezzo finale è: " + totalTicketPrice.toFixed(2));
}
else if (userAge >= 65) {

    let discount2 =(ticketPrice *40)/100;

    console.log("Avrai uno sconto di: " + discount2.toFixed(2) + "€");
    totalTicketPrice = ticketPrice - (discount2.toFixed(2));
    console.log ("il prezzo finale è: " + totalTicketPrice.toFixed(2));
} else {
    console.log("Avrai uno sconto di: " + 0 + "€");
     totalTicketPrice = ticketPrice;
    console.log ("il prezzo finale è: " + totalTicketPrice.toFixed(2));
}

//div.innerHTML += "<p> il costo totale del biglietto è : </p>";
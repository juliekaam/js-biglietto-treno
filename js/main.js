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
let numberOfkilometers= prompt("quanti kilometri voresti percorrere?");
let userAge= prompt("inserisci la tua età: ")

console.log( "Tu vorresti percorrere:" +numberOfkilometers);
console.log( "Tu hai:" +userAge);

//calcolo del prezzo totale del viaggio
/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
  return l1 * l2;
}

let risultato1 = area(4, 8);

console.log("Esercizio 1:", risultato1);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let moltiplicatore = 3;

function crazySum(x, y) {
  if (x === y) return (x + y) * 3;
  else return x + y;
}

let risultato2 = crazySum(6, 6);

console.log("Esercizio 2:", risultato2);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(x) {
  const s = 19;
  const risultato3a = Math.abs(x - s);
  if (risultato3a > s) {
    const risultato3b = risultato3a * 3;
    return risultato3b;
  } else {
    return risultato3a;
  }
}

let risultato3 = crazyDiff(90);

console.log("Esercizio 3:", risultato3);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
  boundary = parseInt(boundary);
  if (n >= 20 && n <= 100) return "true";
  else if (n === 400) return "true";
  else return "false";
}

let risultato4 = boundary(50);

console.log("Esercizio 4:", risultato4);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
function epify(str) {
  if (str.starstWith("EPICODE")) {
    return str;
  } else {
    return "EPICODE" + str;
  }
}

let frase = epify("ciao come stai");
console.log("Esercizio 6:", frase);*/

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(n) {
  if (typeof n !== "number" || n < 0) {
    risultato = "Non è un numero";
  } else {
    switch (0) {
      case n % 3:
        risultato = "Numero multiplo di 3";
        break;
      case n % 7:
        risultato = "Numero multiplo di 7";
        break;
      default:
        risultato = "Non è multiplo di 3 o 7";
    }
  }
  return risultato;
}

console.log("Esercizio 7:", check3and7(14));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(stringa) {
  if (typeof stringa === "string") {
    console.log("Esercizio 7:", stringa.split("").reverse().join(""));
  }
}

reverseString("JUVENTUS");

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(stringa) {
  if (typeof stringa === "string") {
    stringaCanc = stringa.slice(1, -1);
    console.log("Esercizio 9:", stringaCanc);
  }
}

cutString("epicode");

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
  let arrayNumeri = [];
  n = Math.floor(Math.random() <= 10);
  if (typeof n === "number") {
    return arrayNumeri.push();
  }
}

giveMeRandom(8);

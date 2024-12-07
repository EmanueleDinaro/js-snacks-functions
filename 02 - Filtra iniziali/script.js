/* Scrivi una funzione che accetti un'array di stringhe e una lettera e
restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
/**
 * This function permits to filter by a letter any words into an array
 * @param {string} words 
 * @param {string} letter 
 * @returns {string}
 */
function filterByLetter(words, letter) {
    const wordsFiltered = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i][0] === letter) {
            wordsFiltered.push(words[i]);
        }
    }
    return wordsFiltered
}

// Invoca la funzione qui e stampa il risultato in console

console.log(filterByLetter(names, "A"));
//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

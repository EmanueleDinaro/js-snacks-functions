/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
/**
 * This function get the first letter of a word and push into an array
 * @param {string} word 
 * @returns {string}
 */
function firstLetter(word) {
    let firstLetter = []
    for (let i = 0; i < word.length; i++) {
        firstLetter.push(word[i][0]) 
    }
    return firstLetter
}


// Invoca la funzione qui e stampa il risultato in console
console.log(firstLetter(names))


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
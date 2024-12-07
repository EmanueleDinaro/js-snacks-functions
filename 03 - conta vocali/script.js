/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

// const word = prompt('inserisci una parola sulla quale vuoi contare le vocali');
const word = 'javascript'

// Dichiara la funzione qui.
function vowelsCount(word) {
    const vowels = ["a", "e", "i", "o", "u"];
    let vowelsInWord = [];
    for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
        if (
            word[i] === "a" ||
            word[i] === "e" ||
            word[i] === "i" ||
            word[i] === "o" ||
            word[i] === "u"
        ) {
        vowelsInWord.push(word[i])
        }
    }
    return vowelsInWord
}

console.log(vowelsCount(word));

// Invoca la funzione qui e stampa il risultato in console

//Risultato atteso se si passa 'javascript': 3 (a, a, i)

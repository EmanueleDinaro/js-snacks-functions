/* Scrivi una funzione che accetti una stringa contenente un nome e
restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

// const userName = 'Mario';
const userName = prompt('Inserisci il tuo nome');


// Dichiara la funzione qui.
function hello(name) {
    const hello = `ciao ${userName}`
    return hello
}




// Invoca la funzione qui e stampa il risultato in console
console.log(hello(userName))


//Risultato atteso se si passa 'Mario': // ciao Mario

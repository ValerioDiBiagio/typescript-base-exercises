// Crea un array di numeri
// Crea un array contenente i numeri da 1 a 5 e stampa ogni numero presente nell'array.

const numeri: number[] = [1, 2, 3, 4, 5];
numeri.forEach(numero => console.log(numero));

// Crea una funzione che restituisca solo i numeri pari.

function numeriPari(numeri: number[]): number[] {
    return numeri.filter(numero => numero % 2 === 0)
}

console.log(numeriPari([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Somma tutti i numeri dell’array [3, 7, 2, 8, 13].



const numbers: number[] = [3, 7, 2, 8, 13];

const som = numbers.reduce((tot, valore) => tot + valore)
console.log(som);






// Crea una tupla con nome ed età e stampa i valori.




// Crea una tupla che rappresenta un libro con titolo, autore, e anno.



// Scrivi una funzione che prende una tupla [nome, età] e stampa una frase.
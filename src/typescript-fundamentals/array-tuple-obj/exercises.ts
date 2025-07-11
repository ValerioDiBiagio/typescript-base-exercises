// Crea un array di numeri
// Crea un array contenente i numeri da 1 a 5 e stampa ogni numero presente nell'array.

const numeri: number[] = [1, 2, 3, 4, 5];
numeri.forEach(numero => console.log(numero));

// Crea una funzione che restituisca solo i numeri pari.

function numeriPari(numeri: number[]): number[] {
    return numeri.filter(numero => numero % 2 === 0)
}

console.log(numeriPari([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Somma tutti i numeri dell’array [3, 7, 2, 8, 15].

const numbers: number[] = [3, 7, 2, 8, 15];

const som = numbers.reduce((tot, valore) => tot + valore)
console.log(som);

// Crea una tupla con nome ed età e stampa i valori.

const person: [string, number] = ["Marco", 34];
person.forEach(persona => console.log(persona));

// Crea una tupla che rappresenta un libro con titolo, autore, e anno.

const libro: [string, string, number] = ["Foto dal futuro", "R. L. Stine", 1994];
console.log(libro);

// Scrivi una funzione che prende una tupla [nome, età] e stampa una frase.

function utente(dati: [nome: string, eta: number]): void {
    console.log(`Mi chiamo ${dati[0]} e ho ${dati[1]} anni`)
}

utente(["Luca", 23]);

// Crea una tupla con coordinate x e y (numeri) e stampale.

const coordinate: [number, number] = [5, 8];
coordinate.forEach(cordinata => console.log(cordinata));

// Crea una tupla con titolo, durata in minuti, e valutazione (numero da 1 a 10).

const film: [string, number, number] = ["Fast and Furious", 148, 10];
console.log(film);

// Scrivi una funzione che prende una tupla [nome prodotto, prezzo] e stampa una frase.

function prodotto(dettagli: [nome: string, prezzo: number]): void {
    console.log(`Il ${dettagli[0]} costa ${dettagli[1]} euro`)
}

prodotto(["Monitor", 235]);

// Crea un array di nomi e stampa "Ciao, nome" per ognuno.

const nomi: string[] = ["Mario", "Matteo", "Sossio"];
nomi.forEach(nome => console.log(`Ciao, ${nome}`));


// Dato l'array [2,8,9,4], crea un nuovo array con ogni numero raddoppiato.

const numBase: number[] = [2, 8, 9, 4];
const numRadd: number[] = numBase.map(numero => numero * 2);

console.log(numRadd);


// Crea un oggetto chiamato auto con due proprietà:
// marca
// anno
// Poi stampa: 
// Auto: Fiat, anno: 2012

const auto: { marca: string, anno: number } = {
    marca: "Fiat",
    anno: 2012
}

console.log(`Auto: ${auto.marca} anno: ${auto.anno}`);

// Crea un oggetto film con le proprietà:

// titolo

// durata
// Poi stampa: Interstellar dura 169 minuti

const movie: { titolo: string, durata: number } = {
    titolo: "Interstellar",
    durata: 169
}

console.log(`${movie.titolo} dura ${movie.durata} minuti`);

// Crea un oggetto utente con le proprietà:

// username
// online
// Stampa:

// se è online → "claudia87 è online"

// altrimenti → "claudia87 è offline"

const user: { username: string, online: boolean } = {
    username: "Claudia87",
    online: true
}

if (user.online) {
    console.log(`${user.username} è online`)
} else {
    console.log(`${user.username} è offline`)
}


// Crea un array di oggetti chiamato persone, dove ogni oggetto ha:

// nome 

// eta 

// Stampa ogni persona nel formato:
// Marco ha 25 anni

const persone: { nome: string, eta: number }[] = [{
    nome: "Stefano",
    eta: 36
},
{
    nome: "Mauro",
    eta: 23
},
{
    nome: "Simone",
    eta: 39
}
]

persone.forEach(persona => console.log(`${persona.nome} ha ${persona.eta} anni`));

// Crea un array di oggetti chiamato prodotti e filtra i prodotti che costano meno di 10 euro e stampali.

const prodotti: { nome: string, prezzo: number }[] = [{
    nome: "ps5",
    prezzo: 499
},
{
    nome: "Pc",
    prezzo: 1230
},
{
    nome: "Penna",
    prezzo: 3
},
{
    nome: "Lavatrice",
    prezzo: 567
},
{
    nome: "Gomma",
    prezzo: 2
}
]

const prodEconomici = prodotti.filter(prodotto => prodotto.prezzo < 10);
console.log(prodEconomici);
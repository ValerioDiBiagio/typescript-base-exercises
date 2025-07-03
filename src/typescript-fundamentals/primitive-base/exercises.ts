// Crea una variabile cibo di tipo string

const cibo: string = "Pasta";
console.log(cibo);


// Crea due numeri e stampane la somma

const numero1: number = 4;
const numero2: number = 3;
const somm: number = numero1 + numero2;
console.log(somm);

// Usa un booleano in una condizione if

const isActive: boolean = true;

if (isActive) {
    console.log("Sono attivo");
}

// Assegna null a una variabile e stampala

const datoNullo: null = null;
console.log(datoNullo);


// Assegna undefined a una variabile e verifica typeof

const indefinita: undefined = undefined
console.log(typeof indefinita);


// Concatena due stringhe con template literals

const saluto: string = "Ciao"
const nomePersona: string = "Valerio"

console.log(`${saluto} ${nomePersona}`);

// Scrivi una funzione che prende due numeri e restituisce la somma

function somma(num1: number, num2: number) {
    return num1 + num2
}

console.log(somma(5, 5));


// Usa typeof su ogni tipo primitivo

const n = 5;
const s = "ciao";
const b = true;
const nullo = null;
const u = undefined;

console.log(typeof n, typeof s, typeof b, typeof nullo, typeof u);


// Tipizza una variabile booleana con const isActive: boolean = true



// Verifica typeof su valori null e undefined
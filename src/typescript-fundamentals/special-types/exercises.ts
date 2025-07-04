// Dichiara una variabile val di tipo any e assegnale un numero, poi una stringa, poi un boolean.

let val: any = 6;
console.log(val);

val = "Ciao";
console.log(val);

val = true;
console.log(val);

// Dichiara una variabile dati di tipo any. Assegnale un numero, poi una stringa, poi un array.

let dati: any = 4;
console.log(dati);

dati = "Come stai?";
console.log(dati);

dati = ["mela", "arancia", "pera"];
console.log(dati);


// Hai un valore dato di tipo unknown. Stampalo in maiuscolo solo se è una stringa.

const dato: unknown = "Mi chiamo Valerio";

if (typeof dato === "string") {
    console.log(dato.toUpperCase());
} else {
    console.log("Non è una stringa");
}


// Mostra l’errore con unknown senza controllo e correggi l'errore

const num: unknown = 6;
// console.log(num.tofixed());

if (typeof num === "number") {
    console.log(num.toFixed());
}
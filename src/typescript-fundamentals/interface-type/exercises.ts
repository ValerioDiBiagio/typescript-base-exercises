// Crea un type chiamato Prodotto con queste proprietà:

// nome

// prezzo

// Crea una variabile di tipo Prodotto e stampala.

type Prodotto = {
    nome: string,
    prezzo: number
}

const p: Prodotto = { nome: "Monitor", prezzo: 250 }
console.log(p);

// Crea un’interface chiamata Persona con:

// nome:

// eta:

// Crea una variabile e stampala con una frase.

interface Persona {
    nome: string,
    eta: number
}

const persona: Persona = { nome: "Mario", eta: 26 }
console.log(`Sono ${persona.nome} e ho ${persona.eta} anni`);
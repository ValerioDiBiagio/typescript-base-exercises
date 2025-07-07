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

// Partendo da interface Persona, crea una nuova interfaccia Studente che aggiunge:

// corso: string

interface Studente extends Persona {
    corso: string
}

const studente: Studente = { nome: "Mario", eta: 26, corso: "Storia" }
console.log(studente);


// Usa type o interface per definire un array di prodotti e stampali.

type Prodotti = {
    nome: string,
    prezzo: number,
    disponibile: boolean
}

const prod: Prodotti[] = [
    { nome: "Divano", prezzo: 550, disponibile: true },
    { nome: "Tv", prezzo: 750, disponibile: true },
    { nome: "Zaino", prezzo: 50, disponibile: false }
]

prod.forEach(prodotto => console.log(prodotto.nome, prodotto.prezzo, prodotto.disponibile));


// Crea un tipo Persona con:

// nome

// eta

// Estendi Persona in un nuovo tipo chiamato Impiegato, che aggiunge:

// ruolo

// stipendio

// Crea una variabile di tipo Impiegato e stampala.

{
    type Persona = {
        nome: string,
        eta: number
    }


    type Impiegato = Persona & {
        ruolo: string,
        stipendio: number
    }

    const Impiegato: Impiegato = { nome: "Marco", eta: 38, ruolo: "Impiegato", stipendio: 1600 }
    console.log(Impiegato);

}
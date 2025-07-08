// Crea una funzione stampaValore che accetta un parametro che può essere stringa o numero e lo stampa.

{
    function stampaValore(valore: string | number): void {
        console.log(valore)

    }

    stampaValore("ciao-123");

}


// Definisci una variabile stato che può essere solo "online" o "offline".


{
    type StatoConnessione = "online" | "offline"

    let stato: StatoConnessione = "online"
    console.log(stato);


    stato = "offline"
    console.log(stato);

}


// Scrivi una funzione segnalaStato che accetta solo "ok" o "errore" e stampa un messaggio diverso in base al valore.


{
    type FornireStato = "ok" | "errore"

    function segnalaStato(stato: FornireStato): void {
        if (stato === "ok") {
            console.log("Lo stato è ok")
        } else if (stato === "errore") {
            console.log("C'è un erroe!")
        }
    }

    segnalaStato("ok")
    segnalaStato("errore")

}

// Definisci un type chiamato RuoloUtente, che può essere solo uno di questi valori letterali:
// "admin", "user", "guest"

{
    type RuoloUtente = "admin" | "user" | "guest"

    let ruolo: RuoloUtente = "admin"
    console.log(ruolo);

    ruolo = "user"
    console.log(ruolo);

    ruolo = "guest"
    console.log(ruolo);

}


// Crea un type chiamato Utente, con le seguenti proprietà:
// nome
// ruolo



{
    type Utente = {
        nome: string,
        ruolo: string
    }

    let p: Utente = {
        nome: "Luca",
        ruolo: "impiegato"
    }

    console.log(p)
}


// Scrivi una funzione verificaAccesso che accetta un oggetto di tipo Utente
// e stampa un messaggio diverso a seconda del ruolo.


{
    type Utente = {
        nome: string,
        cognome: string,
        ruolo: string
    }

    let u: Utente = {
        nome: "Luca",
        cognome: "Rossi",
        ruolo: "impiegato"
    }

    console.log(u);

    function verificaAccesso(p: Utente): void {
        if (p.ruolo === "impiegato") {
            console.log("Il suo ruolo è impiegato")

        } else {
            console.log("Il suo ruolo non è l'impiegato")
        }

    }

    verificaAccesso(u)
}

// Crea una funzione calcolaSconto che accetta o:

// un numero (percentuale)

// o la stringa "nessuno"

// Se è un numero, calcola lo sconto su un prezzo. Se "nessuno", torna il prezzo intero.
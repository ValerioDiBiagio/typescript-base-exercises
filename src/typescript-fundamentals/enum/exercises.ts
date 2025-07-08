// Crea un enum chiamato Giorno

// Contiene: Lunedi, Martedi, ..., Domenica

// Stampa Giorno.Venerdi

{
    enum Giorno {
        Lunedi,
        Martedi,
        Mercoledi,
        Giovedi,
        Venerdi,
        Sabato,
        Domenica
    }

    console.log(Giorno.Venerdi);

}


// Crea un enum LivelloAccesso con:

// Utente = 1, Moderatore = 5, Admin = 10

// Scrivi una funzione che prende un valore LivelloAccesso e stampa un messaggio in base al livello

{

    enum LivelloAccesso {
        Utente = 1,
        Moderatore = 5,
        Admin = 10
    }

    function livello(l: LivelloAccesso) {
        if (l === LivelloAccesso.Utente) {
            console.log("Questo è il livello Utente")
        } else if (l === LivelloAccesso.Moderatore) {
            console.log("Questo è il livello Moderatore")

        } else if (l === LivelloAccesso.Admin) {
            console.log("Questo è il livello Admin")
        }
    }

    livello(LivelloAccesso.Moderatore)
}


// Crea un enum StatoOrdine con:

// "IN_ATTESA", "SPEDITO", "CONSEGNATO"

// Scrivi una funzione che accetta un StatoOrdine e stampa un messaggio pr ogni stato

{
    enum StatoOrdine {
        IN_ATTESA,
        SPEDITO,
        CONSEGNATO
    }

    function stato(ordine: StatoOrdine): void {
        switch (ordine) {
            case StatoOrdine.IN_ATTESA:
                console.log(`L'ordine è ${StatoOrdine[ordine]}`);
                break;
            case StatoOrdine.SPEDITO:
                console.log(`L'ordine è stato ${StatoOrdine[ordine]}`);
                break;
            case StatoOrdine.CONSEGNATO:
                console.log(`L'ordine è stato ${StatoOrdine[ordine]}`);
                break;
            default:
                console.log("Stato ordine sconosciuto.");
                break;
        }
    }

    stato(StatoOrdine.IN_ATTESA);
    stato(StatoOrdine.SPEDITO);
    stato(StatoOrdine.CONSEGNATO);
}



// Crea un enum Ruolo con tre ruoli: Studente, Docente, Amministratore.
// Scrivi una funzione descriviRuolo(r: Ruolo) che usi uno switch per stampare una descrizione del ruolo.




// Crea un enum stringa Direzione con: "nord", "sud", "est", "ovest".
// Scrivi una funzione muovi(d: Direzione) che stampi: "Vai a nord", ecc.
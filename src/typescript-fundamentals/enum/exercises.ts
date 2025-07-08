// Crea un enum chiamato Giorno

// Contiene: Lunedi, Martedi, ..., Domenica

// Stampa Giorno.Venerdi

{
    enum Giorno {
        Lunedi = "Lunedi",
        Martedi = "Martedi",
        Mercoledi = "Mercoledi",
        Giovedi = "Giovedi",
        Venerdi = "Venerdi",
        Sabato = "Sabato",
        Domenica = "Domenica"
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
        IN_ATTESA = "In attesa",
        SPEDITO = "Spedito",
        CONSEGNATO = "Consegnato"
    }

    function stato(ordine: StatoOrdine): void {
        switch (ordine) {
            case StatoOrdine.IN_ATTESA:
                console.log(`L'ordine è ${ordine}`);
                break;
            case StatoOrdine.SPEDITO:
                console.log(`L'ordine è stato ${ordine}`);
                break;
            case StatoOrdine.CONSEGNATO:
                console.log(`L'ordine è stato ${ordine}`);
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
// Scrivi una funzione descriviRuolo(r: Ruolo) che usi uno switch per stampare una descrizione di ogni ruolo.

{
    enum Ruolo {
        Studente = "Studente",
        Docente = "Docente",
        Amministratore = "Amministatore"
    }


    function descriviRuolo(r: Ruolo): void {
        switch (r) {
            case Ruolo.Studente:
                console.log("Lo studente ha il compito di studiare");
                break;
            case Ruolo.Docente:
                console.log("Il docente ha il compito di insegnare");
                break;
            case Ruolo.Amministratore:
                console.log("L'amministratore ha il compito di amministare");
                break;
        }
    }

    descriviRuolo(Ruolo.Studente);
    descriviRuolo(Ruolo.Docente);
    descriviRuolo(Ruolo.Amministratore);

}

// Crea un enum stringa Direzione con: "nord", "sud", "est", "ovest".
// Scrivi una funzione muovi(d: Direzione) che stampi: "Vai a nord", ecc.

{

    enum Direzione {
        Nord = "Nord",
        Sud = "Sud",
        Est = "Est",
        Ovest = "Ovest"
    }


    function muovi(d: Direzione): void {
        switch (d) {
            case Direzione.Nord:
                console.log(`Vai a ${d}`);
                break;
            case Direzione.Sud:
                console.log(`Vai a ${d}`);
                break;
            case Direzione.Est:
                console.log(`Vai a ${d}`);
                break;
            case Direzione.Ovest:
                console.log(`Vai a ${d}`);
                break;
        }
    }

    muovi(Direzione.Nord);
    muovi(Direzione.Sud);
    muovi(Direzione.Est);
    muovi(Direzione.Ovest);

}
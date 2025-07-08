// Scrivi una funzione somma che accetta due numeri e restituisce la loro somma.


{
    function somma(num1: number, num2: number): number {
        return num1 + num2
    }

    console.log(somma(5, 5));
}

// Scrivi una funzione saluta che prende un nome e ritorna una frase tipo: "Ciao, Mario!".

{
    function saluta(nome: string): string {
        return `Ciao, ${nome}!`
    }

    console.log(saluta("Mario"))
}


// Scrivi una funzione èMaggiorenne che prende un'età e restituisce true se è maggiore o uguale a 18, altrimenti false.

{
    function eMaggiorenne(eta: number): boolean {
        if (eta >= 18) {
            return true
        } else {
            return false
        }
    }

    console.log(eMaggiorenne(23))
}



// Scrivi una funzione stampaNomi che accetta un array di stringhe e stampa ogni nome.




// Scrivi una funzione descriviPersona che prende un oggetto { nome: string; eta: number } e ritorna una stringa descrittiva.
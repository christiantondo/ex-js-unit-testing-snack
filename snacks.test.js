const { getInitials, createSlug, average, isPalindrome } = require("./snack")

// 🏆 Snack 1
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."
test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Giovanni Storti")).toBe("G S")
});

// 🏆 Snack 2
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug restituisce una stringa in lowercase."
test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("Ce la giochiamo a pallone, ITALIA MAROCCO")).toBe("ce-la-giochiamo-a-pallone,-italia-marocco")
});

// 🏆 Snack 3
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione average calcola la media aritmetica di un array di numeri."
test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    expect(average([30, 60, 10, 20, 40])).toBe(32);
});

// 🏆 Snack 4
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug sostituisce gli spazi con -."
test("La funzione createSlug sostituisce gli spazi con -.", () => {
    expect(createSlug("Oggi mi sento BENE")).toBe("oggi-mi-sento-bene")
});

// 📌 Esempi:
// createSlug("Questo è un test") → "questo-e-un-test"

// 🏆 Snack 5
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione isPalindrome verifica se una stringa è un palindromo."
test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    expect(isPalindrome("Amo ridere di Roma")).toBeTruthy()
    expect(isPalindrome("Oggi fa davvero caldo")).toBeFalsy()
});


// 📌 Nota: una stringa palindroma è una sequenza di caratteri che si legge uguale sia da sinistra a destra che da destra a sinistra.



// 🏆 Snack 6
// Creare un test che verifichi la seguente descrizione:

// 👉 "La funzione createSlug lancia un errore se il titolo è vuoto o non valido."

// 🏆 Snack 7
// Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug.

// Creare un test che verifichi le seguenti descrizioni:

// 👉 "La funzione findPostById restituisce il post corretto dato l’array di post e l’id"


// Creare uno o più test aggiuntivi che controllino che la struttura dati passati sia conforme (ogni post ha le proprietà id, title e slug, viene passato un id numerico).


// 🏆 Challenge: describe() - organizzazione dei test
// Organizza i test in describe() raggruppandoli per argomento.
// 🎯 Snack 8 (Bonus)
// Creare due test che verifichino le seguenti descrizioni:

// 👉 "Dopo aver aggiunto un post con la funzione addPost, l'array posts deve contenere un elemento in più."

// 👉 "Dopo aver rimosso un post con la funzione removePost, l'array posts deve contenere un elemento in meno."

// 📌 Note:

// Si consiglia di resettare l'array di post dopo ogni test. Ti ricordi come si fa?
// 🎯 Snack 9 (Bonus)
// Creare un test che verifichi la seguente descrizione:

// 👉 "Se si tenta di aggiungere un post con un id o uno slug già esistente, la funzione addPost deve lanciare un errore."

// 📌 Nota:

// Gli errori devono essere chiari e distinti, es. "Slug già esistente" e “Id già esistente”.
// 🎯 Snack 10 (Bonus): createSlug() – Incrementare lo slug se esiste già
// Creare un test che verifichi la seguente descrizione:

// 👉 "Se viene passato un array di post come secondo argomento, la funzione createSlug incrementa di 1 se lo slug esiste già."
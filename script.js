function sommeElementsDistincts(ensemble1, ensemble2) {
    // Initialiser la somme à 0
    let somme = 0;

    // Utiliser un tableau pour garder une trace des éléments déjà ajoutés
    let elementsAjoutes = [];

    ensemble1.forEach(element => {

        if (!elementsAjoutes.includes(element)) {
            elementsAjoutes.push(element);
        }

    });

    ensemble2.forEach(element => {

        if (!elementsAjoutes.includes(element)) {

            elementsAjoutes.push(element);
        } else {
            // elementsAjoutes.pop(element);
            // si l"élement figure deja on le supprime du tableau
            let index = elementsAjoutes.indexOf(element)
            elementsAjoutes.splice(index, 1)
        }

    });

    elementsAjoutes.forEach(element => {
        somme += element
    })

    return somme;

}

// Exemple d'utilisation
const ensemble1 = [3, 1, 7, 9]
const ensemble2 = [2, 4, 1, 9, 3]

const resultat = sommeElementsDistincts(ensemble1, ensemble2);

console.log("Résultat :", resultat);




function LireUnePhrase(phrase) {

    let CharacterCount = 0
    let WorldCount = 0
    let VowelCount = 0


    for (char in phrase) {
        CharacterCount++
        if (phrase[char] === " " || phrase[char] === ".") {
            WorldCount++
        }

        if (["a", "o", "e", "i", "u", "y"].includes(phrase[char].toLowerCase())) {
            VowelCount++
        }
    }

    return {
        CharacterCount,
        WorldCount,
        VowelCount,

    }
}


console.log(LireUnePhrase('Ma Super phrase momo.'))
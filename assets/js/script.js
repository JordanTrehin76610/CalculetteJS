//Je dois recupérer d'abord le contenue de mon écran
//pour pouvoir ensuite le comparer, si je le récupère pas.

let texte = document.getElementById("ecran").textContent
let number1 = 0
let number2 = 0
let symbole = ''
let sauvSymbole = ''
let resultat = 0
let effacer = ['.', '+', '-', 'x', '/', 'Erreur']
let effaceChiffre = []



//Ecrit des nombres sur des symboles pour les effacer sinon continue la chaîne
//Exemple (2 -> + = 2        2 -> 2 = 22)
function numero(chiffre) {
    texte = document.getElementById("ecran").textContent

    if (effacer.includes(texte) || texte == resultat) {
        document.getElementById("ecran").textContent = chiffre
    } else {
        document.getElementById("ecran").textContent += chiffre
    }

    texte = document.getElementById("ecran").textContent

}



//Efface les chiffres et les enregistre dans une variable ainsi que son opérateur
function operateur(symbole) {
    texte = document.getElementById("ecran").textContent

    if (effacer.includes(texte)) {
        document.getElementById("ecran").textContent = "Erreur"
    } else {

        number1 = +texte
        if (symbole == '+' || symbole == '-' || symbole == 'x' || symbole == '/') {
            document.getElementById("ecran").textContent = symbole
            sauvSymbole = symbole
        }
    }

    texte = document.getElementById("ecran").textContent
}





//Enregistre la second série de chiffre et la calcul avec la première
//Selon l'opérateur précédèmment mis.
function egal() {

    texte = document.getElementById("ecran").textContent

    if (effacer.includes(texte)) {
        document.getElementById("ecran").textContent = "Erreur"
    } else {
        number2 = +texte
        switch (sauvSymbole) {
            case "+":
                resultat = number1 + number2
                break
            case "-":
                resultat = number1 - number2
                break
            case "x":
                resultat = number1 * number2
                break
            case "/":
                if (number2 == 0) {
                    document.getElementById("ecran").textContent = "Erreur"
                    return
                } else {
                    resultat = number1 / number2
                }
                break
        }
    }
    document.getElementById("ecran").textContent = resultat
}




//Efface tout
function effaceTOUT() {
    document.getElementById("ecran").textContent = "."
}




//Transforme une chaine en tableau puis efface le dernier élément et le remet en chaîne
function efface() {
    text = document.getElementById("ecran").textContent
    effaceChiffre = text.split('')
    effaceChiffre.pop()
    text = effaceChiffre.join('')
    document.getElementById("ecran").textContent = text
}
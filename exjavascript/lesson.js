
// VARIABLES

// le nom n'a pas d'espace, pas de tiret
// le nom ne commence pas par un chiffre

var ma_variable = 'C' // string (texte)
// ma_variable = 2 // integer (nombre entier)
// ma_variable = 2.5 // number (nombre décimal)
// ma_variable = '2' // string (texte)
// ma_variable = true // boolean
// ma_variable = false // boolean
var mon_tableau = [0, 1, 2, 3] // array (tableau)
mon_tableau = ['Fortnite', 'Call of Duty', 'Assassin\'s Creed', 'Zelda', 'Mario']
mon_tableau = []

// ma_variable = 0

// CONDITIONS

if (ma_variable) { // Si
    console.log("C'est ca")
}

if (ma_variable) { // Si
    console.log("C'est ca")
} else { // Sinon
    console.log("C'est pas ca")
}

// BOUCLES / LOOP

for (var i = 0; i < 10; i += 1) {
    ma_variable = ma_variable + 'o'
}


for (var i = 0; i < mon_tableau.length; i++) {
    var mon_element_de_tableau = mon_tableau[i].trim()
    console.log(mon_element_de_tableau)
}

// FONCTIONS

function dis_bonjour(name) {
    console.log('Bonjour ' + name)
}

function tableau_en_majuscule(tableau) {
    if (tableau.length == 0) {
        console.error('Le tableau est vide')
    }
    for (var i = 0; i < tableau.length; i++) {
        tableau[i] = tableau[i].toUpperCase()
    }
    return tableau
}

mon_tableau = tableau_en_majuscule(mon_tableau)

console.log(mon_tableau)

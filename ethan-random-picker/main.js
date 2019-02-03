// eslint
//
// TODO :
//
// - Avoir un champ de text (HTML: <input type="text"/>)

// - Avoir un bouton "Tirer au sort" (HTML: <button></button>)

// - Avoir un élément de texte (HTML: <div></div>) pour afficher le résultat

// - Lier les éléments de l'HTML au JavaScript (var textinput; var button, var result)

var textinput = document.getElementById("textinput")
var button = document.getElementById("button")
var resultcontainer = document.getElementById("resultcontainer")
var presetscontainer = document.getElementById("presetscontainer")
var tableau
var result
var inputstring
var presets = {
	"Dé": "1, 2, 3, 4, 5, 6",
	"Pile OU Face": "Pile, Face",
	"Les AS": "As de Pic, As de Coeur, As de Carreau, As de Trèfle",
	"Restos": "Kebab, Boulangerie, MacDo, Burger King, Brasserie, Buffalo",
}

//console.log (textinput, button, result)

// - Taper dans le champ de texte : "Axel, Ethan, John..."

for (var key in presets) {
	var preset = presets[key]
	console.log(key, presets[key])
	var buttonpreset = document.createElement("button")
	buttonpreset.innerHTML = key
	buttonpreset.preset = preset
	presetscontainer.appendChild(buttonpreset)
	buttonpreset.addEventListener("click", function() {
		textinput.value = this.preset
		randompick()
	})
}

// - Écouter l'événement click sur le bouton (element.addEventListener("nomdelevenement", function() {}))
function randompick(){
	inputstring = textinput.value
	console.log(textinput)


	if (inputstring == "") {
		resultcontainer.innerHTML = "Mettre des données avant de tirer au sort!"
		return
	}



	// - Transformer la chaine de caractère en un tableau (string.split(""))

	tableau = inputstring.split(",")
	console.log(tableau)

	// - Récupère la longueur du tableau (array.length)




	// - Nombre aléatoire entre 0 et la longueur du tableau
	//      - Math.random() > entre 0 et 1
	//      - Multiplie le nombre aléatoire par la valeur max
	//      - Tronquer le résultat de la multiplication Math.floor(number)


 	result = Math.floor(Math.random() * tableau.length)
	console.log(result)


	// - Récupère dans le tableau l'élément à la position du chiffre trouvé précédemment (array[number])

    result = tableau[result]
	//console.log(result)

	// - Supprimer les espaces inutiles dans le résultat (text.trim())

	result = result.trim()
	console.log(result)

	// - Afficher la valeur trouvée dans la div du résultat

	resultcontainer.innerHTML = result


}


button.addEventListener("click", randompick)

var games_container = document.getElementById('games-container')
var prev_button = document.getElementById('prev')
var next_button = document.getElementById('next')
var games_array = Object.keys(games)
var games_per_page = 12
var current_page = parseInt(getParameterByName("page"))



// Définir un numéro de page par défaut.
if (!current_page) {
	current_page = 0
}

// Parcourir la liste de jeu par rapport au numéro de la page.
for (var i = current_page * games_per_page; i < games_array.length && i < (current_page + 1) * games_per_page; i++) {
	var id = games_array[i]
	var game = games[id]
	games_container.innerHTML += `
		<a href="/astuces?game=${id}" class="preview" style="background-image:url(${game.image})">
			<h2>${game.name}</h2>

		</a>
	`
}


// Vérifier i il y aune page précédente.
if (current_page > 0) {
	prev_button.setAttribute("href", "?page=" + (current_page - 1))
	prev_button.hidden = false
} else {
	prev_button.hidden = true
}


// Vérifier si il y a une page suivante.
if (((current_page + 1) * games_per_page) < games_array.length) {
	next_button.setAttribute("href", "?page=" + (current_page + 1))
	next_button.hidden = false
} else {
	next_button.hidden = true
}


// Récupérer une info dans url.
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&")
    let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url)
    if (!results) return null
    if (!results[2]) return ''
    return decodeURIComponent(results[2].replace(/\+/g, " "))
}

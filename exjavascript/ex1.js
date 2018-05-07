var container = document.getElementById('container')

var counter = 0

function write(text) {
	container.innerHTML += "<p>" + text + "</p>"

}

//write("bonjour")

for (var i = 0; i < 10; i++) {
	counter += i
	write("article " + (i + 1))
	// if (counter %2 == 0) {
	// 	write("pair")
	// } else {
	// 	write("impair")
	// }
}



var gamecontainer = document.getElementById('gamecontainer');
var width = 500;
var height = 500;
var character = {
	element: document.createElement('div'),
	weapon: document.createElement('div'),
	x: 0,
	y: 0,
	width: 10,
	height: 30,
	jumping : 0,
	orientation: 1,
};
var ennemi = {
	element: document.createElement('div'),
	weapon: document.createElement('div'),
	x: 0,
	y: 0,
	width: 10,
	height: 30,
	jumping : 0,
	orientation: 1,
};
var ennemi2 = {
	element: document.createElement('div'),
	weapon: document.createElement('div'),
	x: -10,
	y: 0,
	width: 10,
	height: 30,
	jumping : 0,
	orientation: 1,
};
var tir = false;
var audio2 = new Audio('mitraillette.mp3');
var audio3 = new Audio('jump.mp3');
var audio4 = new Audio('music.mp3');
var audio5 = new Audio('footstep.mp3');

//console.log(ennemi.x);


// function ennemiCome(){
// 	for (var e = 0; e < 5; e++) {
// 		moveEnnemi(-1),
// 		TweenMax.delayedCall(5, ennemiCome)
// 	}
// }



function audioplay(){
	audio2.play();
}

function audioresume(){
	audio2.pause();
}

function audioplay2(){
	audio3.play();
}

function audioresume2(){
	audio3.pause();
}
function audioplay3(){
	audio4.play();
}

function audioresume3(){
	audio4.pause();
}

function audioplay4(){
	audio5.play();
}

function audioresume4(){
	audio5.pause();
}

audioplay3()
drawCharacter()
drawEnnemi()
drawEnnemi2()
moveEnnemi(-1)



document.onkeypress = function(event){
	switch (event.key) {
		case "ArrowRight":
		// console.log(event.key)
		moveCharacter(1)
		console.log("testts")
		break;
		case "ArrowLeft":
		// console.log(event.key)
		moveCharacter(-1)
		break;
		case "ArrowUp":
		// console.log(event.key)
		jump()
		break;
		case "ArrowDown":
		// console.log(event.key)
		down()
		break;
		case " ":
		// console.log(event.key)
		fire()
		audioplay()
		tir = true
		break;
		default:
		//console.log("Bouton non utilisé")

	}
}





document.onkeyup = function(event3){
	switch (event3.key) {
		case "ArrowLeft":
		audioresume4()
		break;
		case "ArrowRight":
		audioresume4()
		break;
		case " ":
		audioresume()
		break;
	}}

	function jump(){
		var duration = 0.3
		//console.log(character.y, character.jumping)
		if (character.jumping > 1) {
			return
		}
		character.jumping++
		TweenMax.killDelayedCallsTo(resetjump)
		TweenMax.killDelayedCallsTo(fall)
		audioplay2()
		TweenMax.to([character.element, character], duration, {y: "-=47"})
		if (character.jumping == 2) {
			TweenMax.to([character.element, character], duration + 0.2, {rotation: "+=360"})
		}
		TweenMax.delayedCall(duration, fall)


	}

	var kill = 0

	function down(){
		//console.log(character.y, character.jumping)
		var numberdown = 0
		if (numberdown == 1) {
			return
		}
		TweenMax.to([character.element, character], 0.5, {y: 14.5, numberdown: 1} )
	}


	//onUpdate


	function resetjump(){
		character.jumping = 0
	}

	function updateCharacter(){

	}

	function fall(){
		TweenMax.to([character.element, character], 0.5, {y: 0, ease: Bounce.easeOut, onComplete: function(){
			TweenMax.delayedCall(0.06, resetjump)
		}})
	}

	function moveCharacter(direction){
		character.orientation = direction
		TweenMax.set(character.weapon, {x: character.width * direction});
		//console.log(character.x)
		var maxX = width - character.width - 20;
		var minX = 0;
		var distance = maxX / 10;
		if (character.x + distance * direction> maxX) {
			return
		}
		if (character.x + distance * direction< minX) {
			return
		}
		character.x += distance * direction
		audioplay4()
		TweenMax.to(character.element, 0.2, {x: character.x});

	}

	var hit = 0
	var hit2 = 0




	function createTextElement(options){
		var element = document.createElement("span");
		var parent = options.parent || gamecontainer;

		element.innerHTML = options.text;

		delete options.text;
		delete options.parent;

		options.position = "absolute";
		options.color = "black";
		options.fontFamily= 'arial';;
		options.fontSize = 30;

		TweenMax.set(element, options);
		gamecontainer.appendChild(element);
		return element;
	}

	function createKillText(text){
		return createTextElement({text: text, left: 10, top: 50});
	}
	function createNbText(text){
		return createTextElement({text: text, left: 60, top: 50});
	}

	var txtkill = createKillText("Kill:")

	var NBkill = createNbText(kill)

	var NBballes = 0

	function resetgun() {
		NBballes = 0
	}



	function fire(){

		if (NBballes == 15) {
			TweenMax.delayedCall(2, resetgun)
			return
		}
		else {
			var bullet = {
				element: document.createElement('div'),
				x: character.x,
			};

			NBballes++
			console.log(NBballes)
			gamecontainer.appendChild(bullet.element);
			TweenMax.set(bullet.element, {height: 10, width: 10, x: character.x, y: getY(character.element), position: "absolute", 	bottom: character.height / 2, backgroundColor: "red"})
			TweenMax.to(bullet.element, 0.3, {x: character.x + width * character.orientation, ease: Power0.easeNone, onComplete: function(){
				gamecontainer.removeChild(bullet.element)
			}})

			if (bullet.x == ennemi.x) {
				hit++
				//console.log(hit2)
				if (hit > 9) {
					kill ++
					nbEnnemi ++
					TweenMax.set(NBkill, {opacity: 0})
					NBkill = createNbText(kill)
					TweenMax.set(NBkill, {opacity: 1})
					TweenMax.set(ennemi.element, {x: 50})
					TweenMax.delayedCall(5, moveEnnemi(-1))
					hit = 0
				}
			}
			if (bullet.x == ennemi2.x) {
				hit2++
				//console.log(hit2)
				if (hit2 > 9) {
					kill ++
					TweenMax.set(NBkill, {opacity: 0})
					NBkill = createNbText(kill)
					TweenMax.set(NBkill, {opacity: 1})
					TweenMax.set(ennemi2.element, {x: 70})
					TweenMax.delayedCall(5, moveEnnemi2(-1))
					hit2 = 0
				}
			}
		}



	}


	function drawCharacter(){
		gamecontainer.appendChild(character.element);
		character.element.appendChild(character.weapon);
		TweenMax.set(character.element, {height: character.height, width: character.width, position: "absolute", bottom: 0, left: 10, backgroundColor: "black"});
		TweenMax.set(character.weapon, {height: character.height / 4, width: character.width, x: character.width * character.orientation, position: "absolute", bottom: character.height / 2, backgroundColor: "#888"});
	}

	function drawEnnemi(){
		gamecontainer.appendChild(ennemi.element);
		ennemi.element.appendChild(ennemi.weapon);
		TweenMax.set(ennemi.element, {height: ennemi.height, width: ennemi.width, position: "absolute", bottom: 0, left: 520, backgroundColor: "blue"});
		TweenMax.set(ennemi.weapon, {height: ennemi.height / 4, width: ennemi.width, x: ennemi.width * ennemi.orientation, position: "absolute", bottom: ennemi.height / 2, backgroundColor: "#888"});
	}
	function drawEnnemi2(){
		gamecontainer.appendChild(ennemi2.element);
		ennemi2.element.appendChild(ennemi2.weapon);
		TweenMax.set(ennemi2.element, {height: ennemi2.height, width: ennemi2.width, position: "absolute", bottom: 0, left: 550, backgroundColor: "blue"});
		TweenMax.set(ennemi2.weapon, {height: ennemi2.height / 4, width: ennemi2.width, x: ennemi2.width * ennemi2.orientation, position: "absolute", bottom: ennemi2.height / 2, backgroundColor: "#888"});
	}



	function getY(obj) {
		if(!window.getComputedStyle) return;
		var style = getComputedStyle(obj),
		transform = style.transform || style.webkitTransform || style.mozTransform;
		var mat = transform.match(/^matrix3d\((.+)\)$/);
		if(mat) return parseFloat(mat[1].split(', ')[13]);
		mat = transform.match(/^matrix\((.+)\)$/);
		return mat ? parseFloat(mat[1].split(', ')[5]) : 0;
	}

	var nbEnnemi = 0

	function moveEnnemi(direction){
		hit = 0
		nbEnnemi++
		if (nbEnnemi == 5) {
			moveEnnemi2(-1)
		}
		console.log(nbEnnemi)
		ennemi.orientation = direction;
		TweenMax.set(ennemi.element, {x: 50})
		TweenMax.set(ennemi.weapon, {x: ennemi.width * direction});
		//console.log(ennemi.x);
		TweenMax.to(ennemi.element, 5, {x: -530, ease: Power0.easeNone, onComplete:function(){
			TweenMax.set(ennemi.element, {x: 50})
			TweenMax.delayedCall(5, moveEnnemi(-1))
			hit = 0
		}});

	}

	function moveEnnemi2(direction){
		hit2 = 0
		ennemi2.orientation = direction;
		TweenMax.set(ennemi2.element, {x: 70})
		TweenMax.set(ennemi2.weapon, {x: ennemi2.width * direction});
		//console.log(ennemi2.x);
		TweenMax.to(ennemi2.element, 5, {x: -550, ease: Power0.easeNone, onComplete:function(){
			TweenMax.set(ennemi2.element, {x: 70})
			TweenMax.delayedCall(5, moveEnnemi2(-1))
			hit2 = 0
		}});

	}

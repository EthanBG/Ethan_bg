	/* eslint */

	// Create Elements

	var banner = document.getElementById("banner");

	var black_frame = createRectangle(5, 5, 290, 240, "#000000")
	var txt_1_1 = createTextTop("THE NEW");
	var txt_1_2 = createTextBottom("MINI COOPER S.");
	var txt_2_1 = createTextTop("SMALL CAR");
	var txt_2_2 = createTextBottom("BIG PLEASURE.");
	var txt_3 = createTextElement({text: "CHANGE COLOR:", left: 10, top: 25, fontSize: 12 })
	var biglogo = createElement({src: "img/biglogo.png", left: 55, top: 85, width: 190, height: 81});
	var btnblue = createElement({src: "img/btnblue.png", left: 147, top: 21, width: 20, height: 20, cursor: "pointer", zIndex: 2});
	var btnred = createElement({src: "img/btnred.png", left: 201, top: 21, width: 20, height: 20, cursor: "pointer", zIndex: 2});
	var btnyellow = createElement({src: "img/btnyellow.png", left: 174, top: 21, width: 20, height: 20, cursor: "pointer", zIndex: 2});
	var carprofile = createElement({src: "img/carprofile.png", top: 69, width: 300, height: 140});
	var minilogo = createElement({src: "img/minilogo.png", left: 225, top: 209, width: 60, height: 26});
	var minibw = createElement({src: "img/minibw.png", left: 26, top: 70 -5, width: 299, height: 159, parent: black_frame});
	var miniblue = createElement({src: "img/miniblue.png", left: 68, top: 108, width: 222, height: 68});
	var minired = createElement({src: "img/minired.png", left: 38, top: 108, width: 222, height: 68});
	var miniyellow = createElement({src: "img/miniyellow.png", left: 38, top: 108, width: 222, height: 68});
	var cta_frame = createRectangle(10, 209, 144, 31, "#000000")
	var ctaarrow = createElement({src: "img/ctaarrow.png", left: 20 - 10, top: 221 - 209, width: 7, height: 8, parent: cta_frame});
	var ctaarrow_2 = createElement({src: "img/ctaarrow.png", left: 25 - 10, top: 221 - 209, width: 7, height: 8, parent: cta_frame});
	var cta_txt = createTextElement({text: "EXPLORE NOW.", left: 35 - 10, top: 6, fontSize: 15, parent: cta_frame})

	// Adjust Elements



	TweenMax.set(banner, {width: 300, height: 250, position: "relative", overflow: "hidden", backgroundColor: "#07a2d4"});
    TweenMax.set(black_frame, {overflow: "hidden"})
	TweenMax.set([
		minired,
		miniyellow,
		miniblue
	], {opacity: 0})

	TweenMax.set(minibw, 0, {x: 30})
	TweenMax.set(miniblue, 0, {x: 30})
	var colors = {
		blue: "#07a2d4",
		yellow: "#dd8601",
		red: "#93121b",
		black: "#000000"
	}

	// Animate Elements

	// TweenMax.to(banner, 3, {rotation: -360});
	// TweenMax.to(banner, 3, {scale: .5});
	//TweenMax.from(banner, 3, {opacity: 0});



	var timeline = new TimelineMax();

	for (var i = 0; i < 2; i++) {
		timeline
		.to(banner, 0.01, {backgroundColor: colors.blue}, "+=0.5")
		.to(banner, 0.01, {backgroundColor: colors.red}, "+=0.5")
		.to(banner, 0.01, {backgroundColor: colors.yellow}, "+=0.5")
	}

	for (var i = 0; i < 3; i++) {
		timeline
		.to(banner, 0.01, {backgroundColor: colors.blue}, "+=0.2")
		.to(banner, 0.01, {backgroundColor: colors.red}, "+=0.2")
		.to(banner, 0.01, {backgroundColor: colors.yellow}, "+=0.2")
	}

	timeline
		.addLabel("frame1")
		.to(carprofile, 1, {x: 300, ease: Power2.easeIn})
	    .to(carprofile, 0, {x: -300,})
		.to(carprofile, 3, {x: 0, ease: Elastic.easeOut.config(0.8, 1)})
		.to(banner, 0.01, {backgroundColor: colors.blue})

		.staggerFrom([
			txt_1_1,
			txt_1_2,
		], .1, {opacity: 0}, 0.1, "+=0.2")
		.from(cta_frame, 1, {scale: 0})

		.staggerTo([
			txt_1_1,
			txt_1_2,
		], .1, {opacity: 0}, 0.1, "+=3")
		.addLabel("frame2")
		.to(banner, 0.01, {backgroundColor: colors.yellow})
		.staggerFrom([
			txt_2_1,
			txt_2_2,
		], .1, {opacity: 0}, 0.1)

		.to(banner, 0.01, {backgroundColor: colors.red}, "+=3")
		.addLabel("frame3")

		.to(banner, 0.01, {backgroundColor: colors.blue}, "+=3")
		.addLabel("frame4")
		.staggerTo([
			txt_2_1,
			txt_2_2,
		], .1, {opacity: 0}, 0.1)
		.to(minibw,0.01, {opacity: 0},)
		.to(cta_frame, 1, {scale: 0})
		.to(minibw,0.01, {opacity: 0},)
		.to(carprofile, 1, {x: 300, ease: Power2.easeIn})
		.to(minilogo, 0.01, {opacity: 0})
		.to(minibw,0.01, {opacity: 0},)
		.from(black_frame, 0.01, {opacity: 0})
		.from(biglogo, 1, {scale: 3, opacity: 0})

		.to(biglogo, 1, {scale: 0, opacity: 0}, "+=2")
		.addLabel("frame5")

		.from([
			txt_3,
			btnred,
			btnblue,
			btnyellow,
			minilogo,
			], .1, {opacity: 0},)

		.to([minibw, miniblue], 0.4, {opacity: 1, x: -30}, "+=0.7")
		.to(cta_frame, 0.01,{ opacity: 1, scale: 1})
		.call(interaction_end)


	//timeline.seek("frame4")
	// bannerboy.scrubberController.create({"main timeline": timeline})
	interaction()

	// Custom Functions
    var currentcolor = "blue"

	function interaction(){
		console.log('interaction')
		cta_frame.addEventListener("mouseenter", function(){
			changebtnColor(currentcolor)
		})
		cta_frame.addEventListener("mouseleave", function(){
			changebtnColor("black")
		})
		cta_frame.addEventListener("click", function(){
			window.open("https://www.mini.fr/fr_FR/home.html")
		})
	}

	function interaction_end() {

		btnyellow.addEventListener("mouseleave", function(){
			changeColor(currentcolor)
		})
		btnred.addEventListener("mouseleave", function(){
			changeColor(currentcolor)
		})
		btnblue.addEventListener("mouseleave", function(){
			changeColor(currentcolor)
		})
		btnyellow.addEventListener("mouseenter", function(){
			changeColor("yellow")
		})
		btnred.addEventListener("mouseenter", function(){
			changeColor("red")
		})
		btnblue.addEventListener("mouseenter", function(){
			changeColor("blue")
		})
		btnyellow.addEventListener("click", function(){
			clickColor("yellow")
		})
		btnred.addEventListener("click", function(){
			clickColor("red")
		})
		btnblue.addEventListener("click", function(){
			clickColor("blue")
		})
	}

	function changebtnColor(color){
		console.log('change button color')
		TweenMax.to(cta_frame, 0.01, {backgroundColor: colors[color]})
	}

	function clickColor(color){
		currentcolor = color
		var btnColor = [btnblue, btnred, btnyellow]
		TweenMax.set(btnColor, {borderWidth: 0})
		TweenMax.to(banner, 0.01, {backgroundColor: colors[color]})
		if (color == "yellow") {
			TweenMax.to(btnyellow, 0.01, {border: "solid 1px #FFFFFF"})
		}
		if (color == "red") {
			TweenMax.to(btnred, 0.01, {border: "solid 1px #FFFFFF"})
		}
		if (color == "blue") {
			TweenMax.to(btnblue, 0.01, {border: "solid 1px #FFFFFF"})
		}
	}

	function changeColor(color){
		console.log('change color')
		var colorsmini = [minired, miniblue, miniyellow]
		TweenMax.set(colorsmini, {opacity: 0})
		if (color == "yellow") {
			TweenMax.to(miniyellow, 0.01, {opacity: 1})
		}
		if (color == "red") {
			TweenMax.to(minired, 0.01, {opacity: 1})
		}
		if (color == "blue") {
			TweenMax.to(miniblue, 0.01, {opacity: 1})
		}
	}

	function createElement(options) {
		var element = document.createElement("img");
		var parent = options.parent || banner;
		element.src = options.src;

		delete options.src;
		delete options.parent;

		options.position = "absolute";

		TweenMax.set(element, options);

		parent.appendChild(element);
		return element;
	}

	function createTextTop(text){
		return createTextElement({text: text, left: 17, top: 23, fontSize: 21});
	}

	function createTextBottom(text){
		return createTextElement({text: text, left: 17, top: 44});
	}


	function createTextElement(options){
		var element = document.createElement("span");
		var parent = options.parent || banner;

		element.innerHTML = options.text;

		delete options.text;
		delete options.parent;

		options.position = "absolute";
		options.color = "white";
		options.fontFamily= 'minitype_v2_regularbold';;
		options.fontSize = options.fontSize || 30;

		TweenMax.set(element, options);
		parent.appendChild(element);
		return element;
	}



	function createRectangle(left, top, width, height, color, parent){
		var element = document.createElement("div");
		var parent = parent || banner;
		TweenMax.set(element, {
			left: left,
			top: top,
			width: width,
			height: height,
			backgroundColor: color || "#000000",
			position: "absolute"
		});
		parent.appendChild(element);
		return element;
	}

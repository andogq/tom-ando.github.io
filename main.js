// Variable to check window mode
var windowMode = "large";

// Types a word in given container
function typeWord(word, container) {
	var typerCounter = new Worker("counter.js");
	typerCounter.postMessage(75);
	
	var letterCounter = 0;
	
	typerCounter.onmessage = function() {
		if (letterCounter == word.split("").length - 1) {
			typerCounter.terminate();
		}
		container.innerHTML += word[letterCounter];
		letterCounter += 1;
	}
}

// Web worker to create flashing underscore timer
function animateUnderscore() {
	var underscoreTimer = new Worker("counter.js");
	underscoreTimer.postMessage(501);
	
	var underscore = document.querySelector("#underscore");
	underscore.style.transition = "opacity 0.5s";
	
	underscoreTimer.onmessage = function() {
		var opacity = window.getComputedStyle(underscore).getPropertyValue("opacity");
		// Gets called every 1 second
		// Toggle fading
		if (opacity != "0") {
			underscore.style.opacity = "0";
		} else {
			underscore.style.opacity = "0.9";
		}
	}
}

function animateBreaks() {
	var jsLines = ['function f6264(e) {var f = e[0] + e[1] - e[3] + Number(String(e[2]).charAt(1) + String(e[2]).charAt(1)) - 2;e.push(f);var g = e.join("").match(/.{1,2}/g).map(function(v){	return String.fromCharCode(parseInt(v, 16));}).join("");word = g;}', 'function f2384(q) {var y = Number(String(q[3]).charAt(0)) + Number(String(q[3]).charAt(1));var w = Number([String(q[2]).charAt(0), y].join(""));q.push(w);f6264(q);}', 'function f9793(o) {o.push([String(o[2]).charAt(0), String(Number(String(o[0]).charAt(1)) * 3 / Number(String(o[1]).charAt(0)))]);o[3] = Number(o[3].join(""));f2384(o);}', 'function f5358(l) {var t = [String(Number(String(l[0]).charAt(0)) + Number(String(l[1]).charAt(1)))];t.push(String(Number(String(l[1]).charAt(0)) - t[0]));l.push(Number(t.join("")));f9793(l);}', 'function f5926(m) {var j = String(m[0]).charAt(1);var d = String(Number(String(m[0]).charAt(0)) / 2);f5358([m[0], Number(j + d)]);}', 'function f3141(c) {var a = b = c + 1;a -= 4;b -= 1;f5926([Number(String(a) + String(b))]);}'];
	var breaks = document.querySelectorAll(".javascriptLine");
	for (i=0; i<breaks.length; i++) {
		typeWord(jsLines[i], breaks[i]);
	}
}

// Animate the subtitle
function animateSubtitle() {
	setTimeout('document.querySelector("#shellArrows").innerHTML = ">> "', 900);
	setTimeout('typeWord("Web designer/developer and programmer", document.querySelector("#subtitleText"))', 1000);
}

// Function to setup css what has special values
function initCSS() {
	var height = window.innerHeight;
	var width = window.innerWidth;

	// Subtitle
	var subtitle = document.querySelector("#subtitle");
	// 20% + 250px
	subtitle.style.top = (height * 0.1) + 150 + "px";
	
	// Social icons
	var socialIcons = document.querySelector("#socialIcon");
	// center
	if (width >= 600) {
		socialIcons.style.left = (width - 158) / 2 + "px";
	} else {
		socialIcons.style.left = (width - 90) / 2 + "px";
	}
}

// Starts all the animations in order
function startAnimations() {
	initCSS();
	// Animations for the main heading
	animateUnderscore();
	typeWord("tom", document.querySelector("#headingText1"));
	setTimeout('typeWord("Anderson", document.querySelector("#headingText2"))', 300);
	
	// Animations for the subtitle
	animateSubtitle();
	
	// Animations for the breaks
	animateBreaks();

	// Reset's CSS if window changes
	window.onresize = function() {
		initCSS();
	}
}

if (document.readyState === "complete" || document.readyState !== "loading") {
	startAnimations();
} else {
  document.addEventListener("DOMContentLoaded", startAnimations());
}
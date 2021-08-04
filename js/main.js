//import {createParticles } from './particle.js';
import {showDescription, menu } from './interactions.js';
import {changeColor} from './crono.js';
window.onload = function() {
	//createParticles(500);
	const works = new Array(...document.getElementsByClassName("description-li"));
	const menuCompact = document.getElementsByClassName("menu-compact")[0];
	const callback = changeColor(works);
	const menuItems = new Array(...document.getElementsByClassName("menu-uncompact-item"));
	const validPaths = ["/", "/skills", "/works", "/contact"];

	const index = validPaths.indexOf(window.location.pathname.split(".")[0]);
	if (0<= index && index < menuItems.length) menuItems[index].classList.add("active");

	works.forEach(work => work.addEventListener("click", (event) => showDescription(works,event.currentTarget)));
	menuCompact.addEventListener("click", menu);
	window.onwheel = function(e) {
		callback(window.scrollY);
	}

}

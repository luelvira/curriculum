//import {createParticles } from './particle.js';
import {showDescription, menu } from './interactions.js';
window.onload = function() {
	//createParticles(500);
	const works = new Array(...document.getElementsByClassName("description-li"));
	works.forEach(work => work.addEventListener("click", (event) => showDescription(works,event.currentTarget)));
	const menuCompact = document.getElementsByClassName("menu-compact")[0];
	menuCompact.addEventListener("click", menu);

}

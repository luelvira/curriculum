import {createParticles } from './particle.js';
import {showDescription } from './descriptions.js';
window.onload = function() {
	createParticles(500);
	const works = new Array(...document.getElementsByClassName("description-li"));
	works.forEach(work => work.addEventListener("click", (event) => showDescription(works,event.currentTarget)));
}

//import {createParticles } from './particle.js';
import {showDescription, menu, changeLanguage } from './interactions.js';
import {changeColor} from './crono.js';
import {Gallery} from './gallery.js';

window.onload = function() {
	//createParticles(500);
	const works = new Array(...document.getElementsByClassName("description-li"));
	const menuCompact = document.getElementsByClassName("menu-compact")[0];
	const quosButton = document.getElementById("changeLanguage");
	const galleries = new Array(...document.getElementsByClassName("gallery"));
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

	quosButton.addEventListener("click",  (e) => changeLanguage(e.currentTarget));

	galleries.forEach(g => new Gallery(g));

}

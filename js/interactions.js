function showDescription(alls, current) {
	alls.forEach(work => work === current && !work.classList.contains("active") ? work.classList.add("active") : work.classList.remove("active"));
}

function menu(e) {
	const menuHidden = document.getElementsByClassName("menu-uncompact--hidden")[0] || document.getElementsByClassName("menu-uncompact")[0];
	const trigger = e.currentTarget.getElementsByTagName("div")[0];
	if (trigger.getAttributeNames().includes("state") && trigger.getAttribute("state") === "close") {
		trigger.setAttribute("state", "open");
	} else { 
		trigger.setAttribute("state", "close");
	}
	menuHidden.classList.toggle("menu-uncompact--hidden");
	menuHidden.classList.toggle("menu-uncompact");


}
function changeLanguage(target) {
	const current = target.getAttribute("data-state");
	const other = current === "spanish" ? "english" :"spanish";
	const currentP = Array(...document.getElementsByClassName(`${current}_version`));
	const otherP  = Array(...document.getElementsByClassName(`${other}_version`));
	const actionsText = {"spanish": "Change language", "english": "Cambiar idioma"};
	currentP.forEach(p => p.classList.add("hidden"));
	otherP.forEach(p => p.classList.remove("hidden"));
	target.setAttribute("data-state", other);
	target.innerText = actionsText[other];
}

export {showDescription, menu, changeLanguage}

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

export {showDescription, menu}

function showDescription(alls, current) {
	alls.forEach(work => work === current && !work.classList.contains("active") ? work.classList.add("active") : work.classList.remove("active"));
}

export {showDescription}

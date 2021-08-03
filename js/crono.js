
function changeColor(works) {
	const items = works;
	const action = (position) => items.forEach((element, index) => {
		if (element.offsetTop <= position)
			element.classList.add("active-color")
		else
			element.classList.remove("active-color")
	});
	return action;
	

}
export {changeColor};

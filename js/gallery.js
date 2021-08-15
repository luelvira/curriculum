/*
function gallery(gallery) {
	const imgs = new Array(...gallery.getElementsByTagName("div"));
	imgs.forEach(div => {
		let img = div.getElementsByTagName("img")[0];
		let alt = img.getAttribute("alt");
		let description = img.getAttribute("description");
		let p = document.createElement("p");
		p.innerText = alt;
		div.appendChild(p);
		div.addEventListener("click", (e) => {
			div.style.position = "fixed";
			div.style.width = "90vw";
			div.style.left = "5vw"
			
		});
	});
}
*/

class Gallery {
	constructor(gallery) {
		this.imgs = new Array(...gallery.getElementsByTagName("div"));
		this.img;
		this.p;
		this.board;
		this.imgs.forEach((div, index) => {
			let img = div.getElementsByTagName("img")[0];
			let alt = img.getAttribute("alt");
			let description = img.getAttribute("data-description");
			let src = img.getAttribute("src");
			let p = document.createElement("p");
			p.innerText = alt;
			div.appendChild(p);
			div.addEventListener("click", e => {
				this.viewImage(src, index, description);
			});
		});
		this.createGalleryView(this.imgs.length);
	}
	createGalleryView(n) {
		let board = document.createElement("div")
		board.classList.add("board");
		board.classList.add("hidden");
		let container = document.createElement("div");
		this.img = document.createElement("img");
		this.p = document.createElement("p");
		container.appendChild(this.img);
		container.appendChild(this.p);
		let ul = document.createElement("ul");
		for (let i = 0; i< n; ++i) {
			let li = document.createElement("li");
			li.addEventListener("click", () => this.changeImage(i));
			ul.appendChild(li);
		}
		board.appendChild(container);
		board.appendChild(ul);
		document.body.appendChild(board);
		this.board = board;
		container.addEventListener("click", () => board.classList.add("hidden"));
	}
	viewImage(src, pos, description) {
		this.board.classList.remove("hidden");
		this.img.setAttribute("src", src);
		this.p.innerText = description;
		let lis = this.board.getElementsByTagName("li");
		lis[pos].classList.add("active");
	}

	changeImage(i) {
		let img = this.imgs[i].getElementsByTagName("img")[0];
		this.img.setAttribute("src", img.getAttribute("src"));
		this.p.innerText = img.getAttribute("data-description");
		let lis = this.board.getElementsByTagName("li");
		for (let j = 0; j<lis.length; ++j)
			if (j === i)
				lis[j].classList.add("active");
			else
				lis[j].classList.remove("active");
	}
}
export  {Gallery};

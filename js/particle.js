function createParticles(n) {
	let maxTime = 0;
	for (let i = 0; i<n; ++i) {
		let particle = document.createElement("div");
		particle.classList.add("particle");
		let size = `${Math.floor(Math.random()*5+3)}px`;
		particle.style.width = size;
		particle.style.heigth = size;
		let x = Math.floor(Math.random()*100),
			y = Math.floor(Math.random()*25)-50,
			destinationX = Math.floor(Math.random()*100),
			destinationY = Math.floor(Math.random()*100)+50,
			duration = Math.random()*500+2000,
			delay = Math.random()*500/(i+1),
			baseColor = Math.random()*255,
			t = duration+delay;
		particle.style.backgroundColor = `rgb(${baseColor+Math.floor(Math.random()*25)-25}, ${baseColor+Math.floor(Math.random()*25)-25},${baseColor+Math.floor(Math.random()*25)-25})`;
			
		if (maxTime < t) maxTime = t;
		particle.style.left = x+'%';
		particle.style.top = y+'%';
		particle.animate([
			{
				top: y+'%',
				left: x+'%',
				opacity: 1
			},
			{
				top: '100%',
				left: (x+destinationX)+'%',
				opacity: 0
			}
		], {duration: duration,
			delay: delay,
			iterations: Infinity
		}).onfinish = function(e) {
			//e.srcElement.effect.target.remove();
			console.log(e.srcElement.effect.target.style.top);
		}
		document.getElementsByTagName("header")[0].appendChild(particle);
	}
	return maxTime;
}


export {createParticles }

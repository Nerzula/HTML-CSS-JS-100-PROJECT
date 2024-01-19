const idicator = document.querySelector('.scroll-indicator .progress');
let scrollHeight =
	document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', scroll);

function scroll() {
	const scrollTop = document.documentElement.scrollTop;
	let scrolled = (scrollTop / scrollHeight) * 100;

	idicator.style.width = `${scrolled}%`;
}

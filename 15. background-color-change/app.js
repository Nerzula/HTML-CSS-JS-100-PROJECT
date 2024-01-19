const btn = document.getElementById('btn');
let hex = document.getElementById('hexCode');

function randomColor() {
	let letters = '0123456789ABCDEF';
	let color = '#';

	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}

	return color;
}

btn.addEventListener('click', e => {
	e.preventDefault();
	let val = randomColor();
	document.body.style.backgroundColor = val;
	hex.textContent = val;
});

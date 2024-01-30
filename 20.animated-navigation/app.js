const toggle = document.querySelector('#toggle');
const nav = document.querySelector('.nav');

toggle.addEventListener('click', function (e) {
	e.preventDefault();
	nav.classList.toggle('active');
});

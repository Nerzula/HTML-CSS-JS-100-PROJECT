const arrow = document.querySelector('#arrow');

window.addEventListener('scroll', function (e) {
	let possition = window.scrollY;
	console.log(possition);
	if (possition <= 5) {
		arrow.classList.add('fade-in');
		arrow.classList.remove('fade-out');
	} else {
		arrow.classList.remove('fade-in');
		arrow.classList.add('fade-out');
	}
});

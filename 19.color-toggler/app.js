const toggle = document.querySelector('.toggle-input');

toggle.addEventListener('click', function (e) {
	//if (toggle.checked === true) {
	//	document.body.style.backgroundColor = 'black';
	//} else {
	//	document.body.style.backgroundColor = 'white';
	//}

	toggle.checked === true
		? (document.body.style.backgroundColor = 'black')
		: (document.body.style.backgroundColor = 'white');
});

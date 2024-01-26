const btn = document.querySelector('.play');
const closeIcon = document.querySelector('.close-icon');
const trailerContainer = document.querySelector('.trailer-container');
const video = document.querySelector('video');

btn.addEventListener('click', function (e) {
	e.preventDefault();
	trailerContainer.classList.add('active');
	btn.style.display = 'none';
	video.play();
});

closeIcon.addEventListener('click', closePopup);

function closePopup() {
	trailerContainer.classList.remove('active');
	video.pause();
	video.currentTime = 0;
	btn.style.display = 'block';
}

window.addEventListener('click', function (e) {
	if (!btn.contains(e.target) && !e.target.closest('video')) {
		closePopup();
	}
});

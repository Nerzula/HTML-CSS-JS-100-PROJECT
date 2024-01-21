const cursor = document.querySelector('.cursor');

const moveCursor = function (pageX, pageY) {
	cursor.style.left = pageX + 'px';
	cursor.style.top = pageY + 'px';
};

document.addEventListener('mousemove', function (e) {
	moveCursor(e.pageX, e.pageY);
});

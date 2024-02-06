const btn = document.querySelector('#emoji');

const emojis = [
	'😆',
	'😅',
	'🤣',
	'😂',
	'😀',
	'🤑',
	'🤨',
	'🙂',
	'😊',
	'😗',
	'😛',
	'😏',
	'🤥',
	'😴',
	'🥺',
	'😧',
	'😇',
	'😳',
	'🙃',
	'🥴',
	'🧐',
	'🤨',
	'😒',
	'🤔',
	'🤭',
	'🥰',
	'🤐',
	'👀',
	'🤔',
	'🤪',
	'🥲',
	'😃',
	'😁',
	'😬',
];

btn.addEventListener('mouseover', function (e) {
	btn.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
});

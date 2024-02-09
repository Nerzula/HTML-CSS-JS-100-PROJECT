//copy text
const copyText = document.querySelector('textarea[name=copyTxt]');
//fina; text
const finalText = document.querySelector('textarea[name=finalTxt]');
//moveBtn
const moveBtn = document.querySelector('.moveBtn');
// copyBtn
const copyBtn = document.querySelector('.copyBtn');
// output
const output = document.querySelector('.output');

copyBtn.addEventListener('click', function (e) {
	let temp = copyText.value;
	copyToClipBoard(temp);
});

moveBtn.addEventListener('click', function (e) {
	let temp = copyText.value;
	finalText.value = temp;
});

copyText.addEventListener('click', function (e) {
	this.select();
});
finalText.addEventListener('click', function (e) {
	this.select();
});

function copyToClipBoard(str) {
	const outputContainer = document.querySelector('.output-container');
	const textarea = document.createElement('textarea');
	textarea.value = str;
	outputContainer.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	outputContainer.removeChild(textarea);
	output.innerHTML = `<h3>Content Copoed</h3>`;
	output.classList.add('added');

	setTimeout(() => {
		output.classList.toggle('added');
		output.textContent = '';
	}, 2000);
}

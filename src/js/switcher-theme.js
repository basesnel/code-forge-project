const refs = {
	switcherCheck: document.querySelector('.switch-checkbox'),
}

refs.switcherCheck.addEventListener('click', onCheckClick);

function onCheckClick(e) {
	document.body.classList.toggle('dark');
}
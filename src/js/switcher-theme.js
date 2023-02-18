import { save, load } from './locale-storage';

const refs = {
	switcherCheck: document.querySelector('.switch-checkbox'),
}

const currentTheme = load('theme') ? load('theme') : 'light' ;
if (currentTheme === 'light') {
	document.body.classList.remove('dark');
	refs.switcherCheck.checked = false;
} else {
	document.body.classList.add('dark');
	refs.switcherCheck.checked = true;
}

refs.switcherCheck.addEventListener('click', onCheckClick);

function onCheckClick(e) {
	if (document.body.classList.contains('dark')) {
		save('theme', 'light');
		document.body.classList.toggle('dark');
		return;
	}

	document.body.classList.toggle('dark');
	save('theme', 'dark');
}
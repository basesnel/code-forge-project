import { save, load } from './locale-storage';

const refs = {
	switcherCheck: document.querySelector('.switch-checkbox'),
	switcherCheckMobile: document.querySelector('.switch-checkbox-mobile'),
}

const currentTheme = load('theme') ? load('theme') : 'light';

switchTheme();

refs.switcherCheck.addEventListener('click', onCheckClick);

refs.switcherCheckMobile.addEventListener('click', onCheckClick);

function onCheckClick(e) {
	if (document.body.classList.contains('dark')) {
		save('theme', 'light');
		document.body.classList.toggle('dark');
		refs.switcherCheck.checked = false;
		refs.switcherCheckMobile.checked = false;
		return;
	}

	document.body.classList.toggle('dark');
	save('theme', 'dark');
	refs.switcherCheck.checked = true;
	refs.switcherCheckMobile.checked = true;
}

function switchTheme() {
	if (currentTheme === 'light') {
		document.body.classList.remove('dark');
		refs.switcherCheck.checked = false;
		refs.switcherCheckMobile.checked = false;
	} else {
		document.body.classList.add('dark');
		refs.switcherCheck.checked = true;
		refs.switcherCheckMobile.checked = true;
	}
}

const refs = {
	openSearchBtn: document.getElementById('search-btn'),
	searchForm: document.getElementById('form-field'),
}

refs.openSearchBtn.addEventListener('click', onClickSearchBtn);

function onClickSearchBtn(e) {
	refs.searchForm.classList.add('open');
}
const refs = {
	categories: document.querySelector('.js-category'),
	otherCategories: document.querySelector('.js-category-others'),
	othersWrapper: document.querySelector('.js-others-wrapper'),
	searchFormInHeader: document.querySelector('#form-field'),
}
let previosBtn = null;

refs.categories.addEventListener('click', onClickCategories);
refs.otherCategories.addEventListener('click', onClickOtherCategories);
refs.searchFormInHeader.addEventListener('submit', onSearchFormSubmit);

function onClickCategories(e) {
	refs.othersWrapper.classList.remove('is-open');
	addAndRemoveActiveCategory(e.target);
}

function onClickOtherCategories(e) {
	refs.othersWrapper.classList.remove('is-open');
	addAndRemoveActiveCategory(e.target);
}

function addAndRemoveActiveCategory(currentEl) {
	if (currentEl.nodeName === 'BUTTON') {
		if (previosBtn !== null && previosBtn.contains('category-active')) {
			previosBtn.remove('category-active');
			currentEl.classList.add('category-active');

			previosBtn = currentEl.classList;
			return;
		}

		previosBtn = currentEl.classList;
		previosBtn.add('category-active');
	}
}

function onSearchFormSubmit(e) {
	refs.othersWrapper.classList.remove('is-open');
	previosBtn.remove('category-active');
}
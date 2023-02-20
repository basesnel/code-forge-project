const refs = {
	openOthersBtn: document.querySelector('.js-others-btn'),
	othersWrapper: document.querySelector('.js-others-wrapper'),
}

refs.openOthersBtn.addEventListener('click', onBtnClick);

function onBtnClick(e) {
	refs.othersWrapper.classList.toggle('is-open');
}
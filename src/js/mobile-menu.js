export default (() => {

    const refs = {
        openMenuBtn: document.querySelector('.js-open-menu'),
        mobileMenuEl: document.querySelector('.mobile-menu'),
        basicHeaderContainer: document.querySelector('.header-container'),
        closeMenuBtn: document.querySelector('.js-close-button'),
    }

    const { openMenuBtn, mobileMenuEl, basicHeaderContainer, closeMenuBtn } = refs;
    
    openMenuBtn.addEventListener('click', onMenuOpenBtnClick);
    closeMenuBtn.addEventListener('click', onMenuCloseBtnClick);

    function onMenuOpenBtnClick(e) {        
		mobileMenuEl.classList.toggle('visually-hidden');
		document.body.classList.add('locked');
	}
	function onMenuCloseBtnClick(e) {        
		mobileMenuEl.classList.toggle('visually-hidden');
		document.body.classList.remove('locked');
    }

    // if (window.matchMedia("(min-width: 768px)").matches) {
    //     openMenuBtn.classList.add('visually-hidden');
    //     basicHeaderContainer.classList.remove('visually-hidden');
    // } else {
    //     openMenuBtn.classList.remove('visually-hidden');
    //     basicHeaderContainer.classList.add('visually-hidden');
    // }

});
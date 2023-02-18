export default (() => {

    const refs = {
        openMenuBtn: document.querySelector('.js-open-menu'),
        mobileMenuEl: document.querySelector('.mobile-menu'),
        basicHeaderContainer: document.querySelector('.header-container'),
        closeMenuBtn: document.querySelector('.js-close-button'),
    }

    const { openMenuBtn, mobileMenuEl, basicHeaderContainer, closeMenuBtn } = refs;
    
    openMenuBtn.addEventListener('click', onMenuBtnClick);
    closeMenuBtn.addEventListener('click', onMenuBtnClick);

    function onMenuBtnClick(e) {        
        mobileMenuEl.classList.toggle('visually-hidden');
        basicHeaderContainer.classList.toggle('visually-hidden');
        
    }

   /* if (window.matchMedia("(min-width: 768px)").matches) {
        openMenuBtn.classList.add('visually-hidden');
        basicHeaderContainer.classList.remove('visually-hidden');
    } else {
        openMenuBtn.classList.remove('visually-hidden');
        basicHeaderContainer.classList.add('visually-hidden');
    }*/

});
export default (() => {

    const refs = {
        navigation: document.querySelector('.navigation'),
        openMenuBtn: document.querySelector('.js-open-menu'),
        basicHeaderContainer: document.querySelector('.header-container'),
    }

    const { navigation, openMenuBtn, basicHeaderContainer } = refs;

    window.addEventListener('resize', onResize);

    function onResize(e) {
        if (window.matchMedia("(min-width: 768px)").matches) {
            tablet();
        }

        if (window.matchMedia("(max-width: 768px)").matches) {
            mobile();
        }
    }

    function tablet() {
        navigation.classList.remove('visually-hidden');
        openMenuBtn.classList.add('visually-hidden');
        basicHeaderContainer.classList.remove('visually-hidden');
    }


    function mobile() {
        navigation.classList.add('visually-hidden');
        openMenuBtn.classList.remove('visually-hidden');
        
    }
  


})
import debounce from "lodash.debounce";
export default (() => {

    const refs = {
        navigation: document.querySelector('.navigation'),
        openMenuBtn: document.querySelector('.js-open-menu'),
		basicHeaderContainer: document.querySelector('.header-container'),

		mobileMenuEl: document.querySelector('.mobile-menu'),
    }

    const { navigation, openMenuBtn, basicHeaderContainer, mobileMenuEl } = refs;

    window.addEventListener('resize', debounce(onResize, 300));

    chooseElementsByViewportWidth();

    function onResize(e) {
        chooseElementsByViewportWidth();
    } 


    function chooseElementsByViewportWidth() {

         if (window.matchMedia("(min-width: 768px)").matches) {
            tablet();
         } else {
             mobile()
        }

    }

    function tablet() {
        navigation.classList.remove('visually-hidden');
        openMenuBtn.classList.add('visually-hidden');
		basicHeaderContainer.classList.remove('visually-hidden');
		mobileMenuEl.classList.add('visually-hidden');
		document.body.classList.remove('locked');
    }


    function mobile() {
        navigation.classList.add('visually-hidden');
        openMenuBtn.classList.remove('visually-hidden');
        
    }
  


})
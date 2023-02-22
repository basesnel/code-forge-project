import debounce from 'lodash.debounce';

window.addEventListener(
  'resize',
  debounce(e => {
    console.log(resize());
  }, 1000)
);

function resize() {
  let weatherPosition = 0;
  if (window.innerWidth <= 768) {
    return 0;
  }

  if (window.innerWidth > 768 && window.innerWidth <= 1280) {
    return 1;
  }

  if (window.innerWidth > 1280) {
    return 2;
  }
}

export { resize };

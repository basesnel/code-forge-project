import debounce from 'lodash.debounce';
import { resize } from '../responsivity/resize';

const listNews = document.querySelector('.js-list-new');

window.addEventListener(
  'resize',
  debounce(e => {
    rebuild(resize());
  }, 1000)
);

export function rebuild(newPosition) {
  let oldPosition = 0;
  for (let i = 0; i < listNews.children.length; i++) {
    // if(listNews.shildren[i].child)
    if (listNews.children[i].children[0].classList.contains('weather')) {
      oldPosition = i;
      // console.log(`${oldPosition} => ${newPosition}`);
      break;
    }
  }

  const blockWeather = listNews.children[oldPosition];
  // console.log(blockWeather);

  switch (newPosition) {
    case 0:
      listNews.prepend(blockWeather);
      break;

    case 1:
      listNews.prepend(blockWeather);
      listNews.insertBefore(blockWeather, listNews.children[2]);
      break;

    case 2:
      listNews.insertBefore(blockWeather, listNews.children[3]);
      break;

    default:
      console.log('re-build position successed');
  }
}

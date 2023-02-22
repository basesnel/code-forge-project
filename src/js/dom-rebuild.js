import debounce from 'lodash.debounce';
import { resize } from '../resize';

window.addEventListener(
  'resize',
  debounce(e => {
    console.log(resize());
  }, 1000)
);

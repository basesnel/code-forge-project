import { save, load } from './locale-storage';
import { nowDataCreat } from './now-data';

const list = document.querySelector('.js-list-new');
const READ_KEY = 'read';

list.addEventListener('click', onAddBtnClick);

function onAddBtnClick(e) {
    if (e.target.classList.contains('news-card__news-link')) {
        let targetLi = e.target.parentNode.parentNode;
        targetLi.firstElementChild.firstElementChild.classList.remove('visually-hidden')
        targetLi.style.opacity = 0.7;
        addLiToArrayInLS(targetLi);
    }
}

function addLiToArrayInLS(targetLi) {
  if (load(READ_KEY) === undefined) {
    save(READ_KEY, []);
    }
    const id = targetLi.firstElementChild.getAttribute('id');
    const data = { dataRead: nowDataCreat(), dataString: `<li class="list-news__item">${targetLi.innerHTML}</li>`, id: id}
    const arr = load(READ_KEY)
    arr.push(data);
    save(READ_KEY, arr);
}

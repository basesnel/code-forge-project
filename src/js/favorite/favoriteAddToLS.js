import FavoriteLS from '../local-storage/localStorageClass';

export default () => {
  const refs = {
    favoriteList: document.querySelector('.js-list-new'),
  };

  //refs and variables
  const { favoriteList } = refs;
  const FavLS = new FavoriteLS();

  favoriteList.addEventListener('click', onAddBtnClick);

  //click handler
  function onAddBtnClick(e) {
    if (e.target.classList.contains('js-to-fav')) {
      btnAddToFavChanges(e);
      FavLS.addToFav(
        e.target.parentNode.parentNode.id,
        e.target.parentNode.parentNode.parentNode
      );
    } else if (e.target.classList.contains('js-from-fav')) {
      btnRemoveFromFavChanges(e);
      FavLS.removeFromFav(e.target.parentNode.parentNode.id);
    }
  }

  function btnAddToFavChanges(e) {
    e.target.firstElementChild.textContent = 'Remove from favorites';
    e.target.lastElementChild.firstElementChild.setAttribute('fill', '#4b48da');
    e.target.lastElementChild.firstElementChild.setAttribute(
      'style',
      'fill: var(--color1, #4b48da)'
    );

    e.target.classList.remove('js-to-fav');
    e.target.classList.add('js-from-fav');
  }

  function btnRemoveFromFavChanges(e) {
    e.target.firstElementChild.textContent = 'Add to favorites';
    e.target.lastElementChild.firstElementChild.setAttribute('fill', 'none');
    e.target.lastElementChild.firstElementChild.setAttribute(
      'style',
      'stroke: var(--color1, #4440f7)'
    );

    e.target.classList.remove('js-from-fav');
    e.target.classList.add('js-to-fav');
  }
};

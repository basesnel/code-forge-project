import { addArrayLengthOfResults } from './news-data/news-popular';
import onWindowResize from './news-data/function-of-resize-render';
import { async } from 'regenerator-runtime';
// кількість карток новин на сторінці
const newsPerPage = onWindowResize();

// Визначення кількості сторінок
export function getTotalNews(data) {
	// let totalItem = data;
	// let elementsInPages = newsPerPage;

	const ulTag = document.querySelector('.pagination__list');

	function element(totalPages, pages) {
		let liTag = '';
		if (page > 1) {
			liTag = `
			<li class="pagination__item">
				<button class="pagination__btn prev">
					<svg class="pagination__icon" width="24" height="24">
						<use href="./images/sprite.svg#icon-pagination-previous"></use>
					</svg>
					<span class="pagination__text">Prev</span>
				</button>
			</li>`;
		}

		ulTag.innerHTML = liTag;
	}
	element(20, 5);
}
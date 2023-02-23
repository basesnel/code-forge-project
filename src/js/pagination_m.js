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

	function element(totalPages, page) {
		let liTag = '';
		let activeBtn;
		let beforePages = page - 1;
		let afterPages = page + 1;

		if (page > 1) {
			liTag += `
			<li class="pagination__item">
				<button class="pagination__btn prev">
					<svg class="pagination__icon" viewBox="0 0 32 32" width="24" height="24">
						<path d="M14.437 16l6.6 6.6-1.885 1.885-8.485-8.485 8.485-8.485 1.885 1.885-6.6 6.6z"></path>
					</svg>
					<span class="pagination__text">Prev</span>
				</button>
			</li>`;
		}


		for (let pageLength = beforePages; pageLength <= afterPages; pageLength++){

			if (page === pageLength) {
				activeBtn = 'current';
			} else {
				activeBtn = '';
			}


			liTag += `
			<li class="pagination__item-numb ">
				<button class="pagination__btn-numb ${activeBtn}">
					${pageLength}
				</button>
			</li>`;
		}


		if (page < totalPages) {
			liTag += `
			<li class="pagination__item">
				<button class="pagination__btn next">
					<span class="pagination__text">Next</span>
					<svg class="pagination__icon" viewBox="0 0 32 32" width="24" height="24">
						<path d="M16.001 16l-3.556-3.555 1.777-1.779 5.334 5.333-5.334 5.333-1.777-1.779 3.556-3.555z"></path>
					</svg>
				</button>
			</li>`;
		}

		ulTag.insertAdjacentHTML('beforeend', liTag);
	}

	element(20, 5);
}
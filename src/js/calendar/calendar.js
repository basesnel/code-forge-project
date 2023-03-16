import { getCalendarDateForSearch } from '../news-data/news-by-search';
import { getCalendarDateBySearch } from '../news-data/news-by-search-by-date';
import { getCalendarDateByCategory } from '../news-data/news-search-by-category-by-date';
import { getCalendarDatePopular } from '../news-data/news-popular-by-date';
const refs = {
  calendarInput: document.querySelector('.js-calendar-input'),
  modal: document.querySelector('[data-calendar-modal]'),
  iconCalendar: document.querySelector('.calendar__icon-calendar'),
  iconCalendarOpen: document.querySelector('.calendar__icon-opened'),
  iconCalendarClose: document.querySelector('.calendar__icon-closed'),

  clickToBackdrop: document.querySelector('.backdrop'),

  // closeModalBtn: document.querySelector('[data-modal-close]'),
};

// відкриття закриття календаря
function openAndCloseCalendar() {
  refs.calendarInput.addEventListener('click', toggleModal);
}

openAndCloseCalendar();

// закриття календаря по кліку в бекдроп

refs.clickToBackdrop.addEventListener('click', closeCalendarClickToBackdrop);

function closeCalendarClickToBackdrop(evt) {
  if (evt.currentTarget === evt.target) {
    toggleModal();
  }
}

// Toggle class

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
  refs.calendarInput.classList.toggle('is-active');
  refs.iconCalendar.classList.toggle('change-color-icon');
  refs.iconCalendarOpen.classList.toggle('display-none');
  refs.iconCalendarClose.classList.toggle('display-active');
  refs.clickToBackdrop.classList.toggle('display-none');
}

// Вибір дати по кліку

const dateSelection = document.querySelector('[data-calendar-days]');

dateSelection.addEventListener('click', selectionDate);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

// обробка дати календаря
const daysTag = document.querySelector('.days');
const currentDate = document.querySelector('.current-month');
const prevNextIcon = document.querySelectorAll('.calendar__btn-wrapper button');

// getting new date, current year and month
let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();

// storing full name of all months in array
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const renderCalendar = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 0).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
  let liTag = '';
  for (let i = firstDayofMonth; i > 0; i--) {
    // creating li of previous month last days
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }
  for (let i = 1; i <= lastDateofMonth; i++) {
    // creating li of all days of current month
    // adding active class to li if the current day, month, and year matched
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? 'current'
        : '';
    liTag += `<li class="active ${isToday}">${i}</li>`;
  }
  for (let i = lastDayofMonth; i < 7; i++) {
    // creating li of next month first days
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }
  currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
  daysTag.innerHTML = liTag;
};
renderCalendar();
prevNextIcon.forEach(icon => {
  // getting prev and next icons
  icon.addEventListener('click', () => {
    // adding click event on both icons
    // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
    currMonth = icon.id === 'prev' ? currMonth - 1 : currMonth + 1;
    if (currMonth < 0 || currMonth > 11) {
      // if current month is less than 0 or greater than 11
      // creating a new date of current year & month and pass it as date value
      date = new Date(currYear, currMonth, new Date().getDate());

      currYear = date.getFullYear(); // updating current year with new date year
      currMonth = date.getMonth(); // updating current month with new date month
    } else {
      date = new Date(); // pass the current date as date value
    }

    renderCalendar(); // calling renderCalendar function
    selectedDayInInput();
  });
});
// =======================================
// Зміна року

const btnChangeOfYear = document.querySelector('.icon-month-forward');

btnChangeOfYear.addEventListener('click', changeOfYear);

function changeOfYear() {
  currYear = currYear - 1;

  renderCalendar();
  selectedDayInInput();
}

// =======================================

function selectionDate(evt) {
  if (
    evt.target.nodeName !== 'LI' ||
    evt.target.classList.contains('inactive')
  ) {
    return;
  }

  // Запис інформації в інпут

  const selectedItem = evt.target;
  const selectedList = evt.currentTarget.children;
  const selectedDateToInput = selectedItem.textContent;

  refs.calendarInput.value = `${addLeadingZero(
    selectedDateToInput
  )}/${addLeadingZero(currMonth + 1)}/${currYear}`;
  toggleModal();
  // дата для фільтру по пошуковому слові
  const dateForSearch = `${currYear}${addLeadingZero(
    currMonth + 1
  )}${addLeadingZero(selectedDateToInput)}`;
  // Виділення активної дати кольором

  selectedItem.classList.add('selected-date');

  Array.from(selectedList).map(element => {
    if (element.classList.contains('selected-date')) {
      element.classList.remove('selected-date');
      selectedItem.classList.add('selected-date');
    }
  });
  getCalendarDateForSearch(dateForSearch);
  getCalendarDatePopular(`${selectedDateToInput}/${currMonth + 1}/${currYear}`);
  getCalendarDateByCategory(
    `${selectedDateToInput}/${currMonth + 1}/${currYear}`
  );
  getCalendarDateBySearch(
    `${selectedDateToInput}/${currMonth + 1}/${currYear}`
  );
}

// =======================================
// фіксація дати в календарі

function selectedDayInInput() {
  let valueInput = refs.calendarInput.value;
  const currentNumberInInput = Number.parseInt(valueInput);

  if (typeof valueInput === Number) {
    return;
  }
  Array.from(daysTag.children).map(elem => {
    if (
      +elem.textContent === currentNumberInInput &&
      elem.classList.contains('active')
    ) {
      elem.classList.add('selected-date');
      valueInput = '';
      refs.calendarInput.value = `${addLeadingZero(
        currentNumberInInput
      )}/${addLeadingZero(currMonth + 1)}/${currYear}`;
    }
  });
}

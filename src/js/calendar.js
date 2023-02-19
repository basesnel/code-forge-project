const refs = {
  calendarInput: document.querySelector('[data-calendar-input]'),
  modal: document.querySelector('[data-calendar-modal]'),
  iconCalendar: document.querySelector('.calendar__icon-calendar'),
  iconCalendarOpen: document.querySelector('.calendar__icon-opened'),
  iconCalendarClose: document.querySelector('.calendar__icon-closed'),

  clickToBody: document.querySelector('body'),

  // closeModalBtn: document.querySelector('[data-modal-close]'),
};

// відкриття закриття календаря
(() => {
  refs.calendarInput.addEventListener('click', toggleModal);
  //   refs.closeModalBtn.addEventListener('click', toggleModal);
})();

// refs.clickToBody.addEventListener('click', closedModalCalendar);

// function closedModalCalendar(evt) {
//   if (refs.iconCalendar.classList === false) {
//     return;
//   }
//   toggleModal();
// }

// Toggle class

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
  refs.calendarInput.classList.toggle('is-active');
  refs.iconCalendar.classList.toggle('change-color-icon');
  refs.iconCalendarOpen.classList.toggle('display-none');
  refs.iconCalendarClose.classList.toggle('display-active');
}

// Вибір дати по кліку

const dateSelection = document.querySelector('[data-calendar-days]');

dateSelection.addEventListener('click', selectionDate);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

// обробка дати календаря
const daysTag = document.querySelector('.days'),
  currentDate = document.querySelector('.current-month');
prevNextIcon = document.querySelectorAll('.calendar__btn-wrapper button');

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
  });
});

// =======================================

function selectionDate(evt) {
  if (evt.target.nodeName !== 'LI') {
    return;
  }
  // Запис інформації в інпут
  const selectedItem = evt.target;
  let selectedDateToInput = selectedItem.textContent;

  refs.calendarInput.value = `${addLeadingZero(
    selectedDateToInput
  )}/${addLeadingZero(currMonth + 1)}/${currYear}`;
  toggleModal();

  // Виділення активної дати кольором

  // selectedItem.classList.add('selected-date');
}

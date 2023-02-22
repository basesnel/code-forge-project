import debounce from "lodash.debounce";
window.addEventListener('resize', debounce(onWindowResize, 300));

export default function onWindowResize(e) {
	let numberOfNewsCard = null;
	if (window.matchMedia("(min-width: 1280px)").matches) {
		numberOfNewsCard = 9;
	} else if (window.matchMedia("(min-width: 768px)").matches) {
		numberOfNewsCard = 8;
	} else {
		numberOfNewsCard = 5;
	}
	return numberOfNewsCard;
}
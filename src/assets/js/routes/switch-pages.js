console.log('switch-history init');
/* HISTORY */
const years = document.querySelectorAll('.slider-history__year');
const historyPages = document.querySelectorAll('.content-history__wrapper');
years.forEach((year) => year.addEventListener('click', switchHistory));

function switchHistory(e) {
	const elem = e.target;
	const index = Number(elem.dataset.index);
	if (historyPages[index].classList.contains('show')) return;
	historyPages.forEach(function (page) {
		if (page.classList.contains('show')) {
			page.classList.remove('show');
			page.classList.add('hide');
		}
	});
	years.forEach(function (year) {
		if (year.classList.contains('active')) {
			year.classList.remove('active');
		}
	});
	historyPages[index].classList.remove('hide');
	historyPages[index].classList.add('show');
	elem.classList.add('active');
}

/* TREATMENTS */
const treatmentsTypes = document.querySelectorAll('.treatments__link');
const treatmentsPages = document.querySelectorAll('.treatments__page');
treatmentsTypes.forEach((type) => type.addEventListener('click', switchTreatment));

function switchTreatment(e) {
	const elem = e.target;
	const index = Number(elem.dataset.index);
	if (treatmentsPages[index].classList.contains('show')) return;
	treatmentsPages.forEach(function (page) {
		if (page.classList.contains('show')) {
			page.classList.remove('show');
			page.classList.add('hide');
		}
	});
	treatmentsTypes.forEach(function (type) {
		if (type.classList.contains('active')) {
			type.classList.remove('active');
		}
	});
	treatmentsPages[index].classList.remove('hide');
	treatmentsPages[index].classList.add('show');
	elem.classList.add('active');
}

console.log('switch-history finalize');
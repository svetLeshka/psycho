console.log('open-more init');
let doctorsList = Array.from(document.querySelectorAll('.list-doctors__item'));
const doctorsMoreBtn = document.querySelector('.doctors__btn');

let newsList = Array.from(document.querySelectorAll('.list-news-main__item'));
const newsMoreBtn = document.querySelector('.news-main__btn');

if (doctorsMoreBtn) {
	doctorsMoreBtn.addEventListener('click', openMoreDoctors);
	openMoreDoctors();
}

if (newsMoreBtn) {
	newsMoreBtn.addEventListener('click', openMoreNews);
	openMoreNews();
}

function openMoreDoctors() {
	let itemsOpen = 0;
	doctorsList.some(function (item) {
		if (getComputedStyle(item).display == 'flex') itemsOpen++;
		else return true;
	});
	for (let i = 0; i < 6; i++) {
		if (itemsOpen + i == doctorsList.length) break;
		doctorsList[itemsOpen + i].style.display = 'flex';
	}
	if (itemsOpen + 6 >= doctorsList.length) doctorsMoreBtn.style.display = 'none';
}
function openMoreNews() {
	let itemsOpen = 0;
	newsList.some(function (item) {
		if (getComputedStyle(item).display == 'flex') itemsOpen++;
		else return true;
	});
	for (let i = 0; i < 6; i++) {
		if (itemsOpen + i == newsList.length) break;
		newsList[itemsOpen + i].style.display = 'flex';
	}
	if (itemsOpen + 6 >= newsList.length) newsMoreBtn.style.display = 'none';
}
console.log('open-more finalize');
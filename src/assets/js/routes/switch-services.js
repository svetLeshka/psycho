console.log('switch-services init');

const mainServices = document.querySelectorAll('.slider-services-main__link');
const servicesPages = document.querySelectorAll('.content-services-main__wrapper');
mainServices.forEach((service) => service.addEventListener('click', switchService));

function switchService(e) {
	const elem = e.target.closest('h6');
	const index = Number(elem.dataset.index);
	if (servicesPages[index].classList.contains('show')) return;
	servicesPages.forEach(function (page) {
		if (page.classList.contains('show')) {
			page.classList.remove('show');
			page.classList.add('hide');
		}
	});
	mainServices.forEach(function (service) {
		if (service.classList.contains('active')) {
			service.classList.remove('active');
		}
	});
	servicesPages[index].classList.remove('hide');
	servicesPages[index].classList.add('show');
	elem.classList.add('active');
}

console.log('switch-services finalize');
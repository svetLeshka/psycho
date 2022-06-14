import Swiper from 'swiper/bundle';
console.log('swiper-handle init');

/* SERVICES */
const swiperServices = new Swiper('.services__slider', {
	speed: 400,
	spaceBetween: 20,
	slidesPerView: 'auto',
	navigation: {
		nextEl: '.services-button-next',
		prevEl: '.services-button-prev',
	},
	pagination: {
		el: '.services-pagination',
		type: 'bullets',
		clickable: true,
	},
	breakpoints: {
		576: {
			spaceBetween: 20,
			slidesPerView: 2,
		},
		950: {
			spaceBetween: 30,
			slidesPerView: 3,
		}
	}
});
/* PROGRAMS */
const swiperPrograms = new Swiper('.programs__slider', {
	speed: 400,
	spaceBetween: 30,
	slidesPerView: 'auto',
	navigation: {
		nextEl: '.programs-button-next',
		prevEl: '.programs-button-prev',
	},
	pagination: {
		el: '.programs-pagination',
		type: 'bullets',
		clickable: true,
	},
	breakpoints: {
		900: {
			spaceBetween: 30,
			slidesPerView: 2,
		}
	}
});
/* REVIEW */
const swiperReview = new Swiper('.review__slider', {
	speed: 400,
	spaceBetween: 20,
	slidesPerView: 'auto',
	navigation: {
		nextEl: '.review-button-next',
		prevEl: '.review-button-prev',
	},
	breakpoints: {
		580: {
			spaceBetween: 30,
			slidesPerView: 2,
		}
	}
});
/* NEWS */
const swiperNews = new Swiper('.news__slider', {
	speed: 400,
	spaceBetween: 30,
	slidesPerView: 'auto',
	breakpoints: {
		768: {
			spaceBetween: 30,
			slidesPerView: 3,
		}
	}
});
/* HELP LINKS */
const swiperHelpLinks = new Swiper('.footer__slider', {
	speed: 400,
	spaceBetween: 20,
	slidesPerView: 'auto',
	navigation: {
		nextEl: '.footer-button-next',
		prevEl: '.footer-button-prev',
	},
	breakpoints: {
		768: {
			spaceBetween: 30,
		}
	}
});
/* GALLERY BUILDING */
const swiperBuilding = new Swiper('.gallery-building__slider', {
	speed: 400,
	spaceBetween: 20,
	slidesPerView: 1,
	preloadImages: false,
	lazy: true,
	navigation: {
		nextEl: '.building-button-next',
		prevEl: '.building-button-prev',
	},
	breakpoints: {
		580: {
			spaceBetween: 20,
			slidesPerView: 1,
		}
	}
});
/* HISTORY */
const swiperHistory = new Swiper('.history__slider', {
	speed: 400,
	spaceBetween: 20,
	slidesPerView: 'auto',
	enabled: true,
	longSwipes: false,
	breakpoints: {
		786: {
			enabled: false,
		}
	}
});
/* CONSULT PROVIDE */
const swiperConsults = new Swiper('.consult-provide__slider', {
	speed: 400,
	spaceBetween: 30,
	slidesPerView: 'auto',
	navigation: {
		nextEl: '.consult-provide-button-next',
		prevEl: '.consult-provide-button-prev',
	},
	pagination: {
		el: '.consult-provide-pagination',
		type: 'bullets',
		clickable: true,
	},
	breakpoints: {
		768: {
			spaceBetween: 30,
			slidesPerView: 2,
		}
	}
});
console.log('swiper-handle finalize');
export default {
	init() {
		console.log('swiper-handle init')
	},
	finalize() {
		console.log('swiper-handle finalize')
	}
}
console.log('menu-header init');
//search
const searchDesktopBtn = document.querySelector('.bottom-header__search');
const searchDesktop = document.querySelector('.search-desktop');
const searchDesktopCancel = document.querySelector('.search-desktop__cancel');
const searchMobileBtn = document.querySelector('.wrapper-menu__search');
const searchMobile = document.querySelector('.search-mobile');
const searchMobileCancel = document.querySelector('.search-mobile__cancel');
searchDesktopBtn.addEventListener('click', showSearch);
searchMobileBtn.addEventListener('click', showSearch);
searchDesktopCancel.addEventListener('click', hideSearch);
searchMobileCancel.addEventListener('click', hideSearch);

function showSearch(e) {
	if (document.body.clientWidth > 768) {
		searchDesktop.classList.add('active');
		window.addEventListener('click', hideSearch);
	} else searchMobile.classList.add('active');
	document.body.classList.add('lock');
	e.stopPropagation();
}
function hideSearch(e) {
	if (!e.target.closest('form') && document.body.clientWidth > 768) {
		searchDesktop.classList.remove('active');
		document.body.classList.remove('lock');
		window.removeEventListener('click', hideSearch);
	} else searchMobile.classList.remove('active');
}
//fixed menu
const fixedMenu = document.querySelector('.header__fixed-menu');
window.addEventListener('scroll', toggleMenu);

function toggleMenu(e) {
	if (document.body.clientWidth > 768) {
		if (!fixedMenu.classList.contains('active') && window.pageYOffset > 89) {
			fixedMenu.classList.add('active');
		} else if (fixedMenu.classList.contains('active') && window.pageYOffset < 90) {
			fixedMenu.classList.remove('active');
		}
	} else {
		if (!fixedMenu.classList.contains('active') && window.pageYOffset > 99) {
			fixedMenu.classList.add('active');
		} else if (fixedMenu.classList.contains('active') && window.pageYOffset < 100) {
			fixedMenu.classList.remove('active');
		}
	}
}
//desktop header
const menuDesktop = document.querySelector('.menu-desktop'),
	menuBtn = document.querySelector('.menu__btn'),
	menuList = document.querySelector('.menu__list'),
	submenu = document.querySelector('.submenu'),
	submenuWrapper = document.querySelector('.submenu__wrapper'),
	arrowBack = document.querySelector('.submenu__arrow-back'),
	listItems = Array.from(document.querySelectorAll('.list__item > h5'));


menuDesktop.addEventListener('click', openMenu, { once: true });
listItems.forEach((elem) => elem.addEventListener('click', openSubmenu));
arrowBack.addEventListener('click', openSubmenu);

function openMenu(e) {
	menuDesktop.classList.add('active');
	menuList.classList.add('active');
	menuBtn.addEventListener('click', closeMenu, { once: true });
	document.addEventListener('click', closeMenu);
	e.stopPropagation();
}

function closeMenu(e) {
	if (e.target.closest('.menu__list')) return;
	menuDesktop.classList.remove('active');
	menuList.classList.remove('active');
	menuBtn.addEventListener('click', openMenu, { once: true });
	document.removeEventListener('click', closeMenu);
}

function openSubmenu(e) {
	if (submenu.classList.contains('active')) {
		submenu.classList.remove('active');
		return;
	}
	const elem = e.target,
		index = elem.dataset.index;

	const content = document.querySelector('#submenu' + index).innerHTML;
	submenuWrapper.innerHTML = content;
	submenu.classList.add('active');
}

//mobile header
const mediaQueryList = window.matchMedia("(max-width: 767.77px)"),
	logo = document.querySelector('.middle-header__logo > a'),
	logoMobile = document.querySelector('.menu-mobile__img'),
	logoDesktop = document.querySelector('.middle-header__logo'),
	menuMobile = document.querySelector('.menu-mobile'),
	menuBurger = document.querySelector('.menu-mobile__burger'),
	menuBurgerFixed = document.querySelector('.menu-mobile__burger-fixed'),
	headerFixed = document.querySelector('.header__fixed-menu'),
	menuWrapper = document.querySelector('.menu-mobile__menu-wrapper'),
	buttonAttach = document.querySelector('.bottom-header__button'),
	middleHeader = document.querySelector('.middle-header__contacts'),
	bottomHeader = document.querySelector('.header__bottom'),
	iconsWrapper = document.querySelector('.wrapper-menu__icons'),
	iso = document.querySelector('.menu__img'),
	menuLinks = document.querySelector('.wrapper-menu__links'),
	linksItems = Array.from(document.querySelectorAll('.bottom-header__link')).reverse(),
	mobileListItems = Array.from(document.querySelectorAll('.list-mobile__item'));

sizeChanged(mediaQueryList);
mediaQueryList.addEventListener('change', sizeChanged);
menuBurger.addEventListener('click', openMenuMobile, { once: true });
menuBurgerFixed.addEventListener('click', openMenuMobile);
mobileListItems.forEach((node) => node.addEventListener('click', openSublist));

function sizeChanged(mql) {
	if (mql.matches) {
		logoMobile.prepend(logo);
		buttonAttach.innerHTML = `<a href="#" class="btn">Записаться</a>`;
		middleHeader.append(buttonAttach);
		iconsWrapper.prepend(iso);
		linksItems.forEach((node) => menuLinks.prepend(node));
	} else {
		logoDesktop.prepend(logo);
		buttonAttach.innerHTML = `<a href="#" class="btn">Записаться на прием</a>`;
		bottomHeader.append(buttonAttach);
		menuDesktop.append(iso);
		linksItems.forEach((node) => bottomHeader.prepend(node));
	}
}

function openMenuMobile(e) {
	headerFixed.classList.remove('active');
	menuBurger.classList.add('active');
	menuBurgerFixed.classList.add('active');
	menuWrapper.classList.add('active');
	document.body.classList.add('lock');
	menuBurger.addEventListener('click', closeMenuMobile, { once: true });
	e.stopPropagation();
}

function closeMenuMobile(e) {
	if (e.target.closest('.menu-mobile__menu-wrapper')) return;
	toggleMenu();
	menuBurger.classList.remove('active');
	menuBurgerFixed.classList.remove('active');
	menuWrapper.classList.remove('active');
	document.body.classList.remove('lock');
	menuBurger.addEventListener('click', openMenuMobile, { once: true });
}

function openSublist(e) {
	const elem = e.target.closest('.list-mobile__item'),
		index = elem.dataset.index,
		sublist = document.querySelector('#sublist' + index);

	let flag = mobileListItems.some(function (node) {
		const nodeIndex = node.dataset.index,
			nodeElem = document.querySelector('#sublist' + nodeIndex);
		if (nodeElem.style.maxHeight) {
			nodeElem.style.maxHeight = null;
			nodeElem.style.margin = null;
			node.classList.remove('active');
			if (node.dataset.index == index) return true;
			return false;
		}
	});
	if (flag) return;
	sublist.style.maxHeight = sublist.scrollHeight + 'px';
	sublist.style.margin = '20px 0 30px 0';
	elem.classList.add('active');
}

console.log('menu-header finalize');
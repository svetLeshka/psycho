// FIXES
import "./fixes"

import Router from './utils/Router';
import common from './routes/common';
import home from './routes/home';
import headerMenu from './routes/header-menu';
import swiperHandle from './routes/swiper-handle';
import wrapComment from './routes/wrap-comment';
import openTab from './routes/open-tab';
import openFooter from './routes/open-footer';
import switchPages from './routes/switch-pages';
import switchServices from './routes/switch-services';
import openMore from './routes/open-more';
import playVideo from './routes/play-video';

/** Populate Router instance with DOM routes */
const routes = new Router({
	common,
	home,
	headerMenu,
	swiperHandle,
	wrapComment,
	openTab,
	openFooter,
	switchPages,
	switchServices,
	openMore,
	playVideo,
})

window.addEventListener("DOMContentLoaded", () => {
	routes.loadEvents()
})
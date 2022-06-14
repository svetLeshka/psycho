console.log('play-video init');
const videoBtn = Array.from(document.querySelectorAll('.content-news-item__img-with-player'));
const videoWrapper = document.querySelector('.content-news-item__img-with-player');
let addedVideo = [];
if (videoBtn) videoBtn.forEach(elem => elem.addEventListener('click', showVideo));

function showVideo(e) {
	if (e.target.closest('.content-news-item__video.active')) return;
	document.body.classList.add('lock');
	window.addEventListener('click', hideVideo);
	const target = e.target.closest('.content-news-item__img-with-player');
	const src = target.dataset.src;
	for (let i = 0; i < addedVideo.length; i++) {
		if (addedVideo[i] == src) {
			document.querySelector(`iframe[src="https://www.youtube.com/embed/${src}?rel=0&showinfo=0&enablejsapi=1"]`)
				.closest('.content-news-item__video').classList.add('active');
			e.stopPropagation();
			return;
		}
	}
	const div = document.createElement("div");
	div.classList.add('content-news-item__video', 'active');
	const w = target.dataset.width;
	const h = target.dataset.height;
	const allow = target.dataset.allow;
	const iframe = document.createElement("iframe");
	iframe.setAttribute("frameborder", "0");
	iframe.setAttribute("width", w);
	iframe.setAttribute("height", h);
	iframe.style.maxWidth = '560px';
	iframe.style.maxHeight = '320px';
	iframe.setAttribute("allow", allow);
	iframe.setAttribute("allowfullscreen", '');
	iframe.setAttribute("src", "https://www.youtube.com/embed/" + src + "?rel=0&showinfo=0&enablejsapi=1");
	div.innerHTML = "";
	div.append(iframe);
	target.append(div);
	addedVideo.push(src);
	e.stopPropagation();
}
function hideVideo(e) {
	const curVideo = document.querySelector('.content-news-item__video.active');
	const curIfarme = curVideo.children[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
	document.body.classList.remove('lock');
	curVideo.classList.remove('active');
}
console.log('play-video finalize');
console.log('wrap-comment init');

let comms = Array.from(document.querySelectorAll('.content-review__text'), elem => Array.from([elem, 0])),
	mores = Array.from(document.querySelectorAll('.slide-review__more'));
wrapComm();
window.addEventListener('resize', wrapComm);
mores.forEach((elem) => elem.addEventListener('click', showComm));

function wrapComm() {
	comms.forEach(function (comm) {
		const lh = Number.parseInt(getComputedStyle(comm[0]).lineHeight);
		const mb = comm[0].style.marginBottom ? Number.parseInt(comm[0].style.marginBottom) : 0;
		const h = comm[0].clientHeight + mb;
		const countLines = Math.floor(h / lh);
		if (countLines == comm[1] || comm[1] === 'open') return;
		comm[1] = countLines;
		comm[0].style.lineClamp = countLines;
		comm[0].style.webkitLineClamp = countLines;
		comm[0].style.msLineClamp = countLines;
		comm[0].style.marginBottom = h - lh * countLines + 'px';
	});
}

function showComm(e) {
	const elem = e.target;
	const index = Number(elem.dataset.index);
	const text = comms[index][0];
	const parent = text.closest('div');
	comms[index][1] = 'open';
	text.style.lineClamp = '';
	text.style.webkitLineClamp = '';
	text.style.msLineClamp = '';
	text.style.marginBottom = '';
	parent.classList.add('open');
	parent.style.maxHeight = parent.scrollHeight - text.clientHeight + text.scrollHeight + 'px';
	parent.style.minHeight = parent.scrollHeight - text.clientHeight + text.scrollHeight + 'px';
	elem.hidden = true;
	setTimeout(() => {
		parent.style.maxHeight = '100%';
		parent.style.minHeight = 'auto';
	}, 500);
}

console.log('wrap-comment finalize');
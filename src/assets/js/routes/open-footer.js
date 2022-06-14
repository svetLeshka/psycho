console.log('open-sublist init');

const footerListItems = Array.from(document.querySelectorAll('.list-footer__title'));
footerListItems.forEach(item => item.addEventListener('click', openFooter));

function openFooter(e) {
	if (document.body.clientWidth > 768) return;
	const elem = e.target.closest('.list-footer__title'),
		index = elem.dataset.index,
		sublist = document.querySelector('#footer-sublist-' + index);

	let flag = footerListItems.some(function (node) {
		const nodeIndex = node.dataset.index,
			nodeElem = document.querySelector('#footer-sublist-' + nodeIndex),
			height = nodeElem.clientHeight;
		if (nodeElem.style.maxHeight) {
			nodeElem.style.maxHeight = null;
			nodeElem.style.margin = null;
			nodeElem.classList.remove('active');
			node.classList.remove('active');
			if (node.dataset.index == index) return true;
			return false;
		}
	});
	if (flag) return;
	sublist.style.maxHeight = sublist.scrollHeight + 'px';
	sublist.classList.add('active');
	elem.classList.add('active');
}

console.log('open-sublist finalize');
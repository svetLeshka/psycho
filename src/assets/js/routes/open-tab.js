console.log('open-faq init');
/* FAQ */
const FAQListItems = Array.from(document.querySelectorAll('.faq__question'));
FAQListItems.forEach(item => item.addEventListener('click', openFAQ));

function openFAQ(e) {
	const elem = e.target.closest('.faq__question'),
		index = elem.dataset.index,
		sublist = document.querySelector('#faq-sublist-' + index);

	let flag = FAQListItems.some(function (node) {
		const nodeIndex = node.dataset.index,
			nodeElem = document.querySelector('#faq-sublist-' + nodeIndex),
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
	sublist.style.maxHeight = sublist.scrollHeight + 1000 + 'px';
	sublist.classList.add('active');
	elem.classList.add('active');
}

/* SERVICE PSYCHIATRIST */
const psyListItems = Array.from(document.querySelectorAll('.service-list__title'));
const psyItemDescs = Array.from(document.querySelectorAll('.service-list__desc'));
psyListItems.forEach(item => item.addEventListener('click', openHelpPsy));

function openHelpPsy(e) {
	const elem = e.target.closest('.service-list__title'),
		index = Number(elem.dataset.index),
		sublist = psyItemDescs[index];

	let flag = psyListItems.some(function (node) {
		const nodeIndex = Number(node.dataset.index),
			nodeElem = psyItemDescs[nodeIndex],
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
	sublist.style.maxHeight = sublist.scrollHeight + 500 + 'px';
	sublist.classList.add('active');
	elem.classList.add('active');
}
console.log('open-faq finalize');
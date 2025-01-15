const cards = document.querySelectorAll('.card'),
	titleDev = document.querySelectorAll('footer h2');

window.onload = cards.forEach(card => {
	card.style.setProperty(
		'--thumb-var-1',
		`url(../images/${card.dataset.thumb.match(/\w+/)}/${
			card.dataset.thumb
		}.jpg)`
	);

	if (card.dataset.thumbAlt)
		card.style.setProperty(
			'--thumb-var-2',
			`url(../images/${card.dataset.thumb.match(/\w+/)}/${
				card.dataset.thumbAlt
			}.jpg)`
		);
});

titleDev.forEach(title =>
	title.addEventListener('click', e => {
		e.target.firstElementChild.classList.toggle('fa-plus');
		e.target.firstElementChild.classList.toggle('fa-minus');

		const list = e.target.nextElementSibling;

		if (list.id === 'developed') {
			list.removeAttribute('id');
			list.removeAttribute('style');
			return;
		}

		list.id = 'developed';
		list.style.height = list.scrollHeight + 'px';
	})
);

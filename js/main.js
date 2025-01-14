const cards = document.querySelectorAll('.card');

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

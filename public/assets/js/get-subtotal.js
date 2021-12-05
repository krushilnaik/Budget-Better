function updateSubtotal() {
	const allEvents = document.querySelectorAll('.event');
	allEvents.forEach(event => {
		let budgetNumber = parseFloat(
			event.querySelector('.budget .value').innerHTML.replaceAll(',', '')
		);
		let budgetEl = event.querySelector('.total .value');
		let subtotal = 0;
		event.querySelectorAll('.item-list .price').forEach(price => {
			const subprice = Number(price.textContent.split('$')[1].trim());
			if (price.previousElementSibling.previousElementSibling.checked) {
				subtotal += subprice;
			}
		});

		if (subtotal > budgetNumber) {
			budgetEl.parentElement.classList.add('over-budget');
		} else {
			budgetEl.parentElement.classList.remove('over-budget');
		}

		const previousTotal = budgetEl.innerHTML;

		anime({
			targets: budgetEl,
			innerHTML: [previousTotal, subtotal],
			easing: 'easeInOutExpo',
			round: 100,
			duration: 500
		});
	});
}

const checkboxEl = document.querySelectorAll('.include');
checkboxEl.forEach(element => {
	element.addEventListener('change', async event => {
		const id = event.target.id.split('-').splice(-1);

		updateSubtotal();

		const body = {
			include: event.target.checked
		};

		await fetch(`/api/items/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		});
	});
});
updateSubtotal();

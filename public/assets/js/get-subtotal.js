function updateSubtotal() {
	const allEvents = document.querySelectorAll('.event');

    // Calculate subtotal of items that are included for each event
	allEvents.forEach(event => {
		let budgetNumber = parseFloat(
			event.querySelector('.budget').innerHTML.replaceAll(',', '')
		);
		let budgetEl = event.querySelector('.total .value');
		let subtotal = 0;
		event.querySelectorAll('.item-list .price').forEach(price => {
			const subprice = Number(price.textContent.split('$')[1].trim());
			if (price.previousElementSibling.previousElementSibling.checked) {
				subtotal += subprice;
			}
		});

        // Update stylings to be dynamic when subtotal is over or under budget
		if (subtotal > budgetNumber) {
			budgetEl.parentElement.classList.add('over-budget');
		} else {
			budgetEl.parentElement.classList.remove('over-budget');
		}

		const previousTotal = budgetEl.innerHTML;

        // Cool animation
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

// When checkboxes are clicked
checkboxEl.forEach(element => {
	element.addEventListener('change', async event => {
		const id = event.target.id.split('-').splice(-1);
		const include = element.checked;

		element.previousElementSibling.querySelector('i').className = `fas fa-eye${
			include ? '' : '-slash'
		}`;

		updateSubtotal();
        
        // Update backend with include changes
		await fetch(`/api/items/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ include })
		});
	});
});

// Default call to populate first display
updateSubtotal();

async function newFormHandler(event_id, name, price) {

	// Call POST API
	const response = await fetch(`/api/items`, {
		method: 'POST',
		body: JSON.stringify({
			name,
			price,
			event_id
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	});

	// Action after POST call
	if (response.ok) {
		document.location.replace('/dashboard');
	} else {
		alert(response.statusText);
	}
}

// Create event listener for all add item buttons 
document.querySelectorAll('.item-wrapper').forEach(form => {
	const button = form.querySelector('button');

	// Populate JSON body content
	const id = button.id.split('-').splice(-1)[0];
	const name = form.querySelector('input[id^="new-name"]');
	const price = form.parentElement.querySelector('input[id^="new-price"]');

	button.addEventListener('click', event => {
		event.preventDefault();

		newFormHandler(Number(id), name.value, Number(price.value));
	});
});

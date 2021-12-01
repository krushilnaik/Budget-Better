async function newFormHandler(event_id, name, price) {
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

	if (response.ok) {
		document.location.replace('/dashboard');
	} else {
		alert(response.statusText);
	}
}

// console.log(document.querySelectorAll('.item-wrapper'));

document.querySelectorAll('.item-wrapper').forEach(form => {
	const button = form.querySelector('button');

	const id = button.id.split('-').splice(-1)[0];

	const name = form.querySelector('input[id^="new-name"]');
	const price = form.parentElement.querySelector('input[id^="new-price"]');

	name.addEventListener('input', event => {
		event.preventDefault();

		console.log(name.value);
	});

	price.addEventListener('input', event => {
		event.preventDefault();

		console.log(price.value);
	});

	button.addEventListener('click', event => {
		event.preventDefault();

		console.log('click registered');

		newFormHandler(Number(id), name.value, Number(price.value));
	});
});

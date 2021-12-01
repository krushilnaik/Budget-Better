async function deleteFormHandler(eventId) {
	// const eventId = window.location.toString().split('/')[
	//     window.location.toString().split('/').length - 1
	// ];

	const response = await fetch(`/api/events/${eventId}`, {
		method: 'DELETE'
	});

	if (response.ok) {
		document.location.replace('/dashboard');
	} else {
		alert(response.statusText);
	}
}

document
	.querySelectorAll('.event-wrapper button[id^="delete-event"]')
	.forEach(button => {
		console.log(button);

		const id = button.id.split('-').splice(-1);

		button.addEventListener('click', event => {
			event.preventDefault();
			deleteFormHandler(id);
		});
	});

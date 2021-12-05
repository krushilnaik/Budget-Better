async function deleteFormHandler(eventId) {
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
		const id = button.id.split('-').splice(-1);

		button.addEventListener('click', event => {
			event.preventDefault();
			deleteFormHandler(id);
		});
	});

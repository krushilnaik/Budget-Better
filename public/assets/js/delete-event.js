async function deleteFormHandler(eventId) {
	// Call DELETE API
	const response = await fetch(`/api/events/${eventId}`, {
		method: 'DELETE'
	});

	// Action after DELETE API
	if (response.ok) {
		document.location.replace('/dashboard');
	} else {
		alert(response.statusText);
	}
}

// Add event listener for all delete event buttons
document
	.querySelectorAll('.event-wrapper button[id^="delete-event"]')
	.forEach(button => {
		const id = button.id.split('-').splice(-1);

		button.addEventListener('click', event => {
			event.preventDefault();
			deleteFormHandler(id);
		});
	});

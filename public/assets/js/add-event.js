async function newFormHandler(event) {
	event.preventDefault();

	const title = document.querySelector('#eventName').value;
	const date = document.querySelector('#eventDate').value;
	const budget = document.querySelector('#eventBudget').value;

	const response = await fetch(`/api/events`, {
		method: 'POST',
		body: JSON.stringify({
			title,
			date,
			budget
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

document.querySelector('.submit').addEventListener('click', newFormHandler);

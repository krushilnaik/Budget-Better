async function newFormHandler(event) {
	event.preventDefault();

	// Populate JSON body content
	const title = document.querySelector('#eventName').value;
	const date = document.querySelector('#eventDate').value;
	const budget = document.querySelector('#eventBudget').value;

	// Call Post API
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

	// Action after POST call
	if (response.ok) {
		document.location.replace('/dashboard');
	} else {
		alert(response.statusText);
	}
}

// When button is clicked, call funciton above
document.querySelector('.submit').addEventListener('click', newFormHandler);

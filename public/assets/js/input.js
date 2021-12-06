document.querySelectorAll('div.input').forEach(input => {
	console.log(input);
	input.querySelector('input').addEventListener('input', event => {
		if (event.currentTarget.value.length === 0) {
			input.classList.remove('active');
		} else {
			input.classList.add('active');
		}
	});
});

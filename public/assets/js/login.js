const login = document.querySelector('.login');
const toggleButton = document.getElementById('toggle');
const submitButton = document.getElementById('submit');

function toggle() {
	const result = login.classList.toggle('register');

	setTimeout(() => {
		if (result) {
			login.querySelector('h2').innerText = 'Join us!';
			login.querySelector('h3').innerHTML = /*html*/ `
				Already a member?
				<button id='toggle' onclick='toggle();'>Log in.</button>
			`;
		} else {
			login.querySelector('h2').innerText = 'Log in here!';
			login.querySelector('h3').innerHTML = /*html*/ `
				Not a member?
				<button id='toggle' onclick='toggle();'>Sign up.</button>
			`;
		}
	}, 120);
}

submitButton.addEventListener('click', event => {
	event.preventDefault();
});

const login = document.querySelector('.login');
const toggleButton = document.getElementById('toggle');
const submitButton = document.getElementById('submit');

// Function to toggle between signing up and logging in 
function toggle() {
	const result = login.classList.toggle('register');

	setTimeout(() => {
		if (result) {
			login.querySelector('h2').innerText = 'Join us!';
			login.querySelector('h3').innerHTML = /*html*/ `
				<span>Already a member?</span>
				<button id='toggle' onclick='toggle();'>Log in.</button>
			`;
		} else {
			login.querySelector('h2').innerText = 'Log in here!';
			login.querySelector('h3').innerHTML = /*html*/ `
				<span>Not a member?</span>
				<button id='toggle' onclick='toggle();'>Sign up.</button>
			`;
		}
	}, 120);
}

async function loginFormHandler(event) {
	event.preventDefault();

	// Get input values
	const email = document.querySelector('#email').value.trim();
	const password = document.querySelector('#password').value.trim();

	// Sign up 
	if (login.classList.contains("register")) {
		if (email && password) {
			const response = await fetch('/api/users', {
				method: 'post',
				body: JSON.stringify({
					email,
					password
				}),
				headers: { 'Content-Type': 'application/json' }
			});
	
			if (response.ok) {
				document.location.replace("/");
			}
			else {
				alert(response.statusText);
			}
		}
	}

	// Log in
	else {
		if (email && password) {
			const response = await fetch('/api/users/login', {
				method: 'post',
				body: JSON.stringify({
					email,
					password
				}),
				headers: { 'Content-Type': 'application/json' }
			});
	
			if (response.ok) {
				document.location.replace("/");
			}
			else {
				alert(response.statusText);
			}
		};
	};	
};

// Event listener for when login or signup info is submitted
document.querySelector(".form").addEventListener("submit", loginFormHandler);

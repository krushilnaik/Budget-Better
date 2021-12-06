async function logout() {
    // POST API call to logout user
    const response = await fetch('/api/users/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });

    // Action after POST API 
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}

// Listen to logout button
document.querySelector('#logout').addEventListener('click', logout);
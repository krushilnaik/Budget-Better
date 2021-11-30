async function deleteFormHandler(event) {
    event.preventDefault();

    // const eventId = window.location.toString().split('/')[
    //     window.location.toString().split('/').length - 1
    // ];

    const response = await fetch(`/api/events/${eventId}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        //document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

//document.querySelector('UPDATE').addEventListener('submit', deleteFormHandler);

async function deleteFormHandler(event) {
    event.preventDefault();

    // const itemId = event.getAttribute('UPDATE')

    // const eventId = window.location.toString().split('/')[
    //     window.location.toString().split('/').length - 1
    // ];

    const response = await fetch(`/api/items/${itemId}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        //document.location.replace('/dashboard/event/${eventId}'); // Refresh the page
    } else {
        alert(response.statusText);
    }
}

//document.querySelector('UPDATE').addEventListener('submit', deleteFormHandler);

async function deleteItemHandler(itemId) {
    // Call DELETE API
    const response = await fetch(`/api/items/${itemId}`, {
        method: 'DELETE',
    });

    // Reponse after DELETE API
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
};

// Create event listener for all delete item buttons
document
    .querySelectorAll(".all-items button[id^='delete-item']")
    .forEach(button => {
        const id = button.id.split("-").splice(-1);

        button.addEventListener("click", event => {
            event.preventDefault();
            deleteItemHandler(id);
        });
    });
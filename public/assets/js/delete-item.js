async function deleteItemHandler(itemId) {
    const response = await fetch(`/api/items/${itemId}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        document.location.replace('/dashboard');
        console.log("yay");
    } else {
        alert(response.statusText);
    }
};

document
    .querySelectorAll(".all-items button[id^='delete-item']")
    .forEach(button => {
        const id = button.id.split("-").splice(-1);

        button.addEventListener("click", event => {
            event.preventDefault();
            deleteItemHandler(id);
        });
    });
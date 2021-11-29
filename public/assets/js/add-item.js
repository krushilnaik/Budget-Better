async function newFormHandler(event) {
    event.preventDefault();
  
    // const itemName = document.querySelector('UPDATE').value;
    // const itemPrice = document.querySelector('UPDATE').value;
    // const eventId = document.querySelector('UPDATE').value;
  
    const response = await fetch(`/api/items`, {
      method: 'POST',
      body: JSON.stringify({
        itemName,
        itemPrice,
        eventId
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      //document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
//document.querySelector('UPDATE').addEventListener('submit', newFormHandler);
  
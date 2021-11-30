async function newFormHandler(event) {
    event.preventDefault();
  
    const eventName = document.querySelector('#eventName').value;
    //const eventDate = document.querySelector('UPDATE').value;
    //const eventBudget = document.querySelector('UPDATE').value;
  
    const response = await fetch(`/api/events`, {
      method: 'POST',
      body: JSON.stringify({
        eventName,
        eventDate,
        eventBudget
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      // document.location.replace('/UPDATE');
    } else {
      alert(response.statusText);
    }
  }
  
  // document.querySelector('UPDATE').addEventListener('submit', newFormHandler);
  
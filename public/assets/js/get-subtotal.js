function forLoop() {
    const allEvents = document.querySelectorAll(".event");
    allEvents.forEach(event => {
        let subtotal = 0;
        event.querySelectorAll('.item-list .price').forEach(price => {
            const subprice = Number(price.textContent.split('$')[1].trim());
            subtotal+=subprice;
        });
        // console.log(subtotal);
        event.querySelector('.total').textContent = 'Current subtotal: $ ' + subtotal;
    })
}

forLoop();
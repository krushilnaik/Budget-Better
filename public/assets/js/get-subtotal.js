function updateSubtotal() {
    const allEvents = document.querySelectorAll(".event");
    allEvents.forEach(event => {
        let subtotal = 0;
        event.querySelectorAll('.item-list .price').forEach(price => {
            const subprice = Number(price.textContent.split('$')[1].trim());
            if (price.previousSibling.previousSibling.checked){
                subtotal+=subprice;
            }
        });
        if (subtotal )
        event.querySelector('.total').textContent = 'Current subtotal: $ ' + subtotal;
    })
}

const checkboxEl = document.querySelectorAll(".include");
checkboxEl.forEach(element => {
    element.addEventListener("change", updateSubtotal);
})
updateSubtotal();
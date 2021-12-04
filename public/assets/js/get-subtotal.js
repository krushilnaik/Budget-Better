function updateSubtotal() {
    const allEvents = document.querySelectorAll(".event");
    allEvents.forEach(event => {
        let budgetNumber = parseFloat(event.querySelector(".budget").textContent.split("$")[1].trim().replace(",", ""));
        let budgetEl = event.querySelector(".total");
        let subtotal = 0;
        event.querySelectorAll('.item-list .price').forEach(price => {
            const subprice = Number(price.textContent.split('$')[1].trim());
            if (price.previousSibling.previousSibling.checked){
                subtotal+=subprice;
            }
        });
        if (subtotal > budgetNumber) {
            budgetEl.classList.add("over-budget");
        }
        else {
            budgetEl.classList.remove("over-budget");
        }

        budgetEl.textContent = 'Current subtotal: $ ' + subtotal;
    })
}

const checkboxEl = document.querySelectorAll(".include");
checkboxEl.forEach(element => {
    element.addEventListener("change", updateSubtotal);
})
updateSubtotal();
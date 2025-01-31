let total = 0;

function addItem() {
    const itemName = document.getElementById('itemName').value;
    const itemPrice = parseFloat(document.getElementById('itemPrice').value);

    if (itemName && !isNaN(itemPrice) && itemPrice > 0) {
        const itemList = document.getElementById('items');
        const li = document.createElement('li');
        li.textContent = `${itemName} - $${itemPrice.toFixed(2)}`;
        itemList.appendChild(li);

        total += itemPrice;
        document.getElementById('totalAmount').textContent = total.toFixed(2);

        // Clear inputs
        document.getElementById('itemName').value = '';
        document.getElementById('itemPrice').value = '';
    } else {
        alert('Por favor, insira um nome válido para o item e um preço válido.');
    }
}

function calculateChange() {
    const payment = parseFloat(document.getElementById('payment').value);

    if (!isNaN(payment) && payment >= total) {
        const change = payment - total;
        document.getElementById('change').textContent = change.toFixed(2);
    } else if (payment < total) {
        alert('O valor pago não é suficiente para cobrir o total.');
    } else {
        alert('Por favor, insira um valor de pagamento válido.');
    }
}

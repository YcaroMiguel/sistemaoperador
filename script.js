// Definindo a versão
document.getElementById('version').textContent = '1.0.0';  // Aqui você pode atualizar a versão quando necessário

let total = 0;

function addItem() {
    const itemName = document.getElementById('itemName').value;
    const itemPrice = parseFloat(document.getElementById('itemPrice').value);

    if (itemName && !isNaN(itemPrice) && itemPrice > 0) {
        const itemList = document.getElementById('items');
        const li = document.createElement('li');
        li.textContent = `${itemName} - $${itemPrice.toFixed(2)}`;

        // Criando o botão de remover
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-item');
        removeButton.onclick = function() {
            removeItem(itemPrice, li);
        };

        li.appendChild(removeButton);
        itemList.appendChild(li);

        total += itemPrice;
        document.getElementById('totalAmount').textContent = total.toFixed(2);

        // Limpar os campos de entrada
        document.getElementById('itemName').value = '';
        document.getElementById('itemPrice').value = '';
    } else {
        alert('Please enter a valid item name and price.');
    }
}

function removeItem(itemPrice, li) {
    total -= itemPrice;
    document.getElementById('totalAmount').textContent = total.toFixed(2);

    // Remover o item da lista
    li.remove();
}

function calculateChange() {
    const payment = parseFloat(document.getElementById('payment').value);

    if (!isNaN(payment) && payment >= total) {
        const change = payment - total;
        document.getElementById('change').textContent = change.toFixed(2);
    } else if (payment < total) {
        alert('The payment is not enough to cover the total.');
    } else {
        alert('Please enter a valid payment amount.');
    }
}

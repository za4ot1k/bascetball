document.querySelectorAll('.cart__amount-block').forEach(block => {
    const minusBtn = block.querySelector('.cart__minus');
    const plusBtn = block.querySelector('.cart__plus');
    const amountDisplay = block.querySelector('.cart__amount');
    let amount = parseInt(amountDisplay.textContent);
    
    // Обробник для зменшення кількості
    minusBtn.addEventListener('click', () => {
        if (amount > 1) {
            amount--;
            amountDisplay.textContent = amount;
            updateCartItem(block, amount);
        }
    });
    
    // Обробник для збільшення кількості
    plusBtn.addEventListener('click', () => {
        amount++;
        amountDisplay.textContent = amount;
        updateCartItem(block, amount);
    });
});

function updateCartItem(blockElement, newQuantity) {
    // Знаходимо батьківський елемент товару
    const cartItem = blockElement.closest('.cart-item');
    const productId = cartItem.dataset.productId;
    
    // Оновлюємо дані в LocalStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemIndex = cart.findIndex(item => item.id === productId);
    
    if (itemIndex !== -1) {
        cart[itemIndex].quantity = newQuantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Оновлюємо ціну в реальному часі
        updateItemPrice(cartItem, cart[itemIndex].price, newQuantity);
        updateCartTotal();
    }
}

function updateItemPrice(itemElement, unitPrice, quantity) {
    const priceElement = itemElement.querySelector('.cart-item-price');
    const totalPrice = unitPrice * quantity;
    priceElement.textContent = `$${totalPrice.toFixed(2)}`;
}

function updateCartTotal() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    document.querySelector('.cart-subtotal .value').textContent = `$${subtotal.toFixed(2)}`;
    document.querySelector('.cart-total .value').textContent = `$${subtotal.toFixed(2)}`;
}
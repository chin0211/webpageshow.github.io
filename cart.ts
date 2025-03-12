document.addEventListener('DOMContentLoaded', function() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceContainer = document.getElementById('total-price');
    const payNowButton = document.getElementById('pay-now');
    const paymentStatusContainer = document.getElementById('payment-status');

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        payNowButton.disabled = true; // Disable payment button if cart is empty
    } else {
        let totalPrice = 0;
        cartItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');

            // Item HTML
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" style="width: 100px; height: auto;">
                <div>
                    <h4>${item.name}</h4>
                    <p>Price: $${item.price}</p>
                </div>
            `;

            cartItemsContainer.appendChild(itemElement);
            totalPrice += item.price;
        });

        totalPriceContainer.textContent = `Total Price: $${totalPrice}`;
    }

    // Payment button click event
    payNowButton.addEventListener('click', function() {
        if (cartItems.length > 0) {
            // Simulate payment process
            setTimeout(() => {
                paymentStatusContainer.textContent = "Payment Successful! Thank you for your purchase.";
                localStorage.removeItem('cart'); // Clear cart after payment
            }, 1000); // Simulates payment delay
        }
    });
});
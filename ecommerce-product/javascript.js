// script.js

// Handle Add to Cart functionality
const addToCartButton = document.querySelector('.add-to-cart');
const quantityInput = document.querySelector('.quantity-selector input');
const cartDropdown = document.querySelector('.cart-dropdown');
let cartItems = [];

addToCartButton.addEventListener('click', () => {
    const productName = document.querySelector('.product-info h1').textContent;
    const productPrice = document.querySelector('.current-price').textContent;
    const quantity = parseInt(quantityInput.value);

    if (quantity > 0) {
        const cartItem = {
            name: productName,
            price: productPrice,
            quantity: quantity
        };

        cartItems.push(cartItem);
        updateCartDropdown();
        alert(`${productName} has been added to your cart!`);
    } else {
        alert('Please select a valid quantity.');
    }
});

// Update the cart dropdown display
function updateCartDropdown() {
    cartDropdown.innerHTML = '';

    if (cartItems.length === 0) {
        cartDropdown.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        const cartList = document.createElement('ul');
        cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - ${item.quantity} x ${item.price}`;
            cartList.appendChild(listItem);
        });
        cartDropdown.appendChild(cartList);
    }
}

// Handle quantity adjustments
const decreaseButton = document.querySelector('.quantity-selector .decrease');
const increaseButton = document.querySelector('.quantity-selector .increase');

decreaseButton.addEventListener('click', () => {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
});

increaseButton.addEventListener('click', () => {
    let currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
});
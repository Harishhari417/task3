let cartItems = [];

function addToCart(productName, price, imageUrl) {
   
    cartItems.push({ productName, price, imageUrl });
    
    window.location.href = 'cart.html';
}

function viewCart() {
    
    window.location.href = 'viewcart.html';
}


document.querySelectorAll('.product-details button[onclick="viewCart()"]').forEach(function(button) {
    button.addEventListener('click', viewCart);
});

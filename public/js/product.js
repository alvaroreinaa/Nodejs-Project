URL_CART = 'http://localhost:3000/cart'
URL_ADD_PRODUCT = 'http://localhost:3000/add-product/'

// Product id to add
productId = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

// Wait until de DOM Content is loaded
document.addEventListener('DOMContentLoaded', () => {

    // Handle the click button
    document.getElementById('button_add').addEventListener("click", () => {
        addProductToCart();
    });
});

// Add the product to the user cart
function addProductToCart() {
    fetch(URL_ADD_PRODUCT + productId, {
        method: 'PUT'
    }).then( () => {
        window.location.href = URL_CART;
    }).catch(err => alert(err));
}

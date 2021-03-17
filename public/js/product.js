URL_CART = 'http://localhost:3000/cart'
URL_ADD_PRODUCT = 'http://localhost:3000/add-product/'
productId = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('button_add').addEventListener("click", () => {
        addProductToCart();
    });
});

// Function that add the product to the user cart
function addProductToCart() {
    console.log(URL_ADD_PRODUCT + productId);
    fetch(URL_ADD_PRODUCT + productId, {
        method: 'PUT'
    }).then( () => {
        window.location.href = URL_CART;
    }).catch(err => alert(err));
}

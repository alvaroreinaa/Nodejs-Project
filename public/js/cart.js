URL_PRODUCTS = window.location.origin + '/products/1'
URL_BUY = window.location.origin + '/purchase'

// Wait until de DOM Content is loaded
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('button_buy').addEventListener("click", () => {
        buyProducts();
    });
});

// Add the product to the user cart
function buyProducts() {
    fetch(URL_BUY, {
        method: 'POST'
    }).then( () => {
        window.location.href = URL_PRODUCTS;
    }).catch(err => alert(err));
}

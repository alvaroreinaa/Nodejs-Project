// Pagination of the products lists
URL_PRODUCTS = 'http://localhost:3000/products/'
page = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
page = parseInt(page)

// URL for searched products
URL_SEARCHED_PRODUCTS = 'http://localhost:3000/searched_products/'

document.addEventListener('DOMContentLoaded', () => {
    var productName = document.getElementById("productName");
    var lowerPriceProduct = document.getElementById("lowerPriceProduct");
    var higherPriceProduct = document.getElementById("higherPriceProduct");

    document.getElementById('previous_page').addEventListener("click", () => {
        getDataPage(page - 1 < 1 ? page : page - 1);
    });

    document.getElementById('next_page').addEventListener("click", () => {
        getDataPage(page + 1);
    });

    document.getElementById('search').addEventListener("click", () => {
        if (productName.value) {
            searchByName(productName.value);
        } else if (lowerPriceProduct.value && higherPriceProduct.value) {
            searchByPrice(lowerPriceProduct.value, higherPriceProduct.value);
        }
    });

    // Only search with one option: name or price
    productName.oninput = function () {
        lowerPriceProduct.disabled = this.value != "";
        higherPriceProduct.disabled = this.value != "";
    }

    lowerPriceProduct.oninput = function () {
        productName.disabled = this.value != "";
    }

    higherPriceProduct.oninput = function () {
        productName.disabled = this.value != "";
    }
});


// Redirect to the appropiate page
function getDataPage(page) {
    window.location.href = URL_PRODUCTS + page;
}

// Search for product name
function searchByName(name) {
    window.location.href = URL_SEARCHED_PRODUCTS + name;
}

// Search by price range
function searchByPrice(lowerPrice, higherPrice) {
    window.location.href = URL_SEARCHED_PRODUCTS + lowerPrice + '/' + higherPrice;
}
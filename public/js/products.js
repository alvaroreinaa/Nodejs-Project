// Pagination of the products lists
page = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
page = parseInt(page)

URL_PRODUCTS = 'http://localhost:3000/products/'
URL_SEARCHED_PRODUCTS = 'http://localhost:3000/searched_products/'

// Wait until de DOM Content is loaded
document.addEventListener('DOMContentLoaded', () => {
    var productName = document.getElementById("productName");
    var lowerPriceProduct = document.getElementById("lowerPriceProduct");
    var higherPriceProduct = document.getElementById("higherPriceProduct");

    // Handle the clicks of the differents buttons
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

// Load the specific page indicate
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

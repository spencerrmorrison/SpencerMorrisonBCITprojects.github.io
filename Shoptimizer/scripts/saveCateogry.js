/* Locally stores the selected product and redirects to the product page */
function saveSearchFromUser2() {
    document.getElementById("compare1").addEventListener('click', function () {
        item = "Samsung Galaxy S10 128G";
        
        window.location.href = "searchProduct.html"

        localStorage.setItem("item", item);
    });
}
saveSearchFromUser2();


/* Notifies the user if there is an error finding the product they searched for */
setTimeout(function () {
    function notFound() {
        if (document.getElementById("prodName").innerText === "Loading...") {
            document.getElementById("prodName").innerText = "Error 404 product not found";
        }
    }
    notFound();
}, 1700); 
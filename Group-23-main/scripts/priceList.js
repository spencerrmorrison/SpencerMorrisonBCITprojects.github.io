var name = localStorage.getItem("item");
var limit;

/* Reads the list of products from the database. */
var promise = db.collection("products")
    .get()
    .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            /* Casts the product list into an array. */
            products = Object.values(doc.data());
            console.log(products);
        });
    })
    .catch(function (error) {
        console.log("Error getting documents: ", error);
    });;

var link;
var div;
var storeList;

/* Reads the list of prices for the searched product from the database. */
function getPriceList() {
    db.collection("prices").doc(name)
        .get()
        .then(function (doc) {
            console.log(doc.data());

            /* Casts all the stores into an array */
            storeList = Object.keys(doc.data());
            console.log(storeList);

            /* Casts all the prices into an array */
            var priceList = Object.values(doc.data());
            console.log(priceList);

            div = document.getElementById('priceTable');

            limit = storeList.length;

            /* Add every store and their matching price to the table of stores and prices */
            for (var i = 0; i < limit; i++) {
                var price = priceList[i];
                var store = storeList[i];

                div.innerHTML += "<tr><th scope='row'>" + store + "</th><td>$" + price + "</td> <td><svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-geo-alt' fill='currentColor'xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd'd='M12.166 8.94C12.696 7.867 13 6.862 13 6A5 5 0 0 0 3 6c0 .862.305 1.867.834 2.94.524 1.062 1.234 2.12 1.96 3.07A31.481 31.481 0 0 0 8 14.58l.208-.22a31.493 31.493 0 0 0 1.998-2.35c.726-.95 1.436-2.008 1.96-3.07zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z'/><path fill-rule='evenodd'd='M8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' /></svg></td><td><a href='#' target='_blank' id='" + store + "' button type='button' class='btn btn-info'>Shop</button></td></tr>";
            }
        })
}

/* Reads and assigns the links to the store pages */
function getLinks() {
    db.collection("links").doc(name)
        .get()
        .then(function (doc) {
            console.log(doc.data());

            /* Casts all the links into an array */
            var linkList = Object.values(doc.data());

            limit = linkList.length;
            console.log(linkList);

            /* Retrieve the link of the matching store, then add it to the shop button */
            for (var i = 0; i < limit; i++) {
                var store = storeList[i];
                link = doc.get(store);
                console.log(link);

                document.getElementById(store).setAttribute("href", link);
            }
        });
}

var count = 0;
var foundName = false;

/* Display the name of the product if it is valid */
promise.then(function () {
    products.forEach(function () {
        while (count < products.length) {
            /* If the search term matches a name read from the database, display the name */
            if (products[count] === name) {
                var capital = name.toUpperCase().charAt(0);
                var length = products[count].length;
                document.getElementById("prodName").innerText = capital + name.substring(1, length);
                console.log(products[count]);
                foundName = true;
            }
            count++;
        }
        /* If the name is not valid, tell the user */
        if (foundName = false) {
            document.getElementById("prodName").innerText = "Product not found";
        }
    });
});

getPriceList();

setTimeout(function () {
    getLinks();
}, 2000);
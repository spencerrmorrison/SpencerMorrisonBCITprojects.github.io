/* Stores the user's location to the databse */
function getUserLocation() {
    document.getElementById("go").addEventListener('click', function () {
        var location = document.getElementById("location").value;
        console.log(location);

        /* If user is signed in save it to firebase db */
        firebase.auth().onAuthStateChanged(function (user) {
            db.collection("users").doc(user.uid)
                .update({
                    "Location": location
                })
        })
    })
}
getUserLocation();

var listItem;
var listItem2;
var listItem3;
var listItem4;
var listItem5;
var listItem6;
var listItem7;

/* The following 7 functions read the input then update the list */
function getItem() {
    document.getElementById("go").addEventListener('click', function () {
        listItem = document.getElementById("list1").value;
        console.log(listItem);

        firebase.auth().onAuthStateChanged(function () {
            db.collection("Lists").doc("items")
                .update({
                    "item": listItem
                })
        })
    })
}
getItem();

function getItem2() {
    document.getElementById("go").addEventListener('click', function () {
        listItem2 = document.getElementById("list2").value;
        console.log(listItem2);

        firebase.auth().onAuthStateChanged(function () {
            db.collection("Lists").doc("items")
                .update({
                    "item2": listItem2
                })
        })
    })
}
getItem2();

function getItem3() {
    document.getElementById("go").addEventListener('click', function () {
        listItem3 = document.getElementById("list3").value;
        console.log(listItem3);

        firebase.auth().onAuthStateChanged(function () {
            db.collection("Lists").doc("items")
                .update({
                    "item3": listItem3
                })
        })
    })
}
getItem3();

function getItem4() {
    document.getElementById("go").addEventListener('click', function () {
        listItem4 = document.getElementById("list4").value;
        console.log(listItem4);

        firebase.auth().onAuthStateChanged(function () {
            db.collection("Lists").doc("items")
                .update({
                    "item4": listItem4
                });
        })
    })
}
getItem4();

function getItem5() {
    document.getElementById("go").addEventListener('click', function () {
        listItem5 = document.getElementById("list5").value;
        console.log(listItem5);

        firebase.auth().onAuthStateChanged(function () {
            db.collection("Lists").doc("items")
                .update({
                    "item5": listItem5
                })
        })
    })
}
getItem5();

function getItem6() {
    document.getElementById("go").addEventListener('click', function () {
        listItem6 = document.getElementById("list6").value;
        console.log(listItem6);

        firebase.auth().onAuthStateChanged(function () {
            db.collection("Lists").doc("items")
                .update({
                    "item6": listItem6
                })
        })
    })
}
getItem6();

function getItem7() {
    document.getElementById("go").addEventListener('click', function () {
        listItem7 = document.getElementById("list7").value;
        console.log(listItem7);

        firebase.auth().onAuthStateChanged(function () {
            db.collection("Lists").doc("items")
                .update({
                    "item7": listItem7
                })
        })
    })
}
getItem7();

var total = 0;

/* Gets the lowest price for all items on the list */
function getLowest() {
    document.getElementById("go").addEventListener('click', function () {
        db.collection("prices").doc(listItem)
        .onSnapshot(function (doc) {
            console.log(doc.data());
            var priceList = Object.values(doc.data());

            var limit = priceList.length;
            var lowest = priceList[0];

            for (i = 0; i < limit; i++) {
                if (priceList[i] < lowest){
                    lowest = priceList[i];
                }
            }

            document.getElementById("itemOne").innerText = "$" + lowest;
            total += lowest;
        })
    })

    document.getElementById("go").addEventListener('click', function () {
        db.collection("prices").doc(listItem2)
        .onSnapshot(function (doc) {
            console.log(doc.data());
            var priceList = Object.values(doc.data());

            var limit = priceList.length;
            var lowest = priceList[0];

            for (i = 0; i < limit; i++) {
                if (priceList[i] < lowest){
                    lowest = priceList[i];
                }
            }

            document.getElementById("itemTwo").innerText = "$" + lowest;
            total += lowest;
        })
    })

    document.getElementById("go").addEventListener('click', function () {
        db.collection("prices").doc(listItem3)
        .onSnapshot(function (doc) {
            console.log(doc.data());
            var priceList = Object.values(doc.data());

            var limit = priceList.length;
            var lowest = priceList[0];

            for (i = 0; i < limit; i++) {
                if (priceList[i] < lowest){
                    lowest = priceList[i];
                }
            }

            document.getElementById("itemThree").innerText = "$" + lowest;
            total += lowest;
        })
    })

    document.getElementById("go").addEventListener('click', function () {
        db.collection("prices").doc(listItem4)
        .onSnapshot(function (doc) {
            console.log(doc.data());
            var priceList = Object.values(doc.data());

            var limit = priceList.length;
            var lowest = priceList[0];

            for (i = 0; i < limit; i++) {
                if (priceList[i] < lowest){
                    lowest = priceList[i];
                }
            }

            document.getElementById("itemFour").innerText = "$" + lowest;
            total += lowest;
        })
    })

    document.getElementById("go").addEventListener('click', function () {
        db.collection("prices").doc(listItem5)
        .onSnapshot(function (doc) {
            console.log(doc.data());
            var priceList = Object.values(doc.data());

            var limit = priceList.length;
            var lowest = priceList[0];

            for (i = 0; i < limit; i++) {
                if (priceList[i] < lowest){
                    lowest = priceList[i];
                }
            }

            document.getElementById("itemFive").innerText = "$" + lowest;
            total += lowest;
        })
    })

    document.getElementById("go").addEventListener('click', function () {
        db.collection("prices").doc(listItem6)
        .onSnapshot(function (doc) {
            console.log(doc.data());
            var priceList = Object.values(doc.data());

            var limit = priceList.length;
            var lowest = priceList[0];

            for (i = 0; i < limit; i++) {
                if (priceList[i] < lowest){
                    lowest = priceList[i];
                }
            }

            document.getElementById("itemSix").innerText = "$" + lowest;
            total += lowest;
        })
    })

    document.getElementById("go").addEventListener('click', function () {
        db.collection("prices").doc(listItem7)
        .onSnapshot(function (doc) {
            console.log(doc.data());
            var priceList = Object.values(doc.data());

            var limit = priceList.length;
            var lowest = priceList[0];

            for (i = 0; i < limit; i++) {
                if (priceList[i] < lowest){
                    lowest = priceList[i];
                }
            }

            document.getElementById("itemSev").innerText = "$" + lowest;
            total += lowest;
        })
    })
}
getLowest();

/* Gets the total of all prices on the list */
function getTotal() {
    document.getElementById("go").addEventListener('click', function () {
        setTimeout(function () {
            document.getElementById("total").innerText = "Total: $" + total;
            console.log(total);
        }, 1500);
    })
}
getTotal()

/* The basis for this function was provided by w3schools */
/* Handles the typeahead autocomplete list item function */
function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) {
            return false;
        }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, precent default function*/
            e.preventDefault();
            
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });

    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

var products;
var item;

/* Gets the list of products from the database. */
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
    });

/* Run autocomplete once list is retrieved. */
promise.then(function(){
    autocomplete(document.getElementById("list1"), products);
    autocomplete(document.getElementById("list2"), products);
    autocomplete(document.getElementById("list3"), products);
    autocomplete(document.getElementById("list4"), products);
    autocomplete(document.getElementById("list5"), products);
    autocomplete(document.getElementById("list6"), products);
    autocomplete(document.getElementById("list7"), products);
    autocomplete(document.getElementById("list8"), products);
});

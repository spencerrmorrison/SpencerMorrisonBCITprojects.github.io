/* Retrieves the user's search term */
function displaySearch() {
    item = localStorage.getItem("item");
    console.log(item);
    $("#search-go-here").append('<p>' + item + '</p>');

}
displaySearch();

/* Adds the item to the user's list, if there are open spots */
function addToList() {
    document.getElementById("add").addEventListener('click', function () {
        db.collection("Lists").doc("items")
            .get()
            .then(function (doc) {
                var list = Object.values(doc.data());
                var listNumber = Object.keys(doc.data());
                console.log(listNumber);

                /* Check if the list has an open spot, if found add to list and stop */
                for (i = 0; i < list.length; i++) {
                    var itemNum = listNumber[i];
                    if (list[i] === '') {
                        console.log(itemNum);
                        db.collection("Lists").doc("items")
                            /* Update the open slot with the product */
                            .update({
                                [itemNum]: item
                            })
                        break;
                    }
                }
            })
    })
}
addToList();
var name = localStorage.getItem("item");

/* Read and display the product description */
function getDescription() {
    db.collection("descriptions").doc(name)
        .get()
        .then(function (doc) {
            console.log(doc.data());
            
            var description = Object.values(doc.data());

            var link = "product.html";

            document.getElementById("desc").innerText = description;
            document.getElementById("desc").innerHTML += "<a href='" + link + "'> read more</a>"

        })
}

/* Read the the product's image name, then display it */
function getImage() {
    var img = "images/" + name + ".png"
    document.getElementById("image").setAttribute("src", img);
}

getDescription();
getImage();
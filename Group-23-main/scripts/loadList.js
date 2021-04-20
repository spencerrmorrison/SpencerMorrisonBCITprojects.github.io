/* The following 7 functions reads then loads the user's list items */
function loadItem() {
    document.getElementById("load").addEventListener('click', function () {
        db.collection("Lists").doc("items")
            .get()
            .then(function (doc) {
                document.getElementById("list1").value = doc.data().item;
            })
    })
}
loadItem();

function loadItem2() {
    document.getElementById("load").addEventListener('click', function () {
        db.collection("Lists").doc("items")
            .get()
            .then(function (doc) {
                document.getElementById("list2").value = doc.data().item2;
            })
    })
}
loadItem2();

function loadItem3() {
    document.getElementById("load").addEventListener('click', function () {
        db.collection("Lists").doc("items")
            .get()
            .then(function (doc) {
                document.getElementById("list3").value = doc.data().item3;
            })
    })
}
loadItem3();

function loadItem4() {
    document.getElementById("load").addEventListener('click', function () {
        db.collection("Lists").doc("items")
            .get()
            .then(function (doc) {
                document.getElementById("list4").value = doc.data().item4;
            })
    })
}
loadItem4();

function loadItem5() {
    document.getElementById("load").addEventListener('click', function () {
        db.collection("Lists").doc("items")
            .get()
            .then(function (doc) {
                document.getElementById("list5").value = doc.data().item5;
            })
    })
}
loadItem5();

function loadItem6() {
    document.getElementById("load").addEventListener('click', function () {
        db.collection("Lists").doc("items")
            .get()
            .then(function (doc) {
                document.getElementById("list6").value = doc.data().item6;
            })
    })
}
loadItem6();

function loadItem7() {
    document.getElementById("load").addEventListener('click', function () {
        db.collection("Lists").doc("items")
            .get()
            .then(function (doc) {
                document.getElementById("list7").value = doc.data().item7;
            })
    })
}
loadItem7();
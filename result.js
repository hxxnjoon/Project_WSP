function search() {

    document.getElementById('hotnew').style.display = "none";
    document.getElementById('alcholdict').style.display = "none";

    var input = document.getElementById("searchInput").value;
    var items = document.getElementsByClassName("항목");

    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (item.id.includes(input)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    }
}

function erase() {
    document.getElementById('hotnew').style.display = "block";
    document.getElementById('alcholdict').style.display = "block";

    document.getElementByClassName('항목').style.display = "none";
}

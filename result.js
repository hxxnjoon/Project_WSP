function search() {

    document.getElementById('핫뉴').style.display = "none";
    document.getElementById('술과사전').style.display = "none";

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
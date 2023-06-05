function search() {

    document.getElementById('hotnew').style.display = "none";
    document.getElementById('alcholdict').style.display = "none";

    document.getElementById('searchsection').style.display = "block";

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
    

    document.getElementById('searchresult').innerHTML = '"'+ input + '"' + "에 대한 검색 결과";
}

function erase() {
    document.getElementById('searchresult').innerHTML = "";
    document.getElementById('searchsection').style.display = "none";
    document.getElementById('hotnew').style.display = "block";
    document.getElementById('alcholdict').style.display = "block";
    document.getElementById('searchInput').value = "";

}

function openModal_d(htmlFile) {
  var modal = document.getElementById("modal_d");
  var modalContent = document.getElementById("modalContent_d");

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      modalContent.innerHTML = this.responseText;
      modal.style.display = "block";
      modalContent.style.backgroundColor = "#ffffff";
    } else if (this.readyState == 4) {
      alert("외부 HTML 파일을 로드하는 중에 오류가 발생했습니다.");
    }
  };
  xhttp.open("GET", htmlFile, true);
  xhttp.send();
}

function closeModal_d() {
  var modal = document.getElementById("modal_d");
  var modalContent = document.getElementById("modalContent_d");

  modalContent.innerHTML = "";
  modal.style.display = "none";
}

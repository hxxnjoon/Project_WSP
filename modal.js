document.addEventListener("DOMContentLoaded", function() {
    var openModalBtn = document.getElementById("openModalBtn");
    var modal = document.getElementById("myModal");
    var modalContent = document.getElementById("modalContent");
    var closeModal = document.getElementsByClassName("close")[0];
  
    openModalBtn.addEventListener("click", function() {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            modalContent.innerHTML = xhr.responseText;
            modal.style.display = "block";
          } else {f
            alert("Failed to load external content.");
          }
        }
      };
      xhr.open("GET", "detailed_page.html");
      xhr.send();
    });
  
    closeModal.addEventListener("click", function() {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  
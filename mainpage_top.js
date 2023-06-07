const modal = document.getElementById("modal")
    function modalOn() {
        modal.style.display = "flex"
        document.body.style.overflow = "hidden";
    }
    function modalOff() {
        modal.style.display = "none"
        document.body.style.overflow = "";
    }



    const btnModal = document.getElementById("btn-modal")
    btnModal.addEventListener("click", e => {
        modalOn()
    })
    const closeBtn = modal.querySelector(".close-area")
    closeBtn.addEventListener("click", e => {
        modalOff()
    })

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            modalOff();
        }
    });

    modal.addEventListener("click", e => {
        const evTarget = e.target
        if(evTarget.classList.contains("modal-overlay")) {
            modal.style.display = "none"
        }
    })
    
    var buttons = document.getElementsByClassName("menubtn");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
        this.classList.toggle("active");
    });
  }
  

  function toggleCheckbox(checkboxId) {
    var checkbox = document.getElementById(checkboxId);
    checkbox.checked = !checkbox.checked;
  }


  function openModal(store){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector("#myModal .modal-content").innerHTML = this.responseText;
            document.getElementById("myModal").style.display = "block";
            document.body.style.overflow = "hidden";
        }
    };
    xhttp.open("GET", "detailed_pages/" + store + ".html", true);
    xhttp.send();
}

document.addEventListener("click", function(event) {
    var modal = document.getElementById("myModal");
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}
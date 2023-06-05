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
  

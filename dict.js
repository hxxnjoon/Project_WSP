function collapse(element) {
    var before = document.getElementsByClassName("activeDict")[0]               
    if (before && document.getElementsByClassName("activeDict")[0] != element) {  
        before.nextElementSibling.style.maxHeight = null;  
        before.classList.remove("activeDict");                 
    }
    element.classList.toggle("activeDict");      

    var content = element.nextElementSibling;
    if (content.style.maxHeight != 0) {       
        content.style.maxHeight = null;     
    } else {
        content.style.maxHeight = content.scrollHeight + "px"; 
    }
}

var slideIndex = 1;
		showSlides(slideIndex);

		function plusSlides(n) {
		showSlides(slideIndex += n);
		}

		function currentSlide(n) {
		showSlides(slideIndex = n);
		}

		function showSlides(n) {
		var i;
		var slides = document.getElementsByClassName("mySlides");
		var dots = document.getElementsByClassName("dot");
		if (n > slides.length) {slideIndex = 1}    
		if (n < 1) {slideIndex = slides.length}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";  
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" activeDict", "");
		}
		slides[slideIndex-1].style.display = "block";  
		dots[slideIndex-1].className += " activeDictDict";
		}
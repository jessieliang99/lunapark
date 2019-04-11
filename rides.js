
// NAV STICKY BAR 

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 

// SLIDE SHOW 
var slides;
var dots;
var slideIndex;

//declare global variables

window.addEventListener("load", pageFullyLoaded, false);

// create a page fully load event listener

function pageFullyLoaded(e) {
    slides = document.getElementsByClassName("mySlides");
  dots = document.getElementsByClassName("dot");
  console.log(slides);
  slideIndex = 1;
  showSlides(slideIndex);
  //create a function that is trigger with the page fully loaded event is true
  // which in turn does things such as loads slides names into slides variable
  //etc

}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i ;
  if (n > slides.length) {
    slideIndex = 1
  }    
  if (n < 1) {
    slideIndex = slides.length
  } ;
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
   console.log(slideIndex);
   slides[slideIndex-1].style.display = "block";  
   dots[slideIndex -1].className += " active";
}





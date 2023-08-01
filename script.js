let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

var i = 0;
var txt = 'Lorem ipsum typing effect!'; 
var speed = 50; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("sanana").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
let slideIndex = [1,1,1,1,1,1,1,1,1,1,1,1]; // making some assumptions of sorts
showAllSlides(1);

function plusSlides(n, no) {
  if (no >= slideIndex.length || no < 0) {no = 0}
  showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
  if (no >= slideIndex.length || no < 0) {no = 0}
  showSlides(slideIndex[no] = n);
}

function showAllSlides(n) {
  let i;
  let slideshow = document.getElementsByClassName("slideshow-container");
  for (i = 0; i < slideshow.length; i++) {
    let j;
    let slides = slideshow[i].children;
    if (slides.length > 0) {
      if (n > slides.length) {slideIndex[i] = 1}    
      if (n < 1) {slideIndex[i] = slides.length}
    
      for (j = 0; j < slides.length; j++) {
        slides[j].style.display = "none";  
      }
    
      slides[slideIndex[i]-1].style.display = "block"; 
    }
  }
}

function showSlides(n, no) {
  let i;
  let slideshow = document.getElementsByClassName("slideshow-container");

  let slides = slideshow[no].children;
  if (no >= slideIndex.length || no < 0) {no = 0}
  if (n > slides.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex[no]-1].style.display = "block";  
}
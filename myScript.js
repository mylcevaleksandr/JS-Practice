
function numberCount() 
 { 
  let cardStyle = document.querySelector('.card');
  let computed = window.getComputedStyle(cardStyle).display;
  let text =  document.querySelector('#one')
  textContent = text.textContent;
  
    console.log(computed,textContent);
   }

const btn = document.querySelector(".yes");
btn.addEventListener("click" , numberCount );





 

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n)
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  }


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("card");
  if (n > slides.length) {slideIndex = 1}    
  // if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  

  }
 
  slides[slideIndex-1].style.display = "block"; 

  
  

}  
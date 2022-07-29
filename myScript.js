document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector(".yes");
  const btnNo = document.querySelector(".not");
  const tryAgain = document.querySelector(".try");
  const modalWrapper = document.querySelector('.wrapper__modal');
  const outResult = modalWrapper.querySelector(".result");
  const baseNumbers = [ 1, 2, 4, 8, 16, 32, 64,];
  let newNumbers = [];
  let baseIndex = 0;
  let result;

 tryAgain.addEventListener("click", () =>  { 
   document.location.reload()
  
 })

 btn.addEventListener("click" , () => {
 numberCount();
 plusSlides(1);
 
 if (baseIndex === baseNumbers.length) {
  result = newNumbers.reduce((a,b) => a+b);
  modalWrapper.style.display = "block";
  outResult.innerText = `Вы загадали: ${result}`; // = 'Your number:' + result

 }

 })


 btnNo.addEventListener("click" , ()=> {
  numberCountNo();
  plusSlides(1)
  if ( baseIndex === baseNumbers.length) {
    result = newNumbers.reduce((a,b) => a + b);
    modalWrapper.style.display = "block";
    outResult.innerText = `Вы загадали: ${result}`; // = 'Your number:' + result
  }
 })



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
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
 
  }
 
  slides[slideIndex-1].style.display = "block"; 

} 

function numberCount() 
{ 
  newNumbers.push(baseNumbers[baseIndex++]);
}

function numberCountNo()
{ 
baseIndex++  
}  



})

const baseNumbers = [0, 1, 2, 4, 8, 16, 32, 64,];
let newNumbers = [];
let calc = 0;
let result

// function sumArray() {
  
  // }
// }

function numberCount() 
 { 
  if (calc < 7) {
newNumbers.push(baseNumbers[calc++]);
  }
  else if (calc = newNumbers.length)  {   
    let add=(a,b) => a+b
   result = newNumbers.reduce(add);
  alert(result)
  }
  // else if( calc = baseNumbers.length){ for (let i = 0; i < newNumbers.length; i++) {
    // result += newNumbers[i];
    // console.log(result)};
  //  }
  }



 function numberCountNo()
{ 
  if (calc < 7) {
calc++  
}
else if (calc = newNumbers.length) {let add=(a,b) => a+b
    result = newNumbers.reduce(add);
 alert(result)
}
// else if( calc = baseNumbers.length){ for (let i = 0; i < newNumbers.length; i++) {
  // result += newNumbers[i];
  // console.log(result)};  
// }
}  




const btn = document.querySelector(".yes");
btn.addEventListener("click" , numberCount );

const btnNo = document.querySelector(".not");
btnNo.addEventListener("click" , numberCountNo );






 

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
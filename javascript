let nameO=prompt("Enter your name here:");
let nameT=prompt("Enter your Valentine's name here:");

nameOne=Math.random();
nameOne=Math.floor(nameOne*100)+1;
nameTwo=Math.random();
nameTwo=Math.floor(nameTwo*100)+1;
let loveCount=nameOne+nameTwo;

alert ("The official LOVE CALCULATOR is " + loveCount + " % sure that "
 + nameO + " is a good match for " + nameT );
 

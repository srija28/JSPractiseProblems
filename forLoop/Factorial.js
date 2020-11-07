
let number = Math.floor(Math.random()*10);

let factorial = 1;
if(number >= 1){
   for(let i = 1; i <= number; i++){
       factorial *= i;
   }
   console.log("Factorial of "+ number+" is "+ factorial);
}else{
    console.log("enter positive number");
}
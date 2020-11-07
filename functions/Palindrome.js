function palindromeCheck(num1,num2){
    let palindromeNum1=0;
    while(num1>0){
        let rem = num1%10;
        palindromeNum1 = palindromeNum1*10 +rem;
        num1=Math.floor(num1/10);
    }
    if(palindromeNum1 == num2)
        return true;
    else 
        return false;
}

//custom values for check - palindrome
let num1 = 143;
let num2 = 341;
let isPalindrome = palindromeCheck(num1,num2);
console.log("Numbers: "+num1+", "+num2);
console.log("Is number 2 a palindrome of number 1: "+isPalindrome);

//custom values for check - not palindrome
isPalindrome = palindromeCheck(19,11);
console.log("Numbers: 11, 19");
console.log("Is number 2 a palindrome of number 1: "+isPalindrome);

//random generated values for check
let a =Math.floor(Math.random()*100);
let b =Math.floor(Math.random()*100);
isPalindrome=palindromeCheck(a,b);
console.log("Numbers: "+a+", "+b);
console.log("Is number 2 a palindrome of number 1: "+isPalindrome);
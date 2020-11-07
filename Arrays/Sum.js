let total = 0;
function sum(number) {
  total += number;
}


let numberArray = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];

numberArray.forEach(sum);
if (total == 0) console.log("Sum is 0");
else console.log("Sum is NOT 0");
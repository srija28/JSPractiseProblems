let n = Math.floor(Math.random()*100); 
console.log("Table of the powers of 2 :");
console.log("Power:"+n);
let power =1;
if(n>0){
for(let i=0;i<n;i++){
    power = power*2;
    console.log(power);
}
}
else{
    console.log("1");
}
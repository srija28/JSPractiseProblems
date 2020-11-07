const toFahrenheit =0;
const toCelsius =1;
function getConvertedTemperature(choice,temperature){
    switch(choice){
        case toFahrenheit:
            console.log("You selected: Convert Celsius to Fahrenheit");
            return (temperature*(9/5)) +32;
        case toCelsius:
            console.log("You selected: Convert Fahrenheit to Cahrenheit");
            return ((temperature-32)*5/9);
    }
}

let choice = Math.floor(Math.random()*10)%2;
let temp=0;
if(choice==0){
    temp = Math.floor(Math.random()*100); 
    console.log("Selected Celsius Temp: "+temp+" C");
}
if(choice==1){
    temp = Math.floor(Math.random()*180)+32;
    console.log("Selected Fahrenheit Temp: "+temp+" F");
}
let convertedTemp = getConvertedTemperature(choice,temp);
console.log("Converted temperature = "+convertedTemp);
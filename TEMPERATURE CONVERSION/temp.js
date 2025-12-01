const input=document.getElementById("temp");
const ToFahrenheit=document.getElementById("ToFahrenheit");
const ToCelcius=document.getElementById("ToCelcius");
const result= document.getElementById("result")
let temp;
 function convert(){
    if (ToFahrenheit.checked){
       temp = Number(input.value);
       answer = temp * 9/5+32;
       result.textContent = answer.toFixed(1)+"°F"
    }
    else if(ToCelcius.checked){
       temp=Number(input.value)
       answer= (temp-32)*(5/9)
       result.textContent = answer.toFixed(1)+"°C"
    }
    else{
        result.textContent="No choice You have made.Please choose a Unit!"
    }
    
 }
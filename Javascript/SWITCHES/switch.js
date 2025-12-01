
let guessbtn = document.getElementById("guessbtn");
let result = document.getElementById("result");

guessbtn.onclick = function () {
  let day = document.getElementById("day").value.toLowerCase();
  

    switch(day){
        case "monday":
       
            result.textContent="You have to eat the cassava bread.";
            console.log("You have to eat the cassava bread.");
            break;
        
        case "tuesday":
       
            result.textContent="You have to eat the Maize-flour.";
            console.log("You have to eat the Maize-flour..");
            break;
            
        case "wednesday":
            result.textContent="You have to eat the Rice.";
            console.log("You have to eat the Rice.");
            break;
       
        case "thursday":
       
            result.textContent="You have to drink a Coffee.";
            console.log("You have to drink a Coffee.");
            break;
            
        case "friday":
       
            result.textContent="You have to eat the Irish Potatoes.";
            console.log("You have to eat the Irish Potatoes.");
            break;
             
        case "saturday":
       
            result.textContent="You have no food to eat. just commit Refrain from eating.";
            console.log("You have no food to eat. just commit Refrain from eating!.");
            break;
             
        case "sunday":
       
            result.textContent="You have to eat a lot of the Meat.";
            console.log("You have to eat a lot of the Meat.");
            break;
       
        default:
            result.textContent="Invalid day! Please enter a valid day of the week.";
            console.log("Invalid day! Please enter a valid day of the week.");
            break;

    }
}

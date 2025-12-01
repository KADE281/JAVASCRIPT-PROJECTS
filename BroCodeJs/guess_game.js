let min=1;
let max=10;

let answer=Math.floor(Math.random()*(max - min + 1))+ min;

let attempts=0;
let isRunning=true;
let guess;

while(isRunning){

    guess=window.prompt(`Guess the number between ${min} and ${max}`)
    guess=Number(guess);

    if (isNaN(guess)){
         window.alert("String isn't allowed. Please try again!");
    }

    else if(guess< min || guess > max) {
        window.alert("Invalid Range Number. Please try again!")
    }

    else{
        attempts++;
        if (guess< answer){
          window.alert("Too Low, Try again!");
        }
        else if(guess > answer){
            window.alert("Too High, Try again!");
        }
        else{
            window.alert(`CORRECT. THE ANSWER WAS ${answer}. YOU TOOK ${ attempts} attempts!`);
            isRunning = false;
        }

    }



    
    
}

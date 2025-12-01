function rollDice(){
    const numberOfDice =document.getElementById("numberOfDice").value;
    const diceResult=document.getElementById("diceResult");
    const diceImages=document.getElementById("diceImages");
    const values=[];
    const images=[];

    for(let i=0; i<numberOfDice;  i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="images_of_dice/${value}.jpg" style=" width:70px;height:70px;border-radius:5px;margin-top:2% "  alt="Dice ${value}"> `);


    }
    diceResult.textContent=`dice:${values.join(', ')} `;
    diceImages.innerHTML=images.join('');
    

}
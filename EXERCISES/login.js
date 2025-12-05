let username,password;
let login=false;
while(!login){
    username=window.prompt("Enter your Username");
    password=window.prompt("Enter your Password");
    if(username==="kade" && password==="1234"){
        login=true;
        console.log("You login Successfully!");

    }
    else{
        console.log('Invalid CredentialsContainer. Please try Again');
    }
}

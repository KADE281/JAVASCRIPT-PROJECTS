
 
function isValidEmail(){
    if(email.includes("@")){
        return true;

    }
    else{
        return false;
    }

}
let result=isValidEmail();

console.log(`Is ${email} a valid email?: `,result);

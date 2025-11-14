const dec=document.getElementById("dec");
const res=document.getElementById("res");
const inc=document.getElementById("inc");
const initial=document.getElementById("initial");
let count=0;
dec.onclick= function(){
    count--;
    initial.textContent=count;
}
res.onclick= function(){
    count=0;
    initial.textContent=count;
}
inc.onclick= function(){
    count++;
    initial.textContent=count;
}
/* you will design the div section if 
you want to make more convenience 
to the user.*/
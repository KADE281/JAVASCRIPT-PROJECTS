let students=[ 
    {name:"eric", age:22},
    {name:"kanya",age:21},
    {name:"bro", age:45},
    {name:"kade",age:67}
];
let names=students.map(na => na.name);
let ages=students.map(ag=>ag.age)
console.log(names);
console.log(ages);
let number=[1,2,3,4,5,6];
number.forEach(function(num){
    console.log(num*5)
})
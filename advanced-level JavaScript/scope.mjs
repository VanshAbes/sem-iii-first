//Global: variable that can be accessed inside or outside any block of code.

let age = 18;
function AGE(age) {
    console.log(age);
}
AGE(age);
console.log(age);

//Function Scope: variable declared inside any block of code can be accessed only inside that block only.

function HELLO(){
    let a = 50;
    console.log(a);
}
HELLO();
// console.log(a); // Gives Reference Error

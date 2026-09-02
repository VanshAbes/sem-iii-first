// function sums(a, b){
//     return a + b;
// }

// console.log(sums(10, 20));

// //Arrow Function
// const add = (a,b) =>{
//     return a+b;
// }

// console.log(add(10,20));

// //default parameter
// function info(name, age = 18){
//     console.log(name);
//     console.log(age);
// }
// x = "Vansh";
// info(x);

//Callback Function
function display(result){
    console.log(result);
}

function cal(a,b, callback){
    callback(a+b);
}

cal(10,20,display);
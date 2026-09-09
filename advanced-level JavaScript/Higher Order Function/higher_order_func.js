function calculate(a,b,operation){
    return operation(a,b);
}
function add(x,y){
    return x + y;
}
function multiply(x,y){
    return x * y;
}
function subs(x,y){
    return x - y;
}

console.log(calculate(65, 15, add)) // adds 65 and 15
console.log(calculate(65, 15, multiply)) // multiply 65 and 15
console.log(calculate(65, 15, subs)) // substract 65 and 15
//.map

let numbers = [1,2,3,4,5];
// for(let i = 0; i<5; i++){
//     console.log(numbers[i]*numbers[i]);
// }

// let squares = numbers.map(function(number){
//     return number*number;
// });

//using arrow function
// let total = numbers.reduce((max,number)=>{
//     return sum + number;
// },number[0]);

// console.log(total);

let total = Array.reduce((max,number)=>Math.max(max,number), arr[0]);
console.log(total);

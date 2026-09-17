// some() and every()

let marks = [80, 90, 75, 95];

//some() check wheteher at least one element satisfies the condition
let lowmarks = marks.some(marks=>marks<40);
console.log(lowmarks);

let highmarks = marks.every(mark=>mark>=40);
console.log(highmarks);
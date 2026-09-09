//Closure: Jo bhi humara inner function hai woh outer function ke sare functions or variables yaad rakhege even after the task is finished.

function outer(){
    let counter = 0;
    function inner(){
        counter++;
        console.log(counter);
    }
    return inner;
    let increment = outer;
    increment();
}

let i = outer();
i();
i();
i();
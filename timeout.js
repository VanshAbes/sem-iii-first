// Set timeout: ek tarike se sleep option

// console.log("start");
// setTimeout(()=>{
//     console.log("Execute Now");
// },5000);
// console.log("end");

//setInterval()

// let count  = 1;
// let timer = setInterval(()=>{
//     console.log(count);
//     count++;
//     if(count==0){

//     }
// },)

//exceptional handling

// try{
//    console.log("This is try block");
// }catch(err){
//     console.log(err);
// }finally{
//     console.log("This is finally block");
// }

//custom error
function checkAge(age){
    if(age<18){
        throw new Error("Not");
    }
    console.log("Yes");
}

try{
    checkAge(15);
}catch(error){
    console.log(error.message);
}

const promise = new Promise((resolve, reject)=>{
    let success = true;
    if(success){
        resolve("Operation successfull");
    }else{
        reject("operation failed");
    }
});

promise.then(result=>{
    console.log(result)
})
.catch(error=>{
    console.log(error);
});
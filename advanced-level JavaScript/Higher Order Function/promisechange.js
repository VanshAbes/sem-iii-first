function step1(){
    return Promise.resolve(10);
}

step1().then(result=>{
    console.log("Step1",result);

    return result+10;
}).then(result=>{
    console.log("step2",result);
    return result+10;

}).then(result=>{
    console.log("step3",result);
    return result+10;
}).catch(error=>{
    console,log("Errro",error);
});
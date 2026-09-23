// this : reference to the object where this is used

const person1 = {
    name : "SpongeBob", 
    favfood : "HamBurger",
    showname(){
        console.log(this.name)
    }
}
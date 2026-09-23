const student1 = {
    name: "Vansh Saxena"
};

function introduce(city){
    console.log(`My name is ${this.name} and I live in ${city}`)
};

introduce.call(student1, `Delhi`)
const student = {
    name: "rajneesh",
    age: 27,
    company: "Bubu",
    city: "Dehradun",
    func :function combine(){
        console.log(` my name is ${this.name} and my age is : ${this.age} and his company ${this.company}`)
    }
}

let val = student.func();
console.log(val);

// arrow function

const arr = (a, b) => {
    return a ** b;
}
console.log(arr(4, 4))

const squre = n => {return n * n * n};    
const cube = n =>  (n * n * n);




// try and catch

try {
  console.log(cube1(9))
} catch(err) {
    console.log(err )
}
console.log(squre(4))
console.log(cube(9))
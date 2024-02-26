// const car = {
//     name: "volvo",
//     model : "2024",
//     color: "red"
// }

// console.log(car.color);

// const student = {
//     name: "naresh",
//     age: 26,
//     city: "laksar"
// }

// console.log(student.name)

// function calcuAvg(a, b, c) {
//     return (
//         avg = (a + b + c) / 3
//     )
    
// }

// function numberTable(n) {
//     for (let i = n; i <= 10*n; i+=n) {
//          console.log(i);
//     }
// }

// numberTable(6)

    // let sum = 0;

    // function anyNumber(n) {
    // for (let i = 1; i <= n; i++) {
    //     sum = sum + i;
    //     }
    //     return sum;
    // }

    // console.log(anyNumber(100));

    // let cars = ["Saab", "Volvo", "BMW", "rajneesh"];

    // function strForm(name) {
    //     let str;
    //     for (let i = 0; i < name.length; i++){
    //         str += name[i];
    //     }
    //     return str;
    // }
    // console.log(strForm(cars));


function functionMultiple(func, count) {
    for (let i = 1; i <= count; i++){
       func();
    }
}
    
let greet = function () {
    
    console.log("Hello !", count)
}

functionMultiple(greet, 5);
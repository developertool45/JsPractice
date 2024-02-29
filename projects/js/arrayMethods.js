const arr = [1, 2, 3, 4, 5, 6, 7, 8]

// function CountFunc(el) {
//     console.log(el);
// }
// arr.forEach(CountFunc);
arr.forEach(function CountFunc(el) {
    console.log(el)
});


const student =[
    {
        marks: 36,
        sName: "Rajneesh Kumar"

    }, {
        marks: 65,
        sName: "Vishal Kumar"
    }, {
        marks: 75,
        sName: "Ram"
    }, {
        marks: 85,
        sName: "Hari"
    }
    
]

// student.forEach((student) => {
//     console.log(student.marks)
// })

let gpa = student.map((ele) => {
    return ele.marks / 10;
})

// console.log(gpa)

//-----filter Method-----//

const findNumbers = [9, 1, 2, 45, 3, 6, 1, 1, 2, 3, 5, 4, 15, 12, 6]

let evenOrOdd = findNumbers.filter((el) => {
    // return el % 2 == 0; // even numbers
    if (el < 5) {
        return el % 2 == 0; // Odd numbers
    }    
     
})

console.log(evenOrOdd);

// -----Every method similar to and logical Operator-----//
let checkOneCondition = findNumbers.every((el) => {
    return el % 2 == 0;
})

console.log(checkOneCondition);

// -----Some method similar to OR logical Operator-----//
let useSome = findNumbers.some((el) => {
        return el%2 ==0
})

console.log(useSome);
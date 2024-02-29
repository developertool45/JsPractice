
const givenArr = [5, 10, 15, 12, 8, 9, 13];

//question 1

let SqrThenSum = (arr) => {
    let sum = 0;
    let sqr = 0;
    for (let i = 0; i < arr.length; i++){
        sqr = arr[i] * arr[i]
        sum = sum + arr[i];
        console.log( arr[i], sum, sqr,)
    }
    return avg =sum/ arr.length

}
const square = givenArr.map((num) => num * num);
console.log(square);

//question 2

const sum = square.reduce((acc, curr) => acc + curr, 0);
console.log(sum)
console.log(sum /square.length)

//question 3

let newArray = givenArr.map((num)=>num+5)
console.log(newArray);

//question 4
let str1 = ["rajneesh", "hindi", "english", "maths", "science"]
let newStr = str1.map((val) => val.toUpperCase());
console.log(newStr);

const doubleAndReturnArgs = (arr, ...args) => [
    ...arr,
    ...args.map((el) => el * 2)

]  


//question 5



const mergeObject = (student1, student2) => ({ ...student1, ...student2 });
console.log(mergeObject(
    {
    name: "Rajneesh",
    age: 27,
        email: "admin@gmail.com"
    },
    {
    name: "vishal",
    age: 21,
    email: "vishal@gmail.com"
    }
    )
);


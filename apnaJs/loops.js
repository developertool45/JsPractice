// let arr = [1, 2, 3, 4, 5, 6, 2, 3]

// let newArr = []

// // for (let nums of arr) {
// //     console.log(nums)
// // } 
// for (let i = 0; i <= arr.length-1; i++){
//     if (arr[i] == 2) {
//         continue;
//     } else {
//         newArr.push(arr[i]);
//     }
// }
//  console.log(newArr)
    
let allNumbers = []

let guessNum = prompt(" please enter a number to find count ?")
allNumbers.push(guessNum);



for (let allNum of allNumbers) {
    console.log(parseInt(allNum));
    console.log("length is :", allNum.length);
    
   
}

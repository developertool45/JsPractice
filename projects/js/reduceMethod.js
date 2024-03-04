const findNumbers = [9, 1, 2, 45, 3, 6, 1, 1, 2, 3, 5, 4, 15, 12, 6];

let arr = findNumbers;

let reDuceMethod = arr.reduce((res, el) => (res + el));
// console.log(reDuceMethod);

let maxFind = arr.reduce((max, el) => {
    if (max < el) {
        return el;
    } else {
        return max;
    }
})

/// multiple of 10
const tenMul = [10,1, 20, 30, 40, 50, 60, 70, 80, 90]

let checker = tenMul.every((el) => (el % 10 == 0))



function getMin(arr) {
    let minNum = arr.reduce((min, el) => {
    if (min < el) {
        return min
    } else {
        return el
    }
    })
    return minNum;
    
}
console.log(getMin(tenMul));
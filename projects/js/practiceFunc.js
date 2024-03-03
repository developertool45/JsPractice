let numArray = [4,5,6,10,12,14,15]

function arrayAverage(arr) {
    let avg = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i]    
    }
    return avg = sum / arr.length;

}

arrayAverage(numArray);

const isEven = (n) => {
    
    if (n % 2 == 0) {
        console.log(`${n} is a Even Number`)
    } else {
        console.log( `${n} is a Odd Number`)
    }
    return n
}

isEven(3);

const object = {
    message: "Hello World !",
    logMessage() {
       return console.log(this.message);
    }
}
//  let id =setInterval(() => {
//     console.log(object.logMessage())
// }, 1000);

// setTimeout(() => {
//    clearInterval(id)
// }, 5000);


// callback

let length = 4;
function callback() {
    console.log(this.length, "this is ");
};

const myObject = {
    length: 5,
    Method(callback) {
        callback();
    }
}

myObject.Method(callback);


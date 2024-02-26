    // let country = ['Austrailia', "Germany", "Japan", "Republic of Bharat"]

    // function longestName(country) {
    //     let ansIdx = 0;
    //     for (let i = 0; i < country.length; i++){
    //         let ansLen = country[ansIdx].length;
    //         let currentLen = country[i].length;
    //         if (currentLen > ansLen) {
    //             ansIdx = i;
    //         }
    //     }
    //     return country[ansIdx];
    // }

    // let nameCountry = longestName(country);
// console.log(nameCountry);
    
    // let str1 = "apnacollageiii";

    // function countVowels(str) {
    //     let count = 0;
    //     for (let i = 0; i < str.length; i++){
    //         if (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u")
    //         {
    //             count++;
    //         }
    //     }
    //     return count;
    // }

    // let voWelsCount = countVowels(str1);
// console.log(voWelsCount);
    
//random number

let start = 100;
let end = 150;

function randomNumberFind(start, end) {
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}

let rnp = randomNumberFind(start, end);
console.log(rnp);
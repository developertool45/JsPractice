//find greator number that given array
    // const myArray = [2, 4, 5, 6, 9, 10, 12, 45, 15];
    // let num ;
    // function findGreaterNumber(arr, num) {
    //     for (let i = 0; i < arr.length; i++) {
    //         if (arr[i]> num) {
    //             console.log(arr[i]);
    //         }       
    //     }    
    // }
    // findGreaterNumber(myArray, 2);
    

let str = "abcdabcefgggh";

function getUnique(str) {
    let ans = " ";
    for (let i = 0; i < str.length; i++){
        let currChar = str[i];
        if (ans.indexOf(currChar) == -1) {
            ans += currChar;
        }
    }
    return ans;
}
console.log(getUnique(str));
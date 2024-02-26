let guessPrompt = prompt("please enter a number !")
let userNumber = Math.floor(Math.random() * guessPrompt + 1);
let userGuess = prompt(" Please guess a number ");

// console.log(userNumber);

while (true) {
    if (userGuess == "quit") {
        console.log("User Quit")
    }

    if (userNumber == userGuess) {
        console.log("congralutions ! you are right", userGuess)
        break;
    } else {
        console.log("Your guess is wrong! please try again")
        userGuess = prompt(" Please guess a number ");        
    }

}
function OddorEvenFactory(request) {

  if (request == "odd") {
  return function (n) {
      console.log((n % 2 !== 0));
    };
    
      
  } else if (request == "even") {
    return function (n) {
      console.log((n % 2 == 0));
      };
     
  } else {
      console.log(" wrong request !")
  }
}

// let request = prompt(" enter odd and even request for formula !")
 
let request = "odd";
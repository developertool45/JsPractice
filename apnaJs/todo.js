let todo = [];
let req = prompt("what type of request you want to send?");
while (true) {
  if (req == "quit") {
    console.log("app quiting");
    break;
  }

  if (req == "list") {
    console.log("--------");
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    }
      console.log("-------");
      
  } else if (req == "add") {
    let task = prompt("enter your items to add in todo");
    todo.push(task);
    console.log("added !");
  } else if (req == "delete") {
      let indexN = prompt("enter your item to delete ?");
      todo.splice(indexN, 1);
      
  } else {
      console.log(`wrong entry, ${req}`)
 }

    req = prompt("what type of request you want to send?");
}

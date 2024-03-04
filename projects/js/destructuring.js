

const mens = ["Rajneesh", "Vishal", "Amit", "Aniket"];

// destructuring

let [firtName, secondName] = mens;


// destructuring in objects

const students = {
    name: "Rajneesh",
    age: 27,
    class: "MCA",
    subject: ["hindi", "english", "maths", "science"],
    username: "karan@123",
    password: "123",
    city : "Dehradun"
};

// let username = students.username;
// let password = students.password;

let { username : user, password : secret, city: place = "mumbai"  } = students

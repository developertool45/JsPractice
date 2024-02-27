const student = {
    name: "Rajneesh",
    age: 27,
    marks: 85,
    props: this,
    getMarks: function () {
        console.log(this)
        return student.marks;
    },
    getName: () => {
        console.log(this)
        return student.name;
    },
    getInfo: function () {
        setTimeout(function () {
            console.log("normal function", this)
        }, 2000)
    },
    getInfo1: function () {
        setTimeout( () => {
            console.log("Arrow function", this)
        }, 2000)
    },
}
console.log(student.getInfo())
console.log(student.getInfo1())
console.log(student.getMarks())
console.log(student.getName())


const data = {
    email: "rajneesh@eadgroup.in",
    password: 12345
}
const dataCopy = { ...data, id: 123 }

// console.log(dataCopy);


// rest and arguments



function sumArg(...args) {
    return args.reduce((sum, el) => sum + el);
}

console.log(sumArg(10,15,14,14,52));
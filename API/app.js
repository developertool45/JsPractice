let url = "https://catfact.ninja/fact";
let p = document.querySelector("p");
let button = document.querySelector('BUTTON')
// fetch(url)
//     .then((res) => {
//         // console.log(res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log("data1 : ",data.fact);
//         return fetch(url);
//     })
//     .then((res) => {
//         return res.json()
//     })
//     .then((data2) => {
//         console.log("data2 : ",data2.fact)
//     })
//     .catch((err) => {
//         console.log("your error is :", err);
//     })

// async function getFacts() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(res);
//     } catch (error) {
//         console.log(error);
        
//     }
    
// }

//axios
async function getFacts() {
    try {
        let res = await axios(url);              
        console.log(res.data.fact);
    } catch (error) {
        console.log(error);
        
    }
    
}

// axios using get method


async function getApiFacts(){
    try {
        let res = await axios.get(url);
        console.log(res.data);
        return res.data.fact;
    } catch (error) {
        console.log(error);
        return "Something went wrong";
    }
}

button.addEventListener("click", async() => {
    let fact = await getApiFacts();
    p.innerText = fact;
    console.log(fact);
})



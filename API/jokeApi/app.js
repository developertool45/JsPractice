// let url = "https://official-joke-api.appspot.com/jokes/random";
let url = "https://icanhazdadjoke.com/";


let urlcoun = `http://universities.hipolabs.com/search?name=`;
let btn = document.querySelector('button');

btn.addEventListener("click", async()=> {
    // console.log("button click");
    // let country = document.querySelector("input").value;  
    let country = document.querySelector("input").value; 
    // let country = country1["state - province"];
    let collages = await getCollage(country);
    console.log(country);
    ShowData(collages);
})


function ShowData(collages) {
    let list = document.querySelector('.list');
    list.innerText = "";
    for (let collage of collages) {
        console.log(collage.name)
        let li = document.createElement("li");
        li.innerText = collage.name;
        list.appendChild(li);
    }
}


async function getCollage(country) {
    try {
        let res = await axios.get(urlcoun + country);
        return res.data;
    } catch (error) {
        console.log("SomeThing went wrong", error);
        return [];
    }
}



// async function getJokes() {
//     try {
//         const config = { headers: {accept :  "application/json"} };
//         let res = await axios.get(url, config);
//         console.log(res.data)
//     } catch (error) {
//         console.log("error ,", error)
//     }
// }

// const URL = "https://metrix-ae70b-default-rtdb.firebaseio.com/metrix.json";
// // fetch(URL).then(data => {
// //     return data.json();
// // }).then(data => {
// //     console.log(data);
// // })
// // .catch(err => console.log(err));

// fetch(URL, {
//     "Content-Type": 'applocatin/json',
//     "body": 
// })


let layoutOptionsCounter = 0
let mapMouseOverCounter = 0;
window.addEventListener("load", () => {

    // Lount Option 
    document.getElementById("layoutOptionsCounter").innerHTML = layoutOptionsCounter;
    document.getElementById("layoutOptions").addEventListener("click", layoutOptionsClickCount)

    // MAP
    document.getElementById("map").addEventListener("mouseover", mapMouseOver);
    document.getElementById("mapMouseOver").innerHTML = mapMouseOverCounter;

    
})

const layoutOptionsClickCount = (event) => {
    
    if (event.type === "click"){
        console.log("event: ", event.type)
        layoutOptionsCounter += 1;
        document.getElementById("layoutOptionsCounter").innerHTML = layoutOptionsCounter;
    }
    
}

const mapMouseOver = (event) => {
    if (event.type === "mouseover"){
        console.log("event: ", event.type)
        mapMouseOverCounter += 1;
        document.getElementById("mapMouseOver").innerHTML = mapMouseOverCounter;
    }
}
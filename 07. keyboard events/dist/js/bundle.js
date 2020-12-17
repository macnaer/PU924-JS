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
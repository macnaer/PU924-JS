let layoutOptionsCounter = 0
window.addEventListener("load", () => {
    document.getElementById("layoutOptionsCounter").innerHTML = layoutOptionsCounter;
    document.getElementById("layoutOptions").addEventListener("click", layoutOptionsClickCount)
    
})

const layoutOptionsClickCount = (event) => {
    
    if (event.type === "click"){
        console.log("event: ", event.type)
        layoutOptionsCounter += 1;
        document.getElementById("layoutOptionsCounter").innerHTML = layoutOptionsCounter;
    }
    
}
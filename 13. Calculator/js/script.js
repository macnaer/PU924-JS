window.addEventListener("load", Init);

let firtsNumber = [];

function Init(){
  document.querySelector(".one").addEventListener("click", getNumber);
    document.querySelector(".two").addEventListener("click", getNumber);
    document.querySelector(".three").addEventListener("click", getNumber);
    document.querySelector(".four").addEventListener("click", getNumber);
    document.querySelector(".five").addEventListener("click", getNumber);
    document.querySelector(".six").addEventListener("click", getNumber);
    document.querySelector(".seven").addEventListener("click", getNumber);
    document.querySelector(".eight").addEventListener("click", getNumber);
    document.querySelector(".nine").addEventListener("click", getNumber);
    document.querySelector(".zero").addEventListener("click", getNumber);
    document.querySelector(".clear").addEventListener("click", Clear);
}

function Clear(){
    let screenVar = document.querySelector(".screen");
    screenVar.innerHTML = 0;
    firtsNumber = []
}

function getNumber(){
    let screenVar = document.querySelector(".screen");
    console.log(this.textContent);
    firtsNumber.push(this.textContent)
    screenVar.innerHTML = "";
    for(let i = 0 ; i < firtsNumber.length; i++){
        screenVar.innerHTML += firtsNumber[i];
    }
   
}
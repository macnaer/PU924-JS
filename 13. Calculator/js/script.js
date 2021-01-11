window.addEventListener("load", Init);

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
}

function getNumber(){
    console.log(this.textContent);
    let screenVar = document.querySelector(".screen");
    screenVar.innerHTML = this.textContent
}
window.addEventListener("load", Init);

const DATABASE_URL = "https://calculator-819d1-default-rtdb.firebaseio.com/calculator.json"

function Request(a, sign, b){
    let result = 0;
    if (sign === '+'){
        result = a + b;
    }
   
    fetch(DATABASE_URL,{
        method: 'POST', 
        body: JSON.stringify(`${a} ${sign} ${b} = ${result}`),
        headers: {
        'Content-Type': 'application/json'
        }

    })
}


let firtsNumber = [];

function Init(){

   Request(4, '+', 5);

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
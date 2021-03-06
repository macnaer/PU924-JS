
function Init(){
    Request(URL, CashCurrency);
}

const URL = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
const URL2 = "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11";

function Request(url, callback){

    let xhr = new XMLHttpRequest();

    xhr.open("GET", url);
      //xhr.setRequestHeader("Content-Type", "application/json"); 
    xhr.send();
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;
    
        if (xhr.status != 200) {
          let errStatus = xhr.status;
          let errText = xhr.statusText;
          console.log(errStatus + ": " + errText);
        } else {
            let data = JSON.parse(xhr.responseText);
            callback(data);
        }
    };
}

function CashCurrency(currency){

    let arr = [];
    let usd_buy =  parseInt(currency[0].buy);
    arr.push(usd_buy);
    console.log("usd_buy ", usd_buy, " type ", typeof(usd_buy))
    console.log("arr ", arr)
    console.log(currency)
    // let root = document.getElementById("root");
    let root = document.querySelector("#root");
    let sp = document.createElement("span");
    sp.innerHTML = "SPAN";
    sp.setAttribute("class", "col");
    // sp.setAttribute("id", "span");
    root.appendChild(sp);
    // console.log(root);
}

function CardCurrency(currency){
    console.log("CardCurrency: ", currency);
}

// Request(URL, CashCurrency);
// Request(URL2, CardCurrency);

// window.addEventListener("load", Request(URL, CashCurrency));
// window.addEventListener("load", () => {
//     Request(URL, CashCurrency);
// });

const btn = document.querySelector(".get_currency");
// btn.addEventListener("click", Init);
btn.addEventListener("click", () => {
    Request(URL, CashCurrency);
});


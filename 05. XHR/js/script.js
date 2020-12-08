

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
    console.log("CashCurrency: ", currency);
}

function CardCurrency(currency){
    console.log("CardCurrency: ", currency);
}

Request(URL, CashCurrency);
Request(URL2, CardCurrency);



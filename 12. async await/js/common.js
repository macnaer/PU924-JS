let btn = document.querySelector("#load");
btn.addEventListener("click", Request);

// async function  Request() {
//   let url = "https://jsonplaceholder.typicode.com/users";

//   var response = await fetch(url);   // response working
//   // console.log("response ", response)
//   var data =  await response.json();
//   console.log(data)
 
//   var list = document.querySelector(".list");
//   var counter = 0;
//   var elem = data.map(item => {
//   counter++;
//   localStorage.setItem("User" + counter, item.id + " " + item.name + " " + item.email);
//   return "<li>" + item.id + " " + item.name + " " + item.email + "</li>";
//   });
//   list.insertAdjacentHTML("afterbegin", elem.join(" "));
// }



async function  Request() {
  let url = "https://jsonplaceholder.typicode.com/users";

  const data = await fetch(url).then(responce => {
      return responce.json();
    }).then(data => {
      return data;
    }).catch(err => console.log(err))
  console.log(data)
 
  var list = document.querySelector(".list");
  var counter = 0;
  var elem = data.map(item => {
  counter++;
  localStorage.setItem("User" + counter, item.id + " " + item.name + " " + item.email);
  return "<li>" + item.id + " " + item.name + " " + item.email + "</li>";
  });
  list.insertAdjacentHTML("afterbegin", elem.join(" "));
}


let Person = (function(){
  let name = "Bill";
  let surname = "Gates"
  let age = 50;

  getAge = function(){
    console.log(age);
  }

  return {
    name: name,
    surname: surname,
    getAge: getAge
  }


}())

console.log(Person);
console.log(Person.name);
console.log(Person.surname);
Person.getAge();
Person.age = 100;
// console.log(Person);
Person.getAge();
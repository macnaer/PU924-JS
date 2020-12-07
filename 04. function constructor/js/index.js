// Object

// let Person = {
//     name: "Bill",
//     surname: "Gates",
//     age: 56,
//     ShowPerson: function () {
//         console.log(`Name: ${this.name} Surname: ${this.surname} Age: ${this.age}`);
//     }
// }

// Person.ShowPerson();

 // function constructor 
function Dog(name, breed, age) {    
    this.name = name;   
    this.breed = breed;
    this.age = age;
    this.ShowInfo = function () {
      console.log(`Name: ${this.name} Breed: ${this.breed} Age: ${this.age}`);
    }
  }

  console.log(typeof(Dog));
  
  
  let Tuzik = new Dog("Tuzik", "Taxa", 2);
  console.log(typeof(Tuzik));
    
  let Bobik = new Dog("Bobik", "Doberman", 3);
  Bobik.ShowInfo();
  Tuzik.ShowInfo();

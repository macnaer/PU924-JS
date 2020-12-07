const numbers = [4, 6, 7, 5,1,45,6,7,9,7,0,5];

console.log(numbers);
console.log(typeof (numbers));
console.log(numbers.length);

for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
    if (numbers[i] === 45){
        console.log("45 index ", i);
    }
}

//  numbers.map(item => {
//     console.log(item);
// })

// for ( item in numbers){
//     console.log(item, " ", numbers[item]);
// }

console.log("=========================================>");

// numbers.push(0);                      // Додати в кінеуь масиву
// for ( item in numbers){
//     console.log(item, " ", numbers[item]);
// }

// numbers.pop();                         // Видалити з кінця
// for ( item in numbers){
//     console.log(item, " ", numbers[item]);
// }

// numbers.shift();                         // Видалити з початку
// for ( item in numbers){
//     console.log(item, " ", numbers[item]);
// }

// numbers.unshift(33);                 // Додати на початок

// for ( item in numbers){
//     console.log(item, " ", numbers[item]);
// }

// console.log(numbers);
// 
// var arr = [1,2,8,14,9,5,17,1];  // Сортування
// arr = arr.sort(compareFunction);
// function compareFunction(a , b){
//   return a - b;
// }
//  console.log(arr);  // Сортування

//  var arrStr = ["Jack", "Bill", "Stive", "Bob", "Mike"];
//  arrStr.sort();
//  console.log(arrStr);

// var arr = [1, 2, 8, 4, 9, 5, 7, 1];   // Сортування reverse
// console.log(arr);
// arr = arr.reverse();
// console.log(arr);

// numbers.sort((a, b) => a - b);


// for ( item in numbers){
//     console.log(item, " ", numbers[item]);
// }
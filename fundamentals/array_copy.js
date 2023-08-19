let myArray = [1, 2, 3, 4];
const myOtherArray = myArray.slice();

// const myOtherArray = copyArr(myArray);

// function copyArr(arr) {
//     let newArr = [];
//     for (let ele of arr) {
//         newArr.push(ele);
//     }
//     return newArr;
// }

myArray.pop();
console.log(myOtherArray); // [1, 2, 3, 4]

myArray = [1, 2];
console.log(myOtherArray);



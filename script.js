
/////////////////////// unit 1 //////////////////////////////

// let a = 5;
// let b = 1;
// a++;
// // Змініть код лише під цим рядком

// console.log(a);
// let sumAB = a + b;
// console.log(sumAB);

/////////////////////// unit 2 //////////////////////////////

// let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";

// console.log(output);
// console.clear();

/////////////////////// unit 3 //////////////////////////////

// let seven = 7;
// let three = "3";
// console.log(seven + three);
// // Змініть код лише під цим рядком
// console.log(typeof(seven));
// console.log(typeof(three));

/////////////////////// unit 4 //////////////////////////////

// let receivables = 10;
// let payables = 8;
// let netWorkingCapital = receivables - payables;
// console.log(`Net working capital is: ${netWorkingCapital}`);

/////////////////////// unit 5 //////////////////////////////

// let myArray = [1, 2, 3];
// let arraySum = myArray.reduce((previous, current) =>  previous + current);
// console.log(`Sum of array values is: ${arraySum}`);

/////////////////////// unit 6 //////////////////////////////

// let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
// console.log(innerHtml);

/////////////////////// unit 7 //////////////////////////////

// let x = 7;
// let y = 9;
// let result = "to come";

// if(x == y) {
//   result = "Equal!";
// } else {
//   result = "Not equal!";
// }

// console.log(result);

/////////////////////// unit 8 //////////////////////////////

// function getNine() {
//   let x = 6;
//   let y = 3;
//   return x + y;
// }

// let result = getNine();
// console.log(result);

/////////////////////// unit 9 //////////////////////////////

// function raiseToPower(b, e) {
//   return Math.pow(b, e);
// }

// let base = 2;
// let exp = 3;
// let power = raiseToPower(base, exp);
// console.log(power);

/////////////////////// unit 10 //////////////////////////////

// function countToFive() {
//   let firstFive = "12345";
//   let len = firstFive.length;
//   // Змініть код лише під цим рядком
//   for (let i = 0; i < len; i++) {
//   // Змініть код лише над цим рядком
//     console.log(firstFive[i]);
//   }
// }

// countToFive();

/////////////////////// unit 11 //////////////////////////////

// function zeroArray(m, n) {
//   // Створіть 2-D масив із m-рядків m та n-стовпчиків нулів
//   let newArray = [];
  
//   for (let i = 0; i < m; i++) {
//     // Додайте m-ий рядок до newArray
// let row = [];
//     for (let j = 0; j < n; j++) {
//       // Додає n нулів до поточного рядка, щоб створити стовпчики
//       row.push(0);
//     }
//     // Штовхає поточний рядок, який тепер містить n нулів, до масиву
//     newArray.push(row);
//   }
//   return newArray;
// }

// let matrix = zeroArray(3, 2);
// console.log(matrix);

/////////////////////// unit 12 //////////////////////////////

// function myFunc() {
//   for (let i = 1; i <= 4; i += 2) {
//     console.log("Still going!");
//   }
// }


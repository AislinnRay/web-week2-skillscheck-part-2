//////////////////PROBLEM 1////////////////////

// Write a function called stringItOut that takes in an array. Determine if it is an array of numbers or strings and sort it greatest to least accordingly (sort strings alphabetically). Return the array converted into a string using the toString method.

// let stringItOut = (arr) =>  {
//   if(arr.every(function(i){return i === String});
//     return arr.sort

// }

let stringItOut = arr => typeof arr[0] === 'number' ? arr.sort((a, b) => b - a).toString() : arr.sort((a, b) => a > b ? -1 : 1).toString()

//   for ( var i=0; i< a.length; i++ ) {
//       if (typeof a[i] === String){
//         return arr.sortAlphabetical;
//       } else if(typeof a[i] === Number){
//     return arr.sort
//   }; 
//   return true;
// }

//////////////////PROBLEM 2////////////////////

// Given the functions below: invoke the function math passing in complex, 2, and 3 as parameters. Save the result to a variable called mathResult.

function math(cb, num1, num2) {
  return cb(num1, num2)
}

function complex(num1, num2) {
  return Math.sin((Math.log(num1) + Math.tan(num2) * 100))
}

let mathResult = math(complex,2,3)

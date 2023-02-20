//array.map() is a method of array, which takes a function as argument.

/* 
    A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

    Calls a defined callback function on each element of an array, and returns an array that contains the results. (vs code suggestion)
*/
let numbers = [2, 36, 24, 25, 26, 7, 21, 25];
const doubleNumbers = numbers.map((number)=>number*2);
console.log(doubleNumbers)



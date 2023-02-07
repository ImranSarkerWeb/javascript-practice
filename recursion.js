/* 
A function that calls itself is known as recursive function and the approach is called rucursion.

Recursion makes the code clean, simpler and shorter.
*/

function sum(number){
    if(number == 1){
        return 1;
    }
    return number + sum(number - 1)
}

console.log(sum(5))


// factorial with recursion

function factorial(number){
    if(number == 1){
        return 1
    }
    return number * factorial(number-1) //recursive call
}

console.log(factorial(5))


//above same code using loop
let factorials = 1
for( let i = 5; i>=1; i--){
     factorials = factorials*i
}
console.log(factorials)
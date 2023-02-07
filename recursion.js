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
//problem 01
/* mindGame() function takes input as a number.
then multiply with 3,
with this product add 10,
then divide by two,
finally subtract 5.
return as number.
*/
function mindGame(number) {
    if (typeof number === "number") {
        return (((number * 3) + 10) / 2) - 5;
    } else {
        return "Please input as a number.";
    }
}
console.log(mindGame(5)) //--> 7.5
console.log(mindGame(50)) // --> 75
console.log(mindGame(-33)) //--> -49.5
console.log(mindGame('25')) //--> please input as a number
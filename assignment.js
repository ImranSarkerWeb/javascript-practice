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



//problem 2
/* evenOdd() function takes input as string
calculate the total character.
if ther number will even then return as even
else return as odd.
*/
function evenOdd(message) {
    if (typeof message === 'string') {
        const characterCount = message.length;
        if (characterCount % 2 == 0) {
            return 'even';
        } else {
            return 'odd';
        }
    } else {
        return "Please input as string."
    }
}
console.log(evenOdd('Batch7')) //-->even
console.log(evenOdd(['Imran Sarker'])) //-->Please input as string
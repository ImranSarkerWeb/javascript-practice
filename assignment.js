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
console.log(mindGame(33)) //--> -49.5
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



// problem 03
/* isLGSeven() function takes input as number,
deduct seven from it.
if the deduct result is less than seven then return the number;
else the deduct result is greater than seven then return number*2;
*/
function isLGSeven(number) {
    if (typeof number === 'number') {
        const deductSeven = number - 7;
        if (deductSeven < 7) {
            return deductSeven;
        } else {
            return number * 2
        }
    } else {
        return 'Please input as number.'
    }
}
console.log(isLGSeven(6))
console.log(isLGSeven(66))
console.log(isLGSeven('66'))


// problem 04
/*
findingBadData() function will take an array of number.
check the number valid or not and count the bad data
return the bad data.
*/
function findingBadData(arrayOfNumber) {
    if (Array.isArray(arrayOfNumber)) {
        let badData = 0;
        for (let i = 0; i < arrayOfNumber.length; i++) {
            if (typeof arrayOfNumber[i] === 'number') {
                if (arrayOfNumber[i] < 0) {
                    badData += 1;
                }
            }else{
                return 'Please put data as number in this array'
            }
            
        } return badData;
    } else {
        return 'Please input an array of number'
    }
}
console.log(findingBadData([-4, -9, -5, -33, -55]))
console.log(findingBadData(['this is just test', 'imarna.', 'this']))
console.log(findingBadData('oop is ther'))

// problem 5
/*
gemsToDiamond() function takes input three friend gems as number.
then multiply 21 with first friend gems
then multiply 32 with second friend gems
then multiply 43 with third friend gems
count the total gems after multiplying.
finally if the total gems will grter than or equal to 2000 then deduct 2000 and return the deducted vaule as number.
else return only total gems
*/
function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems) {
    if (typeof firstFriendGems === 'number' && typeof secondFriendGems === 'number' && typeof thirdFriendGems === 'number') {
        const friend1Gems = firstFriendGems * 21;
        const friend2Gems = secondFriendGems * 32;
        const friend3Gems = thirdFriendGems * 43;
        const totalGems = friend1Gems + friend2Gems + friend3Gems;
        if (totalGems > 1000 * 2) {
            return totalGems - 2000;
        } else {
            return totalGems;
        }
    } else {
        return 'Please input gems as number.'
    }
}
console.log(gemsToDiamond(20, 200, 50))
console.log(gemsToDiamond(1, 1, 1))
console.log(gemsToDiamond(100, 5, 1))
console.log(gemsToDiamond(20, 2, '25')) 

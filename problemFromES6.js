// Practice Problem map(), filter(), find()

/* 
1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
    Now convert this array into an even array (array with even 
    numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
    method. Hints: add one to any odd number and it will become an even 
    number. 
2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now 
    return/get all the elements which are divisible by 10 using 
    array.filter() method.
3) Now do the same task of question 2. But do this using array.find()
    method. Then compare the output of question 2 & question 3.

*/

//1)
console.log("\n========= problem 1 result")
const oddNums = [1, 3, 5, 7, 9];

const evenNums = oddNums.map((num) => num + 1);
console.log(evenNums);

//2)
console.log("\n========= problem 2 result")
const numbers = [33, 50, 79, 78, 90, 101, 30];
const divisibleBy10 = numbers.filter((num) => num % 10 == 0);
console.log(divisibleBy10);

//3)
console.log("\n========= problem 3 result")
const divisibleBy10_2 = numbers.find((num) => num % 10 == 0);
console.log(divisibleBy10_2);

/* 
        the .filter() method return an array of elements where met the condtition is true.
        the .find() method return only a single element where the first condition met true.
 */

// Practice Problem on reduce()

/*  

4) You have an array [ 1, 9, 17, 22 ]. Add the all elements 
    of this array and give output. Do this using for loop & 
    array.reduce() method. 
 */

//4
console.log("\n========= problem 4 result")
const someNumbers = [1, 9, 17, 22];

// using for loop
let forSum = 0;
for(num of someNumbers){
    forSum += num;
}
console.log(forSum)

//using .reduce method

const reduceSum = someNumbers.reduce((previous, current) => previous + current, 0)
console.log(reduceSum)



// Practice Problem: Access Object values
console.log("\n========= problem 5 result")
const student = {
    name: 'Feddie',
    age: 24,
}
//console the value of age

//sol: using dot notation
console.log(student.age)
//sol: using bracket notation
console.log(student["age"])


let data = {
    location: [
        {
            latitude: '34.5, 37.8',
            longituede: '98.77, 58.7',
            city: "Dhaka",
            country: 'Bangladesh',
        }
    ]
}
//console the value of city

// sol: using dot notation 
console.log(data.location[0].city)

//sol: using bracket notation
console.log(data['location'][0]['city'])

console.log("\n========= problem 6 result")
//challenging
const user ={
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }


/* 
    ● Console the value of email
    ● Console the value of address
    ● Console the value of city
    ● Console the value of lat
    ● Console the value of company name
*/

// sol: using dot notation 
console.log('email: ', user.email)
console.log("address: ", user.address)
console.log('city: ', user.address.city)
console.log('lat: ', user.address?.geo?.lat)
console.log('company name: ', user.company?.name)


//sol: using bracket notation

console.log('email: ', user["email"])
console.log('address: ', user['address'])
console.log('city: ', user['address']['city'])
console.log('lat: ', user['address']['city']['lat'])
console.log('company name: ', user['company']['name'])

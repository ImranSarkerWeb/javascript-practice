// JavaScript Object Notation

/* 
    We use this data format to exchange data between web application and servers.

    # A JSON Looks like a srigified Version of a regular JS Object.

    # We can create JSON variable like a regular object, but wrapped in single quote.
*/

const jsonVariable = '{}'
console.log(typeof jsonVariable) //string

/* 
    JSON objects can gather data like Numbers, Arrays, Booleans or Stings.
    However, they cannot store functions inside.
*/

//regular Object

const shop = {
    owner: "Imran",
    address:{
        Vill: "Dhatia",
        Post: "Dukla",
        PS: "Mukallipura",
        Dist:"GorurNikula"
    },
    conatct: ['+8880187548', 'emo@gamail.com'],
    isOpen: true,
    isNew: false,
}

console.log(typeof shop) //object

/* 
    We can convert a JS object to a JSON with the JSON.srtingify() method
*/

const jsonShop = JSON.stringify(shop) //converted a regular object to JSON data
console.log(jsonShop)

/* 
    We can convert a JSON data to reqular Object using JSON.parse() method
*/

const convertToObjFromJSON = JSON.parse(jsonShop);
console.log(convertToObjFromJSON)
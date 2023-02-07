/* 
    In programming, there is something known as the programming paradigms.
    OOP revolves around the idea of orgaizing our programs using objects to group related data and functionality.
    This is in conrast to the functional programming approach, where the data used in the app needs to ke kept from functions that operate on that data.

    With oop approach, we create an object and store data related to that object including variables, functions and output statements.
*/

let purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function () {
        const calculation = this.shoes * this.stateTax;
        console.log('Total Price:', calculation)
    }
}

/* 
    Functions inside object are known as methods.
    Now that the purchase1 object is created. We can access the totalPrice method on the purchase1 object using the dot notation.
*/
purchase1.totalPrice(); //120

/* 
    Using the dot notation, we can access all the property and methods from an object.


    an advantage to using the OOP aproach is that we can build as many object as we need.
*/
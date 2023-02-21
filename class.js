/* 
    In Programming there are situations where we need to build many objects that have a certain specific set of properties and methods.
    For example, you might need to build hundreds of car objects for a car racing game.
    To code this efficiently, you can use something called classes.
*/

class Car {
  constructor(color, speed) {
    this.color;
    this.speed;
  }
  turboOn() {
    console.log("turbo is on!");
  }
}

/* 
    classes are essentially a blueprint that we can repeatedly use to build new objects of a ceratian kind, as many as we want.

    In javascript any class is built using the class keyword, followed by the name of the class starting with capital letter and a pair of curly braces.
    Inside of the curly braces we have the constructor function which is accepets as many parameters as needed.
*/
// The role of the constructor function is to assign the passed in parameter to the future objects properties
// It is the constructor function that is used when instantiating new objects, instances of a given class.

/* 
    After the constructor is defined we can add as many methods we need.
    It's important to remember that we don't use the function keyword here.
    Just the name of the method is needed.
    once the class definition is ready we can start building car object.
*/

const car1 = new Car("red", 120);

// ======================================Creating classes==================================== \\

/* 
    By now, we knew that inheritance in JavaScript is based around the prototype object.

    All objects that are built from the prototype share the same functionality.

    When you need to code more complex OOP relationships, we can use the class keyword and its easy-to-understand and easy-to-reason-about syntax.
*/

//let's create a class called Tran

//use the class keyword, then specify the name of our class, with the first letter capitalized, and then we add an opening and a closing curly brace.

//class Trian {} //a Train class created

//Once we've coded this class, we'll be able to use the keyword "new" to instantiate objects of the Train class.

/* 
    In between the curly braces, the first piece of code that we need to define is the "constructor":
*/

class Train {
  constructor(color, lightsOn) {
    //The constructor will be used to build properties on the future object instance of the Train class.

    // For now, let's say that there are only two properties that each object instance of the Train class should have at the time it gets instantiated: color and lightsOn.
    this.color = color;
    this.lightsOn = lightsOn;
  }
//   Notice the syntax of the constructor. The constructor is a special function in my Train class.
/* 
  First of all, notice that there is no function keyword. Also, notice that the keyword constructor is used to define this function. 
  You give your constructor function parameters inside an opening and closing parenthesis, just like in regular functions. The names of parameters are color and lightsOn.  


  Next, inside the constructor function's body, you assigned the passed-in color parameter's value to "this.color", and the passed-in lightsOn parameter's value to "this.lightsOn".

*/
}


//let's create instances of Train class

let myFirstTrain = new Train('red', false);

/* 
    Inside the parentheses, we pass values such as "red" and false, for example, meaning that the color property is set to "red" and the lightsOn property is set to false.

    And, to be able to interact with the new object built this way, you need to assign it to a variable
*/
console.log(myFirstTrain)

// We can continue building instances of the Train class. Even if we give them exactly the same properties, they are still separate objects.

const mySecondTrain = new Train('blue', false);
const myThirdTrain = new Train('blue', false);

// However, this is not all that classes can offer.


// we can also add methods to classes, and these methods will then be shared by all future instance objects of our Train2 class.


class Train2 {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        let proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}


/* 
    Now, there are four methods on our Train2 class: 
    toggleLights(), lightsStatus(),  getSelf() and getPrototype().

    1. The toggleLights method uses the logical not operator, !. This operator will change the value stored in the lightsOn property of the future instance object of the Train class; hence the !this.lightsOn. And the = operator to its left means that it will get assigned to this.lightsOn, meaning that it will become the new value of the lightsOn property on that given instance object.

    2. The lightsStatus() method on the Train class just reports the current status of the lightsOn variable of a given object instance.

    3. The getSelf() method prints out the properties on the object instance it is called on.

    4. The getPrototype() console logs the prototype of the object instance of the Train class. The prototype holds all the properties shared by all the object instances of the Train class. To get the prototype, you'll be using JavaScript's built-in Object.getPrototypeOf() method, and passing it this object - meaning, the object instance inside of which this method is invoked.    

*/

// Now we can build a brand new train using this updated Train2 class:

const train4 = new Train2('red', false);
console.log(train4)

train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}
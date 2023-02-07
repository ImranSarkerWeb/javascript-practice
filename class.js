/* 
    In Programming there are situations where we need to build many objects that have a certain specific set of properties and methods.
    For example, you might need to build hundreds of car objects for a car racing game.
    To code this efficiently, you can use something called classes.
*/

class Car{
    constructor(color, speed){
        this.color;
        this.speed;
    }
    turboOn(){
        console.log("turbo is on!")
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

const car1 = new Car("red", 120)
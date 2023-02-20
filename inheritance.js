// inheritance 
/* 
    the inheritance model revoves around something called the prototype.
    Which is often refferred to as an original model from which other forms are developed.
    In javaScript the prototype is an object that can hold properties to be shared by multiple other objects, and this is the basis of
    how inheritance works in Javascript.
*/
//this is why it's sometimes said tha JavaScript implements a prototype of inheritance model.


//lets demonstrat it with a example

const bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true,
}
//the above code is a bird object.


//below create egale object using bird object as its prototype

let egale1 = Object.create(bird) //this egale1 object has all the property from the bird object (by inheritance)

console.log(egale1) // print:  {} , but it has all the property from bird object

//lets see
console.log(`Egale1 has wings: ${egale1.hasWings}`)
console.log(`Egale1 can fly: ${egale1.canFly}`)
console.log(`Egale1 has feathers: ${egale1.hasFeathers}`)

//so we can create lot of object as we want using this
//Object.created() methd

let egale2 = Object.create(bird)

//lets update the property, but this porperty does not affect to the bird object

let penguin1 = Object.create(bird)
penguin1.canFly = false;

console.log(penguin1) //print:- {canFly: false}

console.log(`penguin1 has wings: ${penguin1.hasWings}`)
console.log(`penguin1 can fly: ${penguin1.canFly}`)
console.log(`penguin1 has feathers: ${penguin1.hasFeathers}`)


/*  In JavaScript, we can use a prototype object to hold properties that can be shared with various other objects.  */
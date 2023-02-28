//different ways to create object
const player = {} //object literal

// console.log(typeof player)

const player1 = new Object() //object constructor
// console.log(typeof player1)

//we can create as object prototype using create method
player.name = "Mustafiz"
player.age = 23;

player.play = function(){
    console.log(this.name, " is playing now");
}

//now apllay create method
const cricketPlayer = Object.create(player);
// cricketPlayer.name = "Imran"; //replace current object name
// console.log(player.name)
// console.log(cricketPlayer)
// console.log(cricketPlayer.play())
// console.log(typeof cricketPlayer)


//using class

class Animal{
    constructor(color, name){
        this.color = color;
        this.name = name;
    }

    isTempt(bool){
        console.log("tempt: ", bool)
    }
}

const bird = new Animal('white', "pegion")
// console.log(bird)
// console.log(typeof bird)
// bird.isTempt(true)


//learning object methods

//=========Object.keys(objName)==========

const mofizAli = {
    name: "Mofiz Mia",
    age: 39,
    address:{
        vill: "NagerVita",
        post: "Daridaha",
        dist: "Bogra",
    },
    skilss: ["Singer", "dancer", "cooker", "coder", "RikshawPuller"],
    isMarried: false,
    play: function(){
        return this.name + " is playing now."
    }
}

console.log(mofizAli.play())


console.log(Object.keys(mofizAli))
console.log(Object.values(mofizAli))
console.log(Object.entries(mofizAli))
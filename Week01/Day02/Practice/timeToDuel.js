class Unit{
    constructor(name, cost, power, resilience){
        this.name = name
        this.cost = cost
        this.power = power
        this.resilience = resilience
    }

    attack(target){
        console.log(`${this.name} attacked ${target.name}`)
    }
}

class Effect{
    constructor(name, cost, text, stat, magnitude){
        this.name = name
        this.cost = cost
        this.text = text
        this.stat = stat
        this.magnitude = magnitude
    }

    play(unit){
        unit.cost -= this.cost;
        unit[this.stat] += this.magnitude
        // if (this.stat == "resilience"){
        //     unit.resilience += this.magnitude;
        // }else if (this.stat == "power"){
        //     unit.power +=  this.magnitude;
        // }
    }
}

const RedBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4)
const BlackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4)

const HardAlgorithm = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3", "resilience", +3)
const UnhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", "resilience", -2)
const PairProgramming = new Effect("Pair Programming", 3, "Increase target's power by 2", "power", +2)

// console.log(RedBeltNinja);
// HardAlgorithm.play(RedBeltNinja)
// console.log(RedBeltNinja)

// console.log(RedBeltNinja)
// UnhandledPromiseRejection.play(RedBeltNinja)
// console.log(RedBeltNinja)

// console.log(RedBeltNinja)
// PairProgramming.play(RedBeltNinja)
// console.log(RedBeltNinja)

RedBeltNinja.attack(BlackBeltNinja)
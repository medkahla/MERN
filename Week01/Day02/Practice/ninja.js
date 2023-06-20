class Ninja {
    constructor(name, health = 100){
        this.name = name
        this.health = health
        this.speed = 3
        this.strength = 3
    }
    sayName(){
        console.log(this.name)
    }
    showStats(){
        console.log(`This ninja "${this.name}" has ${this.health} health, his speed is ${this.speed} and his strength ${this.strength}`)
    }
    drinkSake(){
        this.health += 10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
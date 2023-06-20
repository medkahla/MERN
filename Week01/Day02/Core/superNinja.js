class Ninja {
    constructor(name, health = 100, speed = 3, strength = 3){
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
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

class Sensei extends Ninja{
    constructor(name, wisdom = 10){
        super(name, 200, 10, 10)
        this.wisdom = wisdom
    }
    speakWisdom(){
        //super.drinksake()
        this.drinkSake()
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

const superSensei = new Sensei("Kakashi");
superSensei.showStats();
superSensei.speakWisdom();
superSensei.showStats();

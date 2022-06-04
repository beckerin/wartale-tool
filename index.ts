import Knight from "./Classes/Knight"
import Monster from "./Classes/Monstro"
import Weapon from "./Classes/Weapon"


let diego = new Knight('Paladino')
let goblin = new Monster('Goblin', 10, 15, 10000000, 50, 300)
let ew = new Weapon(84, 103, diego, 8)
diego.weapon = ew

while (goblin.isAlive()) {
  diego.attack(goblin)
}








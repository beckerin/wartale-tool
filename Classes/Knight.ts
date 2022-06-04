import baseClass from "./Class";
import Map from "./Map";

export default class Knight extends baseClass {
  
  constructor(value: string) {
    var Morion = new Map('Phillai')
    super(value)

    this.cityBorn = Morion

    this.updateStatus()
    this.doLive()

  }

  public updateStatus() {
    this.hpMax = Math.floor(( this.level * 2.1 ) + ( this.strength * 0.6 ) + ( this.health * 2.2 ))
    this.manaMax = Math.floor((this.level * 0.9) + (this.spirit * 2.7))

    this.updateBaseStatus()
    
    this.atkBoost = Math.floor(this.strength / 130)

    if (this.weapon) {
      this.weapon.updateWeapon(this)
      this.atkMin = this.atkMin + Math.floor((this.talent + this.agility) / 40)
      this.atkMax = this.atkMax + Math.floor((this.talent + this.agility) / 40)
    } else {
      this.atkMin = this.atkMin + Math.floor(this.strength / 130) + Math.floor((this.talent + this.agility) / 40) + 1
      this.atkMax = this.atkMax + Math.floor(this.strength / 130) + Math.floor((this.talent + this.agility) / 35) + 1
    }
    
  }
}
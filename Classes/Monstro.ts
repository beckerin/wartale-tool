import baseClass from "./Class"

export default class Monster extends baseClass{
  constructor(name: string, atkMin: number, atkMax: number, hpMax: number, absorption: number, exp: number) {
    super(name)
    this.atkMin = atkMin
    this.atkMax = atkMax
    this.hpMax = hpMax
    this.hpCurr = hpMax
    this.absorption = absorption
    this.exp = exp
  }
}
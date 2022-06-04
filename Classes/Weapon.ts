import baseClass from "./Class";

export default class Weapon {
  private i_atkMin: number = 0;
  private i_atkMax: number = 0;

  private s_spec: baseClass | null | undefined;
  private s_atkPow: number = 0;

  public get atkMin(): number { return this.i_atkMin }
  public set atkMin(value: number) { this.i_atkMin = value }
  
  public get atkMax(): number {return this.i_atkMax}
  public set atkMax(value: number) { this.i_atkMax = value }
  
  public get spec(): baseClass | null | undefined {return this.s_spec}
  public set spec(value: baseClass | null | undefined) { this.s_spec = value }

  public get atkPow(): number {return this.s_atkPow}
  public set atkPow(value: number) { this.s_atkPow = value }

  constructor(atkMin: number, atkMax: number, spec: baseClass, atkPow: number) {
    this.atkMin = atkMin
    this.atkMax = atkMax
    this.spec = spec
    this.atkPow = atkPow
  }
  

  public updateWeapon(character: baseClass) {
    character.atkMin = this.atkMin
    character.atkMax = this.atkMax

    character.atkMin = character.atkMin + ( character.atkMin * character.atkBoost )
    character.atkMax = character.atkMax + (character.atkMax * character.atkBoost)

    if (this.spec ? character == this.spec : false) {
      character.atkMin = character.atkMin + Math.floor(character.level / 6)
      character.atkMax = character.atkMax + Math.floor(character.level / 6)

      character.atkMin = character.atkMin + Math.floor(character.level / this.atkPow )
      character.atkMax = character.atkMax + Math.floor(character.level / this.atkPow )
    }
    character.atkMin = character.atkMin + Math.floor((this.atkMin + this.atkMax) / 16)
  }
}
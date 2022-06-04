import Map from "./Map";
import Monster from "./Monstro";
import Weapon from "./Weapon";

export default class baseClass {

  public instance: this | null | undefined;
  // Status
  private b_name: string = '';
  private b_level: number = 1;
  private b_currExp: number = 0;
  private b_maxExp: number = 1000;
  private b_exp: number = 25
  
  private b_currHealth: number = 0;
  private b_maxHealth: number = 0;

  private b_currStamina: number = 0;
  private b_maxStamina: number = 0;
  
  private b_currMana: number = 0;
  private b_maxMana: number = 0;
  
  // Base Status
  private s_strength: number = 477;
  private s_spirit:   number = 74;
  private s_agility:  number = 90;
  private s_talent:   number = 94;
  private s_health:   number = 44;
  
  private s_status: number = 0;
  private s_statusPerLevel: number = 5;
  private s_expMultiplier: number = 0.127;

  // Defense Status
  private d_defense: number = 0;
  private d_block: number = 0;
  private d_absorption: number = 0;
  private d_evade: number = 0;

  // Attack Status
  private a_powerMin: number = 0;
  private a_powerMax: number = 0;
  private a_powerBoost: number = 0;
  private a_ratting: number = 0;
  private a_criticalChance: number = 0.15;
  private a_criticalDamage: number = 0.7;

  // QL Status
  private q_walkSpeed: number = 0;
  private q_deadPenality: number = 0;
  private q_bornCity: Map | null | undefined;
  private q_coords: Array<number> = [0, 0]

  // Items
  private i_weapon: Weapon | null | undefined;

  constructor(name: string) {
    this.name = name
  }
  
  
  public get name(): string { return this.b_name }
  public set name(value: string) { this.b_name = value }

  public get level(): number { return this.b_level }
  public set level(value: number) { this.b_level = value }

  public get currExp(): number { return this.b_currExp }
  public set currExp(value: number) { this.b_currExp = value }

  public get maxExp(): number { return this.b_maxExp }
  public set maxExp(value: number) { this.b_maxExp = value }
  
  get exp(): number { return this.b_exp }
  set exp(value: number) { this.b_exp = value }
  
  public get hpCurr(): number { return this.b_currHealth }
  public set hpCurr(value: number) { this.b_currHealth = value }
  
  public get stmCurr(): number { return this.b_currStamina }
  public set stmCurr(value: number) { this.b_currStamina = value }
  
  public get manaCurr(): number { return this.b_currMana }
  public set manaCurr(value: number) { this.b_currMana = value }
  
  //Base Status
  public get hpMax(): number { return this.b_maxHealth }
  public set hpMax(value: number) { this.b_maxHealth = value }
  
  public get stmMax(): number { return this.b_maxStamina }
  public set stmMax(value: number) { this.b_maxStamina = value }
  
  public get manaMax(): number { return this.b_maxMana }
  public set manaMax(value: number) { this.b_maxMana = value }

  // Status
  public get strength(): number { return this.s_strength }
  public set strength(value: number) { this.s_strength = value  }

  public get spirit(): number { return this.s_spirit }
  public set spirit(value: number) { this.s_spirit = value }

  public get agility(): number { return this.s_agility }
  public set agility(value: number) { this.s_agility = value }

  public get talent(): number { return this.s_talent }
  public set talent(value: number) { this.s_talent = value }

  public get health(): number { return this.s_health }
  public set health(value: number) { this.s_health = value }

  // Defense
  public get defense(): number { return this.d_defense }
  public set defense(value: number) { this.d_defense = value }

  public get block(): number { return this.d_block }
  public set block(value: number) { this.d_block = value }

  public get absorption(): number { return this.d_absorption }
  public set absorption(value: number) { this.d_absorption = value }

  public get evade(): number { return this.d_evade }
  public set evade(value: number) { this.d_evade = value }
  
  // Attack
  public get atkMin(): number { return this.a_powerMin }
  public set atkMin(value: number) {this.a_powerMin = value}
  
  public get atkMax(): number { return this.a_powerMax }
  public set atkMax(value: number) { this.a_powerMax = value }
  
  public get atkBoost(): number { return this.a_powerBoost }
  public set atkBoost(value: number) {this.a_powerBoost = value}
  
  public get atkRat(): number { return this.a_ratting }
  public set atkRat(value: number) {this.a_ratting = value}
  
  public get criticalChance(): number { return this.a_criticalChance }
  public set criticalChance(value: number) {this.a_criticalChance = value}
  
  public get criticalDamage(): number { return this.a_criticalDamage }
  public set criticalDamage(value: number) { this.a_criticalDamage = value }
  
  //QL Life
  public get walkSpeed(): number { return this.q_walkSpeed }
  public set walkSpeed(value: number) { this.q_walkSpeed = value }

  public get cityBorn(): Map | null | undefined{ return this.q_bornCity }
  public set cityBorn(value: Map | null | undefined) { this.q_bornCity = value }

  public get coords(): Array<number> { return this.q_coords }
  public set coords(value: Array<number>) { this.q_coords = value }

  // Items
  public get weapon(): Weapon | null | undefined{ return this.i_weapon }
  public set weapon(value: Weapon | null | undefined) {
    this.i_weapon = value
    if (this.i_weapon) this.i_weapon.updateWeapon(this)
  }

  

  public updateBaseStatus() {
    
    this.stmMax = Math.floor((this.level * 2.3) + (this.strength * 0.5) + (this.spirit * 1.0) + (this.talent * 0.5) + (this.health * 1.4) + 80)
    
    this.defense = Math.floor(( this.level * 1.4 ) + ( this.talent * 0.025 ) + this.agility)
    this.absorption = Math.floor(this.defense / 100) + Math.floor(this.strength / 40) + Math.floor(this.spirit / 40) + Math.floor(this.talent / 40) + Math.floor(this.health / 40) + Math.floor(this.level / 10)
    this.evade = 15
    
    this.atkMin = 1
    this.atkMax = 3

    this.walkSpeed = Math.ceil(0.4 + this.health/150 + this.talent/150 + this.level/150) + 1
  }

  public gainExp(value: number) {
    this.currExp = this.currExp + value
    this.shouldLevelUp()
  }

  public doLive() {
    //this.moveTo(this.q_bornCity)

    this.hpCurr = this.hpMax
    this.stmCurr = this.stmMax
    this.manaCurr = this.manaMax
  }

  private moveTo(map: Map) {
    this.coords = map.respawn
  }

  private doDie() {
    this.currExp = Math.abs(
      (this.maxExp * this.q_deadPenality) - this.currExp
    )
    //setTimeout(() => { this.doLive() }, 5000);
  }

  public attack(target: Monster) {
    if (!target.isAlive()) {
      console.log("Alvo já esta morto")
      return
    }
    if (!this.isAlive()) {
      console.log("Não é possivel atacar morto")
      return
    }

    let bruteDamage = Math.random() * (this.atkMin - this.atkMax) + this.atkMin
    let isCritical = Math.random() <= this.a_criticalChance
    bruteDamage += isCritical ? bruteDamage * this.a_criticalDamage : 0
    bruteDamage = bruteDamage - target.absorption
    let finalDamage = bruteDamage > 0 ? Math.floor(bruteDamage) : 0

    target.hpCurr -= finalDamage
    console.log(this.name, " atacou ", target.name, " com ", finalDamage, " de dano" +( isCritical ? ' critico': '')+ "!")

    if (!target.shouldDie()) return
    
    
    target.doDie()
    console.log(this.name," matou ",target.name,"!")
    this.gainExp(target.exp)
  }

  public shouldDie() {
    return this.hpCurr <= 0
  }
  public isAlive(): boolean {
    return this.hpCurr > 0
  }


  private shouldLevelUp() {
    if (this.currExp >= this.maxExp) {

      this.level += 1
      this.s_status += this.s_statusPerLevel
      this.currExp -=  this.maxExp
      this.maxExp += Math.floor(this.maxExp * this.s_expMultiplier)

      this.doLive()

      console.log(this.name," atingiu um novo nivel: ", this.level)
      this.shouldLevelUp()  
    }    
  }

}
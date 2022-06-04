export default class Map {
  public m_name: string = ''
  public m_respawn: Array<number> = [0, 0]

  public get name(): string { return this.m_name }
  private set name(value: string) { this.m_name = value }

  public get respawn(): Array<number> { return this.m_respawn }
  private set respawn(value: Array<number>) {this.m_respawn = value }
  
  constructor(name: string) {
    this.name = name
  }
}
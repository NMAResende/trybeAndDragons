import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  static intance = 0;

  constructor(name: string, dexterity: number) { 
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.intance += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf.intance;
  }
}
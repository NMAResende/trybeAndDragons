import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

export default class Warrior extends Archetypes {
  private _energyType: EnergyType;
  static intance = 0;

  constructor(name: string) { 
    super(name);
    this._energyType = 'stamina';
    Warrior.intance += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior.intance;
  }
}
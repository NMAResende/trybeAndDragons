import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

export default class Mage extends Archetypes {
  private _energyType: EnergyType;
  static intance = 0;

  constructor(name: string) { 
    super(name);
    this._energyType = 'mana';
    Mage.intance += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage.intance;
  }
}
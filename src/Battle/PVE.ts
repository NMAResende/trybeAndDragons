import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _player: Fighter,
    private _monster: Monster[] | Fighter[] | SimpleFighter[],
  ) {
    super(_player);
  }

  fight(): number {
    this._monster.forEach((monster) => {
      this._player.attack(monster);
      monster.attack(this._player);
    });

    return this._player.lifePoints === -1 ? -1 : 1;
  }
}
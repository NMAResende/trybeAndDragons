// import Fighter, { SimpleFighter } from '../Fighter';
// import Monster from '../Monster';
// import Battle from './Battle';

// export default class PVE extends Battle {
//   constructor(
//     private _player: Fighter, 
//     private _enemy: (Fighter | SimpleFighter | Monster)[],
//   ) {
//     super(_player);
//   }

//   fight(): number {
//     this._enemy.forEach((enemy) => {
//       this._player.attack(enemy);
//       enemy.attack(this._player);
//     });

//     return this._player.lifePoints === -1 ? -1 : 1;
//   }
// }
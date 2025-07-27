import { Healthy } from './Healthy'
import { PlayerState } from './PlayerState'

export class Dead extends PlayerState {
  move() {
    console.log('Player cannot move, they are dead.')
  }

  attack() {
    console.log('Player cannot attack, they are dead.')
  }

  heal() {
    console.log('Player cannot be healed, they are dead.')
  }

  getDamage() {
    console.log('Player is already dead, no damage taken.')
  }

  resuscitate(): void {
    this.player.health = 100
    this.player.setState(new Healthy(this.player))
  }
}

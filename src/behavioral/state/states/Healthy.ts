import { Dead } from './Dead'
import { Injured } from './Injured'
import { PlayerState } from './PlayerState'

export class Healthy extends PlayerState {
  move() {
    console.log('Player moves with full agility.')
  }

  attack() {
    console.log('Player attacks with full strength')
  }

  resuscitate(): void {
    console.log('Player is already alive')
  }

  getDamage(damage: number) {
    super.getDamage(damage)

    if (this.player.health <= 50 && this.player.health > 0) {
      this.player.setState(new Injured(this.player))
      return
    }

    if (this.player.health <= 0) {
      this.player.setState(new Dead(this.player))
    }
  }
}

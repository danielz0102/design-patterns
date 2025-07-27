import { Player } from '../Player'

export abstract class PlayerState {
  constructor(protected player: Player) {}

  abstract move(): void
  abstract attack(): void
  abstract resuscitate(): void

  heal(healing: number) {
    if (healing <= 0) {
      return
    }

    this.player.health += healing

    if (this.player.health > 100) {
      this.player.health = 100
    }
  }

  getDamage(damage: number): void {
    if (damage <= 0) {
      return
    }

    this.player.health -= damage

    if (this.player.health <= 0) {
      this.player.health = 0
    }
  }
}

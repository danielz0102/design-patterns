import { Dead } from "./Dead";
import { Healthy } from "./Healthy";
import { PlayerState } from "./PlayerState";

export class Injured extends PlayerState {
  move() {
    console.log("Player moves with reduced agility");
  }

  attack() {
    console.log("Player attacks with reduced strength");
  }

  resuscitate(): void {
    console.log("Player is already alive");
  }

  heal(healing: number) {
    super.heal(healing);

    if (this.player.health > 50) {
      this.player.setState(new Healthy(this.player));
    }
  }

  getDamage(damage: number) {
    super.getDamage(damage);

    if (this.player.health <= 0) {
      this.player.setState(new Dead(this.player));
    }
  }
}

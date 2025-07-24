import { Healthy } from "./states/Healthy";
import { PlayerState } from "./states/PlayerState";

export class Player {
  public health: number = 100;
  private state: PlayerState = new Healthy(this);

  constructor() {}

  move() {
    this.state.move();
  }

  attack() {
    this.state.attack();
  }

  heal(healing: number) {
    this.state.heal(healing);
  }

  getDamage(damage: number) {
    this.state.getDamage(damage);
  }

  resuscitate() {
    this.state.resuscitate();
  }

  setState(state: PlayerState) {
    this.state = state;
  }
}

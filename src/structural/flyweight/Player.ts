import { Model } from "./Model";

// Player stores the extrinsic state: the position (the lightest piece of data).
// The app can instantiate millions of Players without impacting performance.
export class Player {
  constructor(
    private model: Model,
    public x: number,
    public y: number,
    public z: number
  ) {}

  render(): void {
    this.model.render(this.x, this.y, this.z);
  }

  move(x: number, y: number, z: number): void {
    this.x = x;
    this.y = y;
    this.z = z;
    this.model.render(this.x, this.y, this.z);
  }
}

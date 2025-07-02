import { Chair } from "../types";

export class VictorianChair implements Chair {
  hasLegs(): boolean {
    return true;
  }

  sitOn(): void {
    console.log("Sitting on a Victorian chair.");
  }
}

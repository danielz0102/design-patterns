import type { Transport } from "../types";

export class Ship implements Transport {
  private loaded: boolean = false;

  async deliver() {
    if (!this.loaded) {
      console.log("Ship is not loaded. Cannot deliver.");
      return;
    }

    console.log("Delivering by sea in a container.");
  }

  async load() {
    this.loaded = true;
    console.log("Ship is loaded and ready for delivery.");
  }
}

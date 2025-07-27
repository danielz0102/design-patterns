import type { Transport } from '../types'

export class Truck implements Transport {
  private loaded: boolean = false

  deliver() {
    if (!this.loaded) {
      console.log('Truck is not loaded. Cannot deliver.')
      return
    }

    console.log('Delivering by road in a truck.')
  }

  load() {
    this.loaded = true
    console.log('Truck is loaded and ready for delivery.')
  }
}

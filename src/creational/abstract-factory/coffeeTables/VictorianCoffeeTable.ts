import { Chair, CoffeeTable } from '../types'

export class VictorianCoffeeTable implements CoffeeTable {
  private chairs: Chair[] = []

  hasLegs(): boolean {
    return true
  }

  putCoffeeOn(): void {
    console.log('Putting coffee on a Victorian coffee table.')
  }

  addChair(chair: Chair): void {
    this.chairs.push(chair)
  }

  removeChair(chair: Chair): void {
    if (this.chairs.length === 0) return

    this.chairs = this.chairs.filter((c) => c !== chair)
  }

  getChairs(): Chair[] {
    return this.chairs
  }
}

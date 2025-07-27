export interface Chair {
  hasLegs(): boolean
  sitOn(): void
}

export interface Sofa {
  hasLegs(): boolean
  lieOn(): void
}

export interface CoffeeTable {
  hasLegs(): boolean
  putCoffeeOn(): void
  addChair(chair: Chair): void
  removeChair(chair: Chair): void
  getChairs(): Chair[]
}

export interface FurnitureFactory {
  createChair(): Chair
  createSofa(): Sofa
  createCoffeeTable(): CoffeeTable
}

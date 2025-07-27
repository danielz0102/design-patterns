import { FurnitureFactory } from '../types'
import { VictorianChair } from '../chairs/VictorianChair'
import { VictorianCoffeeTable } from '../coffeeTables/VictorianCoffeeTable'
import { VictorianSofa } from '../sofas/VictorianSofa'

export class VictorianFurnitureFactory implements FurnitureFactory {
  createChair() {
    return new VictorianChair()
  }

  createCoffeeTable() {
    return new VictorianCoffeeTable()
  }

  createSofa() {
    return new VictorianSofa()
  }
}

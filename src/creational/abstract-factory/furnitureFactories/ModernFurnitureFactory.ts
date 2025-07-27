import { FurnitureFactory } from '../types'
import { ModernChair } from '../chairs/ModernChair'
import { ModernCoffeeTable } from '../coffeeTables/ModernCoffeeTable'
import { ModernSofa } from '../sofas/ModernSofa'

export class ModernFurnitureFactory implements FurnitureFactory {
  createChair() {
    return new ModernChair()
  }

  createCoffeeTable() {
    return new ModernCoffeeTable()
  }

  createSofa() {
    return new ModernSofa()
  }
}

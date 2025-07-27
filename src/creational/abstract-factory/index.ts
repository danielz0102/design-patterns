import { FurnitureFactory } from './types'

import { Scenario } from './Scenario'
import { ModernFurnitureFactory } from './furnitureFactories/ModernFurnitureFactory'
import { VictorianFurnitureFactory } from './furnitureFactories/VictorianFurniteFactory'
import { FURNITURE_TYPE } from './config'

const furnitureFactory = ((): FurnitureFactory => {
  switch (FURNITURE_TYPE) {
    case 'modern':
      return new ModernFurnitureFactory()
    case 'victorian':
      return new VictorianFurnitureFactory()
    default:
      throw new Error(`Unknown furniture type: ${FURNITURE_TYPE}`)
  }
})()
const scenario = new Scenario(furnitureFactory)

scenario.loadScene()

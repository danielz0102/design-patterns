import { Logistics } from './logistics/Logistics'
import { RoadLogistics } from './logistics/RoadLogistics'
import { SeaLogistics } from './logistics/SeaLogistics'
import { LOGISTICS_TYPE } from './config'

const logistics = ((): Logistics => {
  switch (LOGISTICS_TYPE) {
    case 'sea':
      return new SeaLogistics()
    case 'road':
      return new RoadLogistics()
    default:
      throw new Error(`Unknown logistics type: ${LOGISTICS_TYPE}`)
  }
})()

logistics.planDelivery()

import { Logistics } from './Logistics'
import { Truck } from '../transports/Truck'

export class RoadLogistics extends Logistics {
  createTransport() {
    return new Truck()
  }
}

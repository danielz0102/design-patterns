import { Logistics } from './Logistics'
import { Ship } from '../transports/Ship'

export class SeaLogistics extends Logistics {
  createTransport() {
    return new Ship()
  }
}

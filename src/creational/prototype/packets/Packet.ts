import { Prototype } from '../types'

export abstract class Packet implements Prototype {
  public sourcePort: number
  public destinationPort: number

  constructor(prototype: Packet)
  constructor(sourcePort: number, destinationPort: number)
  constructor(
    prototypeOrSourcePort: Packet | number,
    destinationPort?: number
  ) {
    if (prototypeOrSourcePort instanceof Packet) {
      this.sourcePort = prototypeOrSourcePort.sourcePort
      this.destinationPort = prototypeOrSourcePort.destinationPort
    } else {
      this.sourcePort = prototypeOrSourcePort
      this.destinationPort = destinationPort
    }
  }

  abstract copy(): Packet
  abstract send(destination: string): void
}

import { Packet } from './Packet'

type TcpPacketParams = {
  sourcePort: number
  destinationPort: number
  sequenceNumber: number
  acknowledgmentNumber: number
  data: string
}

export class TcpPacket extends Packet {
  public sequenceNumber: number
  public acknowledgmentNumber: number
  public data: string

  constructor(prototype: TcpPacket)
  constructor(params: TcpPacketParams)
  constructor(prototypeOrParams: TcpPacket | TcpPacketParams) {
    if (prototypeOrParams instanceof TcpPacket) {
      super(prototypeOrParams)
      this.sequenceNumber = prototypeOrParams.sequenceNumber
      this.acknowledgmentNumber = prototypeOrParams.acknowledgmentNumber
      this.data = prototypeOrParams.data
    } else {
      const {
        sourcePort,
        destinationPort,
        sequenceNumber,
        acknowledgmentNumber,
        data
      } = prototypeOrParams

      super(sourcePort, destinationPort)
      this.sequenceNumber = sequenceNumber
      this.acknowledgmentNumber = acknowledgmentNumber
      this.data = data
    }
  }

  copy() {
    return new TcpPacket(this)
  }

  send(destination: string): void {
    console.log(
      `Sending TCP packet to ${destination}:${this.destinationPort} from port ${this.sourcePort} with sequence number ${this.sequenceNumber}, acknowledgment number ${this.acknowledgmentNumber}: ${this.data}`
    )
  }
}

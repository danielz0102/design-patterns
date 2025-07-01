import { Packet } from "./Packet";

type UdpPacketParams = {
  sourcePort: number;
  destinationPort: number;
  length: number;
  data: string;
};

export class UdpPacket extends Packet {
  public data: string;
  public length: number;

  constructor(prototype: UdpPacket);
  constructor(params: UdpPacketParams);
  constructor(prototypeOrParams: UdpPacket | UdpPacketParams) {
    if (prototypeOrParams instanceof UdpPacket) {
      super(prototypeOrParams);
      this.data = prototypeOrParams.data;
      this.length = prototypeOrParams.length;
    } else {
      const { sourcePort, destinationPort, data } = prototypeOrParams;

      super(sourcePort, destinationPort);
      this.data = data;
      this.length = data.length;
    }
  }

  copy(): UdpPacket {
    return new UdpPacket(this);
  }

  send(destination: string): void {
    console.log(
      `Sending UDP packet to ${destination}:${this.destinationPort} from port ${this.sourcePort}: ${this.data}`
    );
  }
}

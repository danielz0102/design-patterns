import type { Transport } from "../types";

export abstract class Logistics {
  abstract createTransport(): Transport;

  planDelivery() {
    const transport = this.createTransport();
    transport.load();
    transport.deliver();
  }
}

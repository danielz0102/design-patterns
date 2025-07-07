import { PaymentProcessor } from "./types";

export class OrderService {
  constructor(protected paymentProcessor: PaymentProcessor) {}

  placeOrder(amount: number): void {
    this.paymentProcessor.processPayment(amount);
  }
}

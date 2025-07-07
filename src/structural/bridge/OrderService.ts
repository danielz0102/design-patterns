import { PaymentProcessor } from "./types";

export class OrderService {
  constructor(protected paymentProcessor: PaymentProcessor) {}

  placeOrder(amount: number): void {
    if (!this.paymentProcessor.validatePayment(amount)) {
      console.log("Payment validation failed");
      return;
    }

    this.paymentProcessor.processPayment(amount);
    this.paymentProcessor.logTransaction(amount);
    this.paymentProcessor.sendConfirmation();
  }
}

import { PaymentProcessor } from "../types";

export class Stripe implements PaymentProcessor {
  validatePayment(amount: number): boolean {
    console.log(`Stripe: Validating payment of $${amount}`);
    return amount > 0 && amount <= 10000;
  }

  processPayment(amount: number): void {
    console.log(`Stripe: Processing payment of $${amount}`);
  }

  logTransaction(amount: number): void {
    console.log(
      `Stripe: Logging transaction of $${amount} to Stripe dashboard`
    );
  }

  sendConfirmation(): void {
    console.log("Stripe: Sending payment confirmation email");
  }
}

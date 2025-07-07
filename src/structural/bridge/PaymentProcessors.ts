import { PaymentProcessor } from "./types";

export class Stripe implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing payment of $${amount} through Stripe.`);
  }
}

export class PayPal implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing payment of $${amount} through PayPal.`);
  }
}

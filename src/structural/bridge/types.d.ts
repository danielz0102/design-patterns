export interface PaymentProcessor {
  validatePayment(amount: number): boolean;
  processPayment(amount: number): void;
  logTransaction(amount: number): void;
  sendConfirmation(): void;
}

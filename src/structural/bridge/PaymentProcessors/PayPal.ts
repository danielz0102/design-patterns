import { PaymentProcessor } from '../types'

export class PayPal implements PaymentProcessor {
  validatePayment(amount: number): boolean {
    console.log(`PayPal: Validating payment of $${amount}`)
    return amount > 0 && amount <= 5000
  }

  processPayment(amount: number): void {
    console.log(`PayPal: Processing payment of $${amount}`)
  }

  logTransaction(amount: number): void {
    console.log(`PayPal: Logging transaction of $${amount} to PayPal records`)
  }

  sendConfirmation(): void {
    console.log('PayPal: Sending SMS confirmation')
  }
}

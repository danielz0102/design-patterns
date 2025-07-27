export class BankAccount {
  readonly id: string
  readonly name: string
  private balance: number

  constructor(name: string, initialBalance: number = 0) {
    this.id = crypto.randomUUID()
    this.name = name
    this.balance = initialBalance
  }

  getBalance(): number {
    return this.balance
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error('Amount must be greater than zero')
    }

    this.balance += amount
  }

  withdraw(amount: number): void {
    if (amount <= 0) {
      throw new Error('Amount must be greater than zero')
    }

    if (amount > this.balance) {
      return console.log('Insufficient funds')
    }

    this.balance -= amount
  }
}

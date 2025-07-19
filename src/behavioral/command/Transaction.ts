import { BankAccount } from "./BankAccount";
import { Command } from "./types";

export class Transaction implements Command {
  constructor(
    private from: BankAccount,
    private to: BankAccount,
    private amount: number
  ) {
    if (amount <= 0) {
      throw new Error("Amount must be greater than zero");
    }
  }

  execute(): void {
    this.from.withdraw(this.amount);
    this.to.deposit(this.amount);
  }

  undo(): void {
    this.to.withdraw(this.amount);
    this.from.deposit(this.amount);
  }
}
